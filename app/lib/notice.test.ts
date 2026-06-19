import { describe, expect, it } from 'vitest'
import type { Notice } from '../types'
import { getActiveNotice, isNoticeActive, toInputValue, toStoredIso } from './notice'

const base: Notice = { message: 'テスト', startAt: '', endAt: '', enabled: true }

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
