import { secureHeaders } from 'hono/secure-headers'
import { createRoute } from 'honox/factory'
import { IMAGE_BASE_URL } from '../constants'

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
      // Tailwind の外部CSSは'self'。iframeのstyle属性と Island が動的に付与する
      // style属性（フェードイン）のため style-src は unsafe-inline を許可する。
      styleSrc: ["'self'", "'unsafe-inline'"],
      // Googleマップ埋め込み
      frameSrc: ['https://www.google.com'],
      connectSrc: ["'self'"],
      formAction: ["'self'"],
    },
  })
)
