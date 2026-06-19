import { showRoutes } from 'hono/dev'
import { createApp } from 'honox/server'

const app = createApp()

// 未知URLは app/routes/_404.tsx が 404 ステータスで専用ページを返す
// （app.notFound を上書きすると status!==404 になり _404.tsx が発火しないため上書きしない）

showRoutes(app)

export default app
