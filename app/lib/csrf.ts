import type { Context } from 'hono'

/**
 * 状態変更リクエストが同一オリジンから来たかを Origin ヘッダーで検証する。
 * Origin が無い・不正・リクエストURLと不一致の場合は false。
 */
export const isSameOrigin = (c: Context): boolean => {
  const origin = c.req.header('Origin')
  if (!origin) return false
  try {
    return new URL(origin).origin === new URL(c.req.url).origin
  } catch {
    return false
  }
}
