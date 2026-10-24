import type { Context } from 'hono'
import { describe, expect, it, vi } from 'vitest'
import { checkRateLimit, getRateLimitKey } from './rateLimit'

const mockContext = (env: unknown, ip: string | undefined = undefined) =>
  ({
    env,
    req: {
      header: (name: string) => (name === 'cf-connecting-ip' ? ip : undefined),
    },
  }) as unknown as Context

describe('getRateLimitKey', () => {
  it('cf-connecting-ip をそのまま使う', () => {
    expect(getRateLimitKey(mockContext({}, '203.0.113.1'))).toBe('203.0.113.1')
  })

  it('IPが無ければ unknown に集約する', () => {
    expect(getRateLimitKey(mockContext({}))).toBe('unknown')
  })
})

describe('checkRateLimit', () => {
  it('バインディングが無ければ素通しする', async () => {
    await expect(checkRateLimit(mockContext({}))).resolves.toBe(true)
  })

  it('制限内なら true', async () => {
    const limit = vi.fn().mockResolvedValue({ success: true })
    const context = mockContext({ NOTICE_RATE_LIMITER: { limit } }, '203.0.113.1')

    await expect(checkRateLimit(context)).resolves.toBe(true)
    expect(limit).toHaveBeenCalledWith({ key: '203.0.113.1' })
  })

  it('制限超過なら false', async () => {
    const limit = vi.fn().mockResolvedValue({ success: false })
    const context = mockContext({ NOTICE_RATE_LIMITER: { limit } }, '203.0.113.1')

    await expect(checkRateLimit(context)).resolves.toBe(false)
  })
})
