import type { MiddlewareHandler } from 'hono'
import { createHono } from 'honox/factory'
import { describe, expect, it } from 'vitest'
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

  it('通常のHTMLはエッジキャッシュ向けのCache-Controlになる', async () => {
    const res = await createTestApp().request('https://success-salon.haton14.com/')

    expect(res.headers.get('cache-control')).toContain('s-maxage=3600')
  })
})
