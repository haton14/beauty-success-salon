import { secureHeaders } from 'hono/secure-headers'
import { createRoute } from 'honox/factory'
import { IMAGE_BASE_URL } from '../constants'

// dev(Vite)はHMRでインライン<style>を注入するため style-src を緩める必要がある。
// 本番ビルドではCSSは外部ファイル('self')のみ、インラインstyle属性も無いので unsafe-inline 不要。
const isDev = import.meta.env.DEV

// secureHeaders はデフォルトで X-Content-Type-Options / X-Frame-Options 等を付与するが
// CSP は付かないため明示的に設定する。
export default createRoute(
  secureHeaders({
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
  // HTML(SSR)はエッジでキャッシュしWorker実行とTTFBを削減する。年表記など軽い動的要素が
  // あるため s-maxage は短め、ブラウザは都度再検証(max-age=0)、配信はSWRで途切れさせない。
  async (c, next) => {
    await next()
    if (c.res.headers.get('content-type')?.includes('text/html')) {
      c.res.headers.set('Cache-Control', 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400')
    }
  }
)
