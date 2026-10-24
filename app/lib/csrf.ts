import type { Context } from 'hono'

/**
 * 状態変更リクエストが同一オリジンから来たかを検証する。
 * まず Sec-Fetch-Site（ブラウザが付与し、クロスサイトから偽装できない）を確認し、
 * 無い場合は Origin をリクエストURLと照合する。
 * Origin が無い・不正・不一致の場合は false。
 */
export const isSameOrigin = (c: Context): boolean => {
  if (c.req.header('Sec-Fetch-Site') === 'same-origin') return true
  const origin = c.req.header('Origin')
  if (!origin) return false
  try {
    return new URL(origin).origin === new URL(c.req.url).origin
  } catch {
    return false
  }
}
