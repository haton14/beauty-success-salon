import type { Context } from 'hono'
import { describe, expect, it } from 'vitest'
import { isSameOrigin } from './csrf'

const mockContext = (origin: string | undefined, url = 'https://success-salon.haton14.com/admin') =>
  ({
    req: {
      header: (name: string) => (name === 'Origin' ? origin : undefined),
      url,
    },
  }) as unknown as Context

describe('isSameOrigin', () => {
  it('Origin がリクエストURLと一致すれば true', () => {
    expect(isSameOrigin(mockContext('https://success-salon.haton14.com'))).toBe(true)
  })

  it('Origin が不一致なら false', () => {
    expect(isSameOrigin(mockContext('https://evil.example.com'))).toBe(false)
  })

  it('Origin が無ければ false', () => {
    expect(isSameOrigin(mockContext(undefined))).toBe(false)
  })

  it('Origin が不正な文字列なら false', () => {
    expect(isSameOrigin(mockContext('not-a-url'))).toBe(false)
  })
})
