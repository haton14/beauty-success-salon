import build from '@hono/vite-build/cloudflare-workers'
import devServer from '@hono/vite-dev-server'
import honox from 'honox/vite'
import { defineConfig } from 'vite'

/**
 * HonoXのビルドは2段階で実行される（package.jsonのbuildスクリプト参照）
 *
 * 1. `vite build` - SSR/サーバービルド
 *    - dist/_worker.js を生成（Cloudflare Workers用）
 *    - honox()プラグインの設定を使用
 *
 * 2. `vite build --mode client` - クライアントビルド
 *    - dist/static/* にブラウザ用JS/CSSを生成
 *    - mode === 'client' ブロックの設定を使用
 *
 * なぜ両方にclient inputが必要か:
 * - honox({ client: { input } }): 開発サーバーとSSRビルドが、
 *   どのクライアント資産が存在するかを把握するため。
 *   <Link>や<Script>コンポーネントがmanifest.jsonからパスを解決する際に必要
 * - mode === 'client'ブロック: 実際にクライアント資産をバンドルして出力するため
 *
 * この二重構造はHonoXの設計上の選択であり、Viteのmode機能を活用している
 */
export default defineConfig(({ mode }) => {
  // クライアントビルド用設定（vite build --mode client で使用）
  if (mode === 'client') {
    return {
      build: {
        rollupOptions: {
          // ブラウザにロードされるエントリーポイント
          input: ['./app/client.ts', './app/style.css'],
          output: {
            entryFileNames: 'static/client.js',
            chunkFileNames: 'static/assets/[name]-[hash].js',
            assetFileNames: 'static/assets/[name]-[hash].[ext]',
          },
          plugins: [
            {
              name: 'exclude-test-files',
              load(id) {
                if (/\.test\.[jt]sx?$/.test(id)) {
                  return 'export default {}'
                }
              },
            },
          ],
        },
        // SSRビルドの出力を消さない
        emptyOutDir: false,
        // <Link>/<Script>がパスを解決するために必要
        manifest: true,
      },
    }
  }

  // SSR/サーバービルド + 開発サーバー用設定（vite build / npm run dev で使用）
  return {
    plugins: [
      honox({
        client: {
          // HonoXに「これらのクライアント資産が存在する」ことを伝える
          // 開発時とSSRビルド時に<Link>/<Script>が正しいパスを生成するために必要
          input: ['./app/client.ts', './app/style.css'],
        },
      }),
      build({
        entry: 'app/server.ts',
        output: '_worker.js',
      }),
      devServer({
        entry: 'app/server.ts',
      }),
    ],
    css: {
      postcss: './postcss.config.js',
    },
  }
})
