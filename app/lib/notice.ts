import type { Notice } from '../types'

// KV 内のお知らせ保存キー。お知らせは1件運用なので固定キー。
const NOTICE_KEY = 'current'

// 美容室はJST運用。Workers ランタイムのTZはUTCのため、オフセットを明示して
// 「入力した時刻（JSTの壁時計）」と「now（UTCの瞬間）」を正しく比較する。
const JST_OFFSET = '+09:00'

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

/** KV から保存済みお知らせを読む（未設定・KV未接続なら null）。 */
export const getStoredNotice = async (kv: KVNamespace | undefined): Promise<Notice | null> => {
  if (!kv) return null
  return await kv.get<Notice>(NOTICE_KEY, 'json')
}

/** KV にお知らせを保存する。 */
export const saveStoredNotice = async (kv: KVNamespace, notice: Notice): Promise<void> => {
  await kv.put(NOTICE_KEY, JSON.stringify(notice))
}

/** 公開向けに「今表示すべきお知らせ」を返す。表示対象が無ければ null。 */
export const getActiveNotice = async (kv: KVNamespace | undefined, now: Date): Promise<Notice | null> => {
  const notice = await getStoredNotice(kv)
  return isNoticeActive(notice, now) ? notice : null
}
