import { SITE_URL } from '../constants'

const PRODUCTION_HOST = new URL(SITE_URL).host

const LOCAL_HOSTS = new Set(['localhost', '127.0.0.1', '[::1]'])

type AdminAccessParams = {
  url: string
  dev: boolean
  accessEmail: string | undefined
}

/**
 * 管理画面へのアクセスをアプリ側でも検証する（多層防御）。
 * - ローカル開発/プレビューは許可
 * - 本番カスタムドメイン以外のホストは拒否
 * - Cloudflare Access の認証メールヘッダーが無ければ拒否
 */
export const isAdminAccessAllowed = ({ url, dev, accessEmail }: AdminAccessParams): boolean => {
  const parsed = new URL(url)
  if (dev || LOCAL_HOSTS.has(parsed.hostname)) return true
  if (parsed.host !== PRODUCTION_HOST) return false
  return Boolean(accessEmail?.trim())
}
