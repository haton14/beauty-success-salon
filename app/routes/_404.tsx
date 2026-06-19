import type { NotFoundHandler } from 'hono'
import { Button } from '../components/common/Button'
import { Layout } from '../components/common/Layout'

// HonoX は c.res.status === 404 のときにこのハンドラを呼び、レスポンスを 404 で返す
const handler: NotFoundHandler = (c) => {
  return c.render(
    <Layout>
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 text-center max-w-xl">
          <p class="text-heading-1 font-bold text-blue-900 mb-4">404</p>
          <h1 class="text-heading-3 font-bold mb-4">ページが見つかりませんでした</h1>
          <p class="text-gray-600 mb-8">
            お探しのページは移動または削除された可能性があります。
            <br />
            お手数ですがトップページからお探しください。
          </p>
          <Button href="/" size="lg">
            トップページへ戻る
          </Button>
        </div>
      </section>
    </Layout>,
    { title: 'ページが見つかりません | 美容室success', noindex: true }
  )
}

export default handler
