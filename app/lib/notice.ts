import type { Notice } from '../types'

// KV 内のお知らせ保存キー。お知らせは1件運用なので固定キー。
const NOTICE_KEY = 'current'

// 変更履歴の保存キーと保持件数。
const HISTORY_KEY = 'history'
const HISTORY_LIMIT = 50

// 本文の最大文字数。
export const NOTICE_MESSAGE_MAX_LENGTH = 500

// 美容室はJST運用。Workers ランタイムのTZはUTCのため、オフセットを明示して
// 「入力した時刻（JSTの壁時計）」と「now（UTCの瞬間）」を正しく比較する。
const JST_OFFSET = '+09:00'

// datetime-local の入力形式（秒は任意）。
const DATETIME_LOCAL_RE = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2}))?$/

export type NoticeHistoryEntry = {
  at: string
  email: string | null
  notice: Notice
}

export type NoticeValidationResult = { ok: true; notice: Notice } | { ok: false; error: string }

/**
 * datetime-local の入力値（"2026-06-19T13:00" = JSTの壁時計）を、
 * オフセット付きの一意なISO文字列（"2026-06-19T13:00:00+09:00"）に変換する。
 * 空文字はそのまま空文字（＝期間指定なし）。
 */
export const toStoredIso = (inputValue: string): string => {
  if (!inputValue) return ''
  // 秒が無い "YYYY-MM-DDTHH:mm"（長さ16）には ":00" を補う
  const withSeconds = inputValue.length === 16 ? `${inputValue}:00` : inputValue
  return `${withSeconds}${JST_OFFSET}`
}

/**
 * datetime-local の値を厳密に検証してISO文字列へ変換する。
 * 形式不正・存在しない日時は ok:false。
 */
const parseDateTimeLocal = (value: string): { ok: true; value: string } | { ok: false } => {
  if (!value) return { ok: true, value: '' }
  const match = DATETIME_LOCAL_RE.exec(value)
  if (!match) return { ok: false }
  const [, year, month, day, hour, minute, second = '00'] = match
  const date = new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}${JST_OFFSET}`)
  if (Number.isNaN(date.getTime())) return { ok: false }
  // 2026-02-31 のような存在しない日時はパーサが繰り上げる場合があるため、
  // JSTの壁時計に戻して構成要素が一致するか照合する。
  const wallClock = new Date(date.getTime() + 9 * 60 * 60 * 1000)
  const sameComponents =
    wallClock.getUTCFullYear() === Number(year) &&
    wallClock.getUTCMonth() === Number(month) - 1 &&
    wallClock.getUTCDate() === Number(day) &&
    wallClock.getUTCHours() === Number(hour) &&
    wallClock.getUTCMinutes() === Number(minute) &&
    wallClock.getUTCSeconds() === Number(second)
  if (!sameComponents) return { ok: false }
  return { ok: true, value: toStoredIso(value) }
}

/**
 * 管理画面のフォーム入力を検証してお知らせに変換する。
 * 不正な場合はユーザー向けエラーメッセージを返す。
 */
export const parseNoticeForm = (form: FormData): NoticeValidationResult => {
  const message = String(form.get('message') ?? '').trim()
  if (!message) return { ok: false, error: '本文を入力してください。' }
  if (message.length > NOTICE_MESSAGE_MAX_LENGTH) {
    return { ok: false, error: `本文は${NOTICE_MESSAGE_MAX_LENGTH}文字以内で入力してください。` }
  }

  const start = parseDateTimeLocal(String(form.get('startAt') ?? ''))
  if (!start.ok) return { ok: false, error: '表示開始の日時が不正です。' }
  const end = parseDateTimeLocal(String(form.get('endAt') ?? ''))
  if (!end.ok) return { ok: false, error: '表示終了の日時が不正です。' }

  if (start.value && end.value && new Date(start.value) > new Date(end.value)) {
    return { ok: false, error: '表示終了は表示開始以降にしてください。' }
  }

  return {
    ok: true,
    notice: {
      message,
      startAt: start.value,
      endAt: end.value,
      enabled: form.get('enabled') === 'on',
    },
  }
}

const isNotice = (value: unknown): value is Notice => {
  if (typeof value !== 'object' || value === null) return false
  const notice = value as Record<string, unknown>
  return (
    typeof notice.message === 'string' &&
    typeof notice.startAt === 'string' &&
    typeof notice.endAt === 'string' &&
    typeof notice.enabled === 'boolean'
  )
}

const isHistoryEntry = (value: unknown): value is NoticeHistoryEntry => {
  if (typeof value !== 'object' || value === null) return false
  const entry = value as Record<string, unknown>
  return (
    typeof entry.at === 'string' && (typeof entry.email === 'string' || entry.email === null) && isNotice(entry.notice)
  )
}

/**
 * 保存済みISO文字列を datetime-local 用の値（"YYYY-MM-DDTHH:mm"）へ戻す。
 * 先頭16文字がそのままJSTの壁時計表現になる。
 */
export const toInputValue = (stored: string): string => (stored ? stored.slice(0, 16) : '')

/**
 * 「今このお知らせを表示すべきか」を判定する。
 * 有効フラグON・本文あり・（開始/終了が指定されていれば）期間内、を満たすこと。
 */
export const isNoticeActive = (notice: Notice | null, now: Date): notice is Notice => {
  if (!notice?.enabled || !notice.message.trim()) return false
  if (notice.startAt) {
    const start = new Date(notice.startAt)
    if (!Number.isNaN(start.getTime()) && now < start) return false
  }
  if (notice.endAt) {
    const end = new Date(notice.endAt)
    if (!Number.isNaN(end.getTime()) && now > end) return false
  }
  return true
}

/** KV から保存済みお知らせを読む（未設定・KV未接続・型不正なら null）。 */
export const getStoredNotice = async (kv: KVNamespace | undefined): Promise<Notice | null> => {
  if (!kv) return null
  const value: unknown = await kv.get(NOTICE_KEY, 'json')
  return isNotice(value) ? value : null
}

/** KV にお知らせを保存する。 */
export const saveStoredNotice = async (kv: KVNamespace, notice: Notice): Promise<void> => {
  await kv.put(NOTICE_KEY, JSON.stringify(notice))
}

/** KV から変更履歴を読む（新しい順）。不正な要素は除外する。 */
export const getNoticeHistory = async (kv: KVNamespace): Promise<NoticeHistoryEntry[]> => {
  const value: unknown = await kv.get(HISTORY_KEY, 'json')
  if (!Array.isArray(value)) return []
  return value.filter(isHistoryEntry)
}

/** お知らせの変更履歴を追記する（最新50件を保持）。 */
export const appendNoticeHistory = async (
  kv: KVNamespace,
  notice: Notice,
  email: string | null,
  now: Date = new Date()
): Promise<void> => {
  const history = await getNoticeHistory(kv)
  const entry: NoticeHistoryEntry = { at: now.toISOString(), email, notice }
  await kv.put(HISTORY_KEY, JSON.stringify([entry, ...history].slice(0, HISTORY_LIMIT)))
}

/** 公開向けに「今表示すべきお知らせ」を返す。表示対象が無ければ null。 */
export const getActiveNotice = async (kv: KVNamespace | undefined, now: Date): Promise<Notice | null> => {
  const notice = await getStoredNotice(kv)
  return isNoticeActive(notice, now) ? notice : null
}
