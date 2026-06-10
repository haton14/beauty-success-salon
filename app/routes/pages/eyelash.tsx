import { createRoute } from 'honox/factory'
import { Layout } from '../../components/common/Layout'
import { PageHeader } from '../../components/common/PageHeader'
import { CTA } from '../../components/common/CTA'

const BASE = 'https://images.success-salon.haton14.com'

export default createRoute((c) => {
  return c.render(
    <Layout currentPage="eyelash" showFullFooter>

      <PageHeader
        title="まつ毛パーマ"
        bgGradient="from-pink-50 to-white"
      />

      {/* メイン写真 */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-lg">
            <img
              src={`${BASE}/eyelash-main.avif`}
              alt="まつ毛パーマ 施術例"
              class="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 説明・料金 */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto">
            <div class="bg-white rounded-2xl p-8 shadow-lg text-center">
              <p class="text-gray-700 leading-relaxed mb-8">
                施術全体のお時間は1時間ほどです。<br />
                お好みに応じて、ご対応いたしております。<br />
                長持ちすると好評のまつ毛パーマをぜひお試しくださいませ。
              </p>
              <p class="text-4xl font-bold text-blue-900">¥2,200</p>
            </div>
          </div>
        </div>
      </section>

      {/* ビフォーアフター写真 */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-heading-2 text-gray-800 mb-8 text-center">ビフォーアフター</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} class="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={`${BASE}/eyelash-${n}.avif`}
                    alt={`まつ毛パーマ ビフォーアフター${n}`}
                    class="w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA bgColor="bg-pink-50" />
    </Layout>,
    { title: 'まつ毛パーマ | 美容室success' }
  )
})
