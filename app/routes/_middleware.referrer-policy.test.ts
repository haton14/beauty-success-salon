import type { MiddlewareHandler } from 'hono'
import { createHono } from 'honox/factory'
import { describe, expect, it } from 'vitest'
import middleware from './_middleware'

const createTestApp = () => {
  const app = createHono()
  app.use('*', ...(middleware as unknown as MiddlewareHandler[]))
  app.get('/', (c) => c.html('<html><body>top</body></html>'))
  return app
}

describe('Referrer-Policy', () => {
  // no-referrer だと同一オリジンのフォームPOSTでも Origin: null になり、
  // /admin のCSRF検証が誤って403になるため same-origin を固定する。
  it('same-origin を返す', async () => {
    const res = await createTestApp().request('https://success-salon.haton14.com/')

    expect(res.headers.get('referrer-policy')).toBe('same-origin')
  })
})
