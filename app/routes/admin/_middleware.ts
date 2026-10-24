import { createRoute } from 'honox/factory'
import { isAdminAccessAllowed } from '../../lib/adminAccess'

// 管理画面の多層防御。Cloudflare Access が障害・未設定でも、
// 想定外ホストや未認証ヘッダーのアクセスはアプリ側で拒否する。
export default createRoute(async (c, next) => {
  const allowed = isAdminAccessAllowed({
    url: c.req.url,
    dev: import.meta.env.DEV,
    accessEmail: c.req.header('Cf-Access-Authenticated-User-Email'),
  })
  if (!allowed) {
    return c.text('Forbidden', 403)
  }
  await next()
})
