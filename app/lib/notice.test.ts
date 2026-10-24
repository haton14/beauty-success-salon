import { describe, expect, it } from 'vitest'
import type { Notice } from '../types'
import {
  appendNoticeHistory,
  getActiveNotice,
  getNoticeHistory,
  getStoredNotice,
  isNoticeActive,
  NOTICE_MESSAGE_MAX_LENGTH,
  parseNoticeForm,
  toInputValue,
  toStoredIso,
} from './notice'

const base: Notice = { message: 'テスト', startAt: '', endAt: '', enabled: true }

const makeForm = (values: Record<string, string>): FormData => {
  const form = new FormData()
  for (const [key, value] of Object.entries(values)) {
    form.set(key, value)
  }
  return form
}

describe('toStoredIso', () => {
  it('datetime-local値にJSTオフセットと秒を付与する', () => {
    expect(toStoredIso('2026-06-19T13:00')).toBe('2026-06-19T13:00:00+09:00')
  })

  it('空文字は空文字のまま（期間指定なし）', () => {
    expect(toStoredIso('')).toBe('')
  })
})

describe('toInputValue', () => {
  it('保存ISOをdatetime-local用の値に戻す', () => {
    expect(toInputValue('2026-06-19T13:00:00+09:00')).toBe('2026-06-19T13:00')
  })

  it('空文字は空文字', () => {
    expect(toInputValue('')).toBe('')
  })
})

describe('isNoticeActive', () => {
  const now = new Date('2026-06-19T12:00:00+09:00')

  it('有効・本文あり・期間指定なしなら表示対象', () => {
    expect(isNoticeActive(base, now)).toBe(true)
  })

  it('enabled=false なら非表示', () => {
    expect(isNoticeActive({ ...base, enabled: false }, now)).toBe(false)
  })

  it('本文が空白のみなら非表示', () => {
    expect(isNoticeActive({ ...base, message: '   ' }, now)).toBe(false)
  })

  it('開始前は非表示', () => {
    expect(isNoticeActive({ ...base, startAt: '2026-06-19T13:00:00+09:00' }, now)).toBe(false)
  })

  it('開始後は表示', () => {
    expect(isNoticeActive({ ...base, startAt: '2026-06-19T11:00:00+09:00' }, now)).toBe(true)
  })

  it('終了後は非表示', () => {
    expect(isNoticeActive({ ...base, endAt: '2026-06-19T11:00:00+09:00' }, now)).toBe(false)
  })

  it('JSTで指定した期間をUTCの現在時刻と正しく比較する（タイムゾーン回帰）', () => {
    // 2026-06-19T03:30Z = 12:30 JST。開始12:00JST後・終了13:00JST前なので表示。
    const utcNow = new Date('2026-06-19T03:30:00Z')
    const notice: Notice = {
      ...base,
      startAt: toStoredIso('2026-06-19T12:00'),
      endAt: toStoredIso('2026-06-19T13:00'),
    }
    expect(isNoticeActive(notice, utcNow)).toBe(true)
  })

  it('null は非表示', () => {
    expect(isNoticeActive(null, now)).toBe(false)
  })
})

describe('getActiveNotice', () => {
  const makeKv = (value: Notice | null) => ({ get: async () => value }) as unknown as KVNamespace

  it('KV未接続なら null', async () => {
    expect(await getActiveNotice(undefined, new Date())).toBeNull()
  })

  it('表示対象のお知らせを返す', async () => {
    const notice: Notice = { ...base }
    expect(await getActiveNotice(makeKv(notice), new Date('2026-06-19T12:00:00+09:00'))).toEqual(notice)
  })

  it('期間外なら null を返す', async () => {
    const notice: Notice = { ...base, endAt: '2020-01-01T00:00:00+09:00' }
    expect(await getActiveNotice(makeKv(notice), new Date())).toBeNull()
  })
})

describe('parseNoticeForm', () => {
  it('正しい入力をお知らせに変換する', () => {
    const result = parseNoticeForm(
      makeForm({
        message: '  臨時休業です  ',
        startAt: '2026-06-19T13:00',
        endAt: '2026-06-19T15:30',
        enabled: 'on',
      })
    )

    expect(result).toEqual({
      ok: true,
      notice: {
        message: '臨時休業です',
        startAt: '2026-06-19T13:00:00+09:00',
        endAt: '2026-06-19T15:30:00+09:00',
        enabled: true,
      },
    })
  })

  it('本文が空ならエラー', () => {
    expect(parseNoticeForm(makeForm({ message: '   ' }))).toEqual({
      ok: false,
      error: '本文を入力してください。',
    })
  })

  it('本文が上限を超えるとエラー', () => {
    const result = parseNoticeForm(makeForm({ message: 'あ'.repeat(NOTICE_MESSAGE_MAX_LENGTH + 1) }))

    expect(result.ok).toBe(false)
  })

  it('日時の形式が不正ならエラー', () => {
    expect(parseNoticeForm(makeForm({ message: '休業', startAt: '2026/06/19 13:00' })).ok).toBe(false)
  })

  it('存在しない日時ならエラー', () => {
    expect(parseNoticeForm(makeForm({ message: '休業', startAt: '2026-02-31T13:00' })).ok).toBe(false)
  })

  it('終了が開始より前ならエラー', () => {
    expect(
      parseNoticeForm(makeForm({ message: '休業', startAt: '2026-06-19T15:00', endAt: '2026-06-19T13:00' })).ok
    ).toBe(false)
  })
})

describe('getStoredNotice', () => {
  it('型が不正な値は null を返す', async () => {
    const kv = { get: async () => ({ message: 1 }) } as unknown as KVNamespace
    expect(await getStoredNotice(kv)).toBeNull()
  })
})

describe('変更履歴', () => {
  const makeMemoryKv = () => {
    const store = new Map<string, string>()
    return {
      kv: {
        get: async (key: string) => {
          const value = store.get(key)
          return value ? JSON.parse(value) : null
        },
        put: async (key: string, value: string) => {
          store.set(key, value)
        },
      } as unknown as KVNamespace,
      store,
    }
  }

  it('変更履歴を新しい順に記録する', async () => {
    const { kv } = makeMemoryKv()
    const first = new Date('2026-06-19T00:00:00Z')
    const second = new Date('2026-06-19T01:00:00Z')

    await appendNoticeHistory(kv, base, 'owner@example.com', first)
    await appendNoticeHistory(kv, { ...base, message: '更新後' }, 'owner@example.com', second)

    const history = await getNoticeHistory(kv)
    expect(history).toHaveLength(2)
    expect(history[0]).toEqual({
      at: second.toISOString(),
      email: 'owner@example.com',
      notice: { ...base, message: '更新後' },
    })
    expect(history[1]?.at).toBe(first.toISOString())
  })

  it('不正な履歴要素は読み取り時に除外する', async () => {
    const { kv, store } = makeMemoryKv()
    store.set('history', JSON.stringify([{ at: 'x', email: null }, { ...base }]))

    expect(await getNoticeHistory(kv)).toEqual([])
  })
})
