import type { Context } from 'hono'
import type { Bindings } from '../types'

/**
 * レート制限のキー。Cloudflare が付与するクライアントIPを使う。
 * ローカル等で IP が無い場合は 'unknown' に集約する。
 */
export const getRateLimitKey = (c: Context): string => c.req.header('cf-connecting-ip')?.trim() || 'unknown'

/**
 * /api/notice のレート制限をチェックする。制限内なら true。
 * バインディング未接続（ローカル開発など）は素通しする。
 */
export const checkRateLimit = async (c: Context): Promise<boolean> => {
  const limiter = (c.env as Bindings | undefined)?.NOTICE_RATE_LIMITER
  if (!limiter) return true
  const { success } = await limiter.limit({ key: getRateLimitKey(c) })
  return success
}
