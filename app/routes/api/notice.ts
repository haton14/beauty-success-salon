import { createRoute } from 'honox/factory'
import { getActiveNotice } from '../../lib/notice'
import { checkRateLimit } from '../../lib/rateLimit'
import type { Bindings } from '../../types'

// 公開API: 今表示すべきお知らせを返す。
// マーケHTMLはエッジで長くキャッシュするが、緊急のお知らせは常に最新である必要があるため
// このエンドポイントは no-store にして、クライアントの NoticeBanner から都度取得する。
export default createRoute(async (c) => {
  if (!(await checkRateLimit(c))) {
    return c.json({ error: 'Too Many Requests' }, 429, {
      'Cache-Control': 'no-store',
      'Retry-After': '60',
    })
  }
  const kv = (c.env as Bindings | undefined)?.NOTICE
  const notice = await getActiveNotice(kv, new Date())
  return c.json({ notice }, 200, { 'Cache-Control': 'no-store' })
})
