import { showRoutes } from 'hono/dev'
import { createApp } from 'honox/server'

const app = createApp()

app.notFound((c) => c.redirect('/', 301))

showRoutes(app)

export default app
