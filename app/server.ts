import { showRoutes } from 'hono/dev'
import { createApp } from 'honox/server'

const app = createApp()

// 存在しないURLはトップページへ誘導する（301だとブラウザに永続キャッシュされるため302）
app.notFound((c) => c.redirect('/', 302))

showRoutes(app)

export default app
