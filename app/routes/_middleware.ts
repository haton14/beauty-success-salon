import { secureHeaders } from 'hono/secure-headers'
import { createRoute } from 'honox/factory'
import { IMAGE_BASE_URL } from '../constants'
import { getActiveNotice } from '../lib/notice'
import type { Bindings } from '../types'

// dev(Vite)はHMRでインライン<style>を注入するため style-src を緩める必要がある。
// 本番ビルドではCSSは外部ファイル('self')のみ、インラインstyle属性も無いので unsafe-inline 不要。
const isDev = import.meta.env.DEV

// secureHeaders はデフォルトで X-Content-Type-Options / X-Frame-Options 等を付与するが
// CSP は付かないため明示的に設定する。
export default createRoute(
  // お知らせをSSRで描画するため、リクエストごとにKVから取得してContextへ載せる。
  // 管理画面とAPIは対象外。KV障害時はお知らせ無しとしてサイト本体を表示する。
  async (c, next) => {
    if (c.req.method === 'GET' && !c.req.path.startsWith('/admin') && !c.req.path.startsWith('/api')) {
      const kv = (c.env as Bindings | undefined)?.NOTICE
      try {
        c.set('activeNotice', await getActiveNotice(kv, new Date()))
      } catch (error) {
        console.error('failed to load notice', error)
        c.set('activeNotice', null)
      }
    }
    await next()
  },
  secureHeaders({
    // no-referrer だと同一オリジンのフォームPOSTでも Origin: null になり、
    // /admin のCSRF検証（Origin照合）が誤って403にする。同一オリジンのみRefererを送る。
    referrerPolicy: 'same-origin',
    contentSecurityPolicy: {
      defaultSrc: ["'self'"],
      baseUri: ["'self'"],
      objectSrc: ["'none'"],
      frameAncestors: ["'self'"],
      // 画像は自オリジン（favicon/ogp）+ 外部画像ホスト + data:（インラインSVG等）
      imgSrc: ["'self'", 'data:', IMAGE_BASE_URL],
      // 外部スクリプトは client バンドル（'self'）のみ。JSON-LD は application/ld+json の
      // データブロックで実行対象外のため unsafe-inline は不要。
      scriptSrc: ["'self'"],
      // 本番はTailwindの外部CSS('self')のみ。インラインstyle属性は使わず、Islandの
      // フェードインはCSSOMプロパティ代入（CSP対象外）なので unsafe-inline 不要。
      // dev のみ Vite のインライン<style>注入のため許可する。
      styleSrc: isDev ? ["'self'", "'unsafe-inline'"] : ["'self'"],
      // Googleマップ埋め込み
      frameSrc: ['https://www.google.com'],
      connectSrc: ["'self'"],
      formAction: ["'self'"],
    },
  }),
  // お知らせをSSRで埋め込むため、HTMLはブラウザに都度再検証させる。
  // Workers Cacheは無効にしている（静的アセットを無料・無制限のまま維持するため）。
  async (c, next) => {
    await next()
    // 管理画面（Access保護）はキャッシュさせない。
    if (c.req.path.startsWith('/admin')) {
      c.res.headers.set('Cache-Control', 'no-store')
      return
    }
    if (c.res.headers.get('content-type')?.includes('text/html')) {
      c.res.headers.set('Cache-Control', 'no-cache')
    }
  }
)
