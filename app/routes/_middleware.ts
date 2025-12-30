import { createMiddleware } from 'hono/factory'
import { secureHeaders } from 'hono/secure-headers'

// セキュリティヘッダーミドルウェア
const secureHeadersMiddleware = createMiddleware(async (c, next) => {
  const middleware = secureHeaders({
    xFrameOptions: 'DENY',
    xContentTypeOptions: 'nosniff',
    referrerPolicy: 'strict-origin-when-cross-origin',
  })
  await middleware(c, next)
})

// HonoXでは配列でエクスポート
export default [secureHeadersMiddleware]
