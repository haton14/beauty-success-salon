import { jsxRenderer } from 'hono/jsx-renderer'
import { Script } from 'honox/server'

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title || '美容室success | 茨城県鹿嶋市の美容室'}</title>
        <Script src="/app/client.ts" async />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
})
