import type { MiddlewareHandler } from 'hono'
import { createHono } from 'honox/factory'
import { describe, expect, it, vi } from 'vitest'
import type { Notice } from '../types'
import middleware from './_middleware'

const createTestApp = () => {
  const app = createHono()
  app.use('*', ...(middleware as unknown as MiddlewareHandler[]))
  app.get('/', (c) => c.html('<html><body>top</body></html>'))
  app.get('/admin', (c) => c.html('<html><body>admin</body></html>'))
  return app
}

describe('セキュリティヘッダー', () => {
  it('CSP が設定される', async () => {
    const res = await createTestApp().request('https://success-salon.haton14.com/')
    const csp = res.headers.get('content-security-policy')

    expect(csp).toContain("default-src 'self'")
    expect(csp).toContain("object-src 'none'")
    expect(csp).toContain("frame-ancestors 'self'")
  })

  it('X-Content-Type-Options: nosniff が設定される', async () => {
    const res = await createTestApp().request('https://success-salon.haton14.com/')

    expect(res.headers.get('x-content-type-options')).toBe('nosniff')
  })

  it('管理画面は no-store でキャッシュされない', async () => {
    const res = await createTestApp().request('https://success-salon.haton14.com/admin')

    expect(res.headers.get('cache-control')).toBe('no-store')
  })

  it('お知らせをSSRするHTMLは毎回再検証させる', async () => {
    const res = await createTestApp().request('https://success-salon.haton14.com/')

    expect(res.headers.get('cache-control')).toBe('no-cache')
  })
})

describe('お知らせのSSR', () => {
  const notice: Notice = { message: '本日は臨時休業します', startAt: '', endAt: '', enabled: true }

  const createNoticeApp = () => {
    const app = createHono()
    app.use('*', ...(middleware as unknown as MiddlewareHandler[]))
    app.get('/', (c) => c.json({ notice: c.get('activeNotice') }))
    return app
  }

  it('KVに表示中のお知らせがあればContextへ載せる', async () => {
    const kv = { get: async () => notice } as unknown as KVNamespace
    const res = await createNoticeApp().request('https://success-salon.haton14.com/', {}, { NOTICE: kv })

    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({ notice })
  })

  it('KV障害時もページ本体を表示する', async () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    const kv = {
      get: async () => {
        throw new Error('KV down')
      },
    } as unknown as KVNamespace
    const app = createHono()
    app.use('*', ...(middleware as unknown as MiddlewareHandler[]))
    app.get('/', (c) => c.text('ok'))

    const res = await app.request('https://success-salon.haton14.com/', {}, { NOTICE: kv })

    expect(res.status).toBe(200)
    expect(await res.text()).toBe('ok')
    expect(errorSpy).toHaveBeenCalled()
    errorSpy.mockRestore()
  })
})
