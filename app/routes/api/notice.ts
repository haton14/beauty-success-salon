import { createRoute } from 'honox/factory'
import { getActiveNotice } from '../../lib/notice'
import type { Bindings } from '../../types'

// 公開API: 今表示すべきお知らせを返す。
// マーケHTMLはエッジで長くキャッシュするが、緊急のお知らせは常に最新である必要があるため
// このエンドポイントは no-store にして、クライアントの NoticeBanner から都度取得する。
export default createRoute(async (c) => {
  const kv = (c.env as Bindings | undefined)?.NOTICE
  const notice = await getActiveNotice(kv, new Date())
  return c.json({ notice }, 200, { 'Cache-Control': 'no-store' })
})
