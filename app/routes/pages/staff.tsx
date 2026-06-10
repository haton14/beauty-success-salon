import { createRoute } from 'honox/factory'
import { Layout } from '../../components/common/Layout'
import { PageHeader } from '../../components/common/PageHeader'
import { CTA } from '../../components/common/CTA'

const BASE = 'https://images.success-salon.haton14.com'

export default createRoute((c) => {
  return c.render(
    <Layout currentPage="staff" showFullFooter>

      <PageHeader
        title="スタッフ紹介"
        subtitle="28年の経験を持つ、信頼のスタッフです"
        bgGradient="from-blue-50 to-white"
      />

      {/* スタッフ紹介 */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            {/* オーナー */}
            <div class="mb-16">
              <div class="grid md:grid-cols-2 gap-8 items-center">
                <div class="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={`${BASE}/staff-1-male.avif`}
                    alt="オーナースタイリスト(男性スタッフ)"
                    class="w-full object-cover"
                  />
                </div>
                <div>
                  <h2 class="text-heading-3 text-gray-800 mb-4">オーナースタイリスト</h2>
                  <div class="space-y-4">
                    <div class="bg-blue-50 rounded-lg p-4">
                      <h3 class="font-bold text-blue-900 mb-2">得意な技術</h3>
                      <ul class="space-y-2 text-gray-700">
                        <li>• 写真通りのカット・パーマの再現</li>
                        <li>• お客様のイメージに合わせたスタイル提案</li>
                        <li>• 髪質改善トリートメント</li>
                      </ul>
                    </div>
                    <p class="text-gray-700 leading-relaxed">
                      普段のお手入れがしやすいように再現性のあるカットに仕上げます。
                      すきバサミ(セニングシザー)を使わず、ハサミだけでの毛量調整が得意です。
                    </p>
                    <div class="bg-gray-50 rounded-lg p-4">
                      <p class="text-gray-600">
                        <span class="font-semibold">経験年数：</span> 28年以上
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* スタッフ */}
            <div>
              <div class="grid md:grid-cols-2 gap-8 items-center">
                <div class="rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
                  <img
                    src={`${BASE}/staff-2-female.avif`}
                    alt="スタイリスト(女性スタッフ)"
                    class="w-full object-cover"
                  />
                </div>
                <div class="order-1 md:order-2">
                  <h2 class="text-heading-3 text-gray-800 mb-4">スタイリスト</h2>
                  <div class="space-y-4">
                    <div class="bg-pink-50 rounded-lg p-4">
                      <h3 class="font-bold text-pink-900 mb-2">得意な技術</h3>
                      <ul class="space-y-2 text-gray-700">
                        <li>• sins酸性ストレート</li>
                        <li>• リラックスヘッドスパ</li>
                        <li>• まつ毛パーマ</li>
                      </ul>
                    </div>
                    <p class="text-gray-700 leading-relaxed">
                      オールハンドで、頭皮を柔らかくしたり、体の詰まりを取り除くのが得意です。
                    </p>
                    <div class="bg-gray-50 rounded-lg p-4">
                      <p class="text-gray-600">
                        <span class="font-semibold">経験年数：</span> 豊富な施術経験
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* メッセージ */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-heading-2 text-gray-800 mb-8">私たちの想い</h2>
            <div class="bg-white rounded-2xl p-8 shadow-lg">
              <p class="text-gray-700 leading-relaxed mb-6">
                夫婦で営んで28年。長年の経験と技術を活かし、
                お客様一人ひとりに寄り添ったサービスを提供しています。
              </p>
              <p class="text-gray-700 leading-relaxed mb-6">
                髪のお悩みを解決し、自宅でもお手入れしやすいスタイルをご提案。
                技術の向上はもちろん、お客様とのコミュニケーションを大切にしています。
              </p>
              <p class="text-gray-700 leading-relaxed">
                リラックスできる空間で、特別な時間をお過ごしください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA subtitle="スタッフ指名も承っております" />
    </Layout>,
    { title: 'スタッフ紹介 | 美容室success' }
  )
})
