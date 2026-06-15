import { createRoute } from 'honox/factory'
import { CTA } from '../../components/common/CTA'
import { Layout } from '../../components/common/Layout'
import { PageHeader } from '../../components/common/PageHeader'
import { SalonImage } from '../../components/common/SalonImage'

export default createRoute((c) => {
  return c.render(
    <Layout currentPage="eyelash" showFullFooter>
      <PageHeader title="まつ毛パーマ" bgGradient="from-pink-50 to-white" />

      {/* メイン写真 */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-lg">
            <SalonImage file="eyelash-main.avif" alt="まつ毛パーマ 施術例" width={1303} height={1256} eager />
          </div>
        </div>
      </section>

      {/* 説明・料金 */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto">
            <div class="bg-white rounded-2xl p-8 shadow-lg text-center">
              <p class="text-gray-700 leading-relaxed mb-8">
                施術全体のお時間は1時間ほどです。
                <br />
                お好みに応じて、ご対応いたしております。
                <br />
                長持ちすると好評のまつ毛パーマをぜひお試しくださいませ。
              </p>
              <p class="text-4xl font-bold text-blue-900">¥2,200</p>
            </div>
          </div>
        </div>
      </section>

      {/* 施術例写真 */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-heading-2 text-gray-800 mb-8 text-center">施術例</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} class="rounded-2xl overflow-hidden shadow-lg">
                  <SalonImage file={`eyelash-${n}.avif`} alt={`まつ毛パーマ 施術例${n}`} width={1108} height={1477} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA bgColor="bg-pink-50" />
    </Layout>,
    {
      title: 'まつ毛パーマ | 美容室success',
      description:
        '長持ちすると好評のまつ毛パーマ。施術時間は約1時間、お好みに応じてご対応いたします。茨城県鹿嶋市の美容室success。',
    }
  )
})
