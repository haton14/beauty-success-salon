import { jsxRenderer, useRequestContext } from 'hono/jsx-renderer'
import { Link, Script } from 'honox/server'
import { IMAGE_BASE_URL, LINE_URL, SHOP_INFO, SITE_URL, SOCIAL_LINKS } from '../constants'

const DEFAULT_TITLE = '美容室success | 茨城県鹿嶋市の美容室'
const DEFAULT_DESCRIPTION =
  '茨城県鹿嶋市の美容室success。sins酸性ストレート、ドライヘッドスパ、まつ毛パーマ、ヘアセット・着付けなど。飾らない雰囲気で長く通える、夫婦で営む美容室です。'
const OGP_IMAGE_URL = `${SITE_URL}/ogp.jpg`

// ローカル検索向けの構造化データ（LocalBusiness > HairSalon）
const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: SHOP_INFO.name,
  url: SITE_URL,
  image: `${IMAGE_BASE_URL}/exterior.avif`,
  telephone: '+81-299-69-7700',
  address: {
    '@type': 'PostalAddress',
    postalCode: '311-2222',
    addressRegion: '茨城県',
    addressLocality: '鹿嶋市',
    streetAddress: '小山1072-88',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      // 定休日: 火曜日・第一月曜日（第一月曜日は表現できないため通常営業日として記載）
      dayOfWeek: ['Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  sameAs: SOCIAL_LINKS.map((link) => link.url).concat(LINE_URL),
}

export default jsxRenderer(({ children, title, description, noindex }) => {
  const c = useRequestContext()
  const pageTitle = title || DEFAULT_TITLE
  const pageDescription = description || DEFAULT_DESCRIPTION
  const canonicalUrl = `${SITE_URL}${c.req.path === '/' ? '/' : c.req.path}`

  return (
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Google Search Console 所有権確認 */}
        <meta name="google-site-verification" content="TtRbVO7jsn2DdRzSxQnM533kT8MvdO3uJPKjKwDo_EE" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        {/* 404等はインデックス対象外。存在しないURLへのcanonicalも出さない */}
        {noindex ? <meta name="robots" content="noindex" /> : <link rel="canonical" href={canonicalUrl} />}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SHOP_INFO.name} />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={OGP_IMAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href={IMAGE_BASE_URL} crossorigin="" />
        {/* JSON.stringify は </script> をエスケープしないため < を明示的に無害化する */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD).replace(/</g, '\\u003c') }}
        />
        <Link href="/app/style.css" rel="stylesheet" />
        <Script src="/app/client.ts" async />
      </head>
      <body>{children}</body>
    </html>
  )
})
