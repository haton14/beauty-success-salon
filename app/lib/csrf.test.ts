import type { Context } from 'hono'
import { describe, expect, it } from 'vitest'
import { isSameOrigin } from './csrf'

const mockContext = (
  origin: string | undefined,
  url = 'https://success-salon.haton14.com/admin',
  secFetchSite: string | undefined = undefined
) =>
  ({
    req: {
      header: (name: string) => {
        if (name === 'Origin') return origin
        if (name === 'Sec-Fetch-Site') return secFetchSite
        return undefined
      },
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

  it('Origin が null 文字列なら false', () => {
    expect(isSameOrigin(mockContext('null'))).toBe(false)
  })

  it('Origin が不正な文字列なら false', () => {
    expect(isSameOrigin(mockContext('not-a-url'))).toBe(false)
  })

  it('Origin が無くても Sec-Fetch-Site: same-origin なら true', () => {
    expect(isSameOrigin(mockContext(undefined, undefined, 'same-origin'))).toBe(true)
  })

  it('Sec-Fetch-Site: cross-site なら false', () => {
    expect(isSameOrigin(mockContext(undefined, undefined, 'cross-site'))).toBe(false)
  })
})
