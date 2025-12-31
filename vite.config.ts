import honox from 'honox/vite'
import build from '@hono/vite-build/cloudflare-workers'
import devServer from '@hono/vite-dev-server'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      build: {
        rollupOptions: {
          input: ['./app/client.ts'],
          output: {
            entryFileNames: 'static/client.js',
            chunkFileNames: 'static/assets/[name]-[hash].js',
            assetFileNames: 'static/assets/[name]-[hash].[ext]'
          }
        },
        emptyOutDir: false,
        manifest: true
      }
    }
  }

  return {
    plugins: [
      honox({
        client: {
          input: ['./app/client.ts']
        }
      }),
      build({
        entry: 'app/server.ts',
        output: '_worker.js'
      }),
      devServer({
        entry: 'app/server.ts'
      })
    ],
    css: {
      postcss: './postcss.config.js'
    }
  }
})
