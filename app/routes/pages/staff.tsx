import { createRoute } from 'honox/factory'
import { Layout } from '../../components/common/Layout'
import { CTA } from '../../components/common/CTA'

export default createRoute((c) => {
  return c.render(
    <Layout currentPage="staff" showFullFooter>

      {/* メインビジュアル */}
      <section class="pt-20 pb-12 bg-linear-to-b from-blue-50 to-white">
        <div class="container mx-auto px-4">
          <div class="text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-blue-900 mb-6">スタッフ紹介</h1>
            <p class="text-xl text-gray-700 mb-8">28年の経験を持つ、信頼のスタッフです</p>
          </div>
        </div>
      </section>

      {/* スタッフ紹介 */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            {/* オーナー */}
            <div class="mb-16">
              <div class="grid md:grid-cols-2 gap-8 items-center">
                <div class="bg-gray-100 rounded-2xl aspect-square flex items-center justify-center">
                  <div class="text-center">
                    <svg class="w-32 h-32 mx-auto text-gray-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    <p class="text-gray-500">オーナー</p>
                  </div>
                </div>
                <div>
                  <h2 class="text-2xl font-bold text-gray-800 mb-4">オーナースタイリスト</h2>
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
                      常に新しい技術を学び、施術には丁寧さを大切にしています。
                      お客様に満足いただけるよう、一人ひとりに合わせた最適なスタイルをご提案いたします。
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
                <div class="bg-gray-100 rounded-2xl aspect-square flex items-center justify-center order-2 md:order-1">
                  <div class="text-center">
                    <svg class="w-32 h-32 mx-auto text-gray-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    <p class="text-gray-500">スタッフ</p>
                  </div>
                </div>
                <div class="order-1 md:order-2">
                  <h2 class="text-2xl font-bold text-gray-800 mb-4">スタイリスト</h2>
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
                      お客様の髪が、酸性ストレートで艶々サラサラになると嬉しいです。
                      ヘッドスパでは、お客様に究極のリラックスタイムをご提供。
                      「眠らせるのが得意」と好評をいただいています。
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
            <h2 class="text-3xl font-bold text-gray-800 mb-8">私たちの想い</h2>
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
