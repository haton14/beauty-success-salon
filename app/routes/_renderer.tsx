import { jsxRenderer } from 'hono/jsx-renderer'
import { Script } from 'honox/server'

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title || '美容室success | 茨城県鹿嶋市の美容室'}</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="/app/style.css" />
        <Script src="/app/client.ts" async />
        <style>{`
          @media (min-width: 1024px) {
            .desktop-nav { display: flex !important; }
          }
        `}</style>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
})
