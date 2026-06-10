import { createRoute } from 'honox/factory'
import { Layout } from '../../components/common/Layout'
import { PageHeader } from '../../components/common/PageHeader'
import { CTA } from '../../components/common/CTA'
import { CheckListItem } from '../../components/common/CheckListItem'
import { PriceRow } from '../../components/common/PriceRow'

const BASE = 'https://images.success-salon.haton14.com'

export default createRoute((c) => {
  return c.render(
    <Layout currentPage="sins" showFullFooter>

      <PageHeader
        title="sins 酸性ストレート"
        subtitle="当店の酸性ストレートは髪に優しい弱酸性の薬剤を使用しダメージを極限まで抑えます。sins薬剤技術で髪質を内部から改善させ柔らかく自然な髪質へと導きます。"
        bgGradient="from-blue-50 to-white"
      >
        <div class="max-w-2xl mx-auto rounded-card overflow-hidden shadow-lg">
          <img
            src={`${BASE}/sins-top.avif`}
            alt="sins酸性ストレート 施術例"
            class="w-full object-cover"
          />
        </div>
      </PageHeader>

      {/* こんな方におすすめ */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-heading-2 text-gray-800 mb-8 text-center">このようなお悩みの方へ</h2>

            <div class="bg-blue-50 rounded-xl p-8 mb-6">
              <ul class="space-y-4 text-lg">
                <CheckListItem icon="♢" iconColor="text-blue-800">癖やダメージが気になる</CheckListItem>
                <CheckListItem icon="♢" iconColor="text-blue-800">パサつき、毛羽たち、枝毛等が気になる</CheckListItem>
                <CheckListItem icon="♢" iconColor="text-blue-800">ごわつき、広がりがある</CheckListItem>
                <CheckListItem icon="♢" iconColor="text-blue-800">朝、アイロンを入れても、癖が出て気になる</CheckListItem>
                <CheckListItem icon="♢" iconColor="text-blue-800">前髪だけ癖毛</CheckListItem>
                <CheckListItem icon="♢" iconColor="text-blue-800">ストレートをしたいけど傷まないか不安</CheckListItem>
                <CheckListItem icon="♢" iconColor="text-blue-800">不自然な真っ直ぐになりたくない</CheckListItem>
              </ul>
            </div>

            <p class="text-sm text-red-600">
              ※ブリーチ毛で極端に傷めた方は、お断りしております
            </p>
          </div>
        </div>
      </section>

      {/* 当店の特徴 */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-heading-2 text-gray-800 mb-8 text-center">当店のsins酸性ストレートの特徴</h2>

            <div class="space-y-6">
              <div class="bg-white rounded-xl p-6 shadow-md">
                <p class="text-gray-700 leading-relaxed">
                  お客様一人ひとりの<br />
                  髪質に合わせた薬剤、オーダーメイド技術で<br />
                  艶髪に改善させていただきます。
                </p>
              </div>

              <div class="bg-white rounded-xl p-6 shadow-md">
                <p class="text-gray-700 leading-relaxed">
                  ミツバチの巣から摂取される<br />
                  ミツロウを配合したsins薬剤は<br />
                  更にキューティクルに艶を与えます。
                </p>
              </div>

              <div class="bg-white rounded-xl p-6 shadow-md">
                <p class="text-gray-700 leading-relaxed">
                  酸性ストレートは難易度が高いため<br />
                  知識、技術、経験が必要な施術です。<br />
                  薬剤技術も、数ヶ月毎に向上してきているため<br />
                  毎回、変化があり、最高の薬剤、技術で<br />
                  ご満足頂けるように行なっております。
                </p>
              </div>

              <div class="bg-white rounded-xl p-6 shadow-md">
                <p class="text-gray-700 leading-relaxed">
                  sins酸性ストレートを<br />
                  茨城県で一番最初に導入。<br />
                  多くのお客様にご提供した実績がありますので<br />
                  安心してお任せくださいませ。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 注意事項 */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <div class="bg-yellow-50 rounded-xl p-8 border-2 border-yellow-200">
              <h3 class="text-xl font-bold mb-6 text-yellow-900">ご注意</h3>
              <ul class="space-y-6">
                <li>
                  <p class="text-gray-700 leading-relaxed">
                    <span class="font-bold">♢ ヘアカラーを行なってからは</span><br />
                    <span class="font-bold text-red-600">1ヶ月以上経過してから</span>の施術となります。<br />
                    1ヶ月以内ですと、ヘアカラーの薬剤に含まれているアルカリ材が髪に残っているため、アルカリストレートになるからです。<br />
                    <span class="text-sm text-gray-500">（ヘナ、マニキュアは除く）</span>
                  </p>
                </li>
                <li>
                  <p class="text-gray-700 leading-relaxed">
                    <span class="font-bold">♢ ブリーチ毛で極端に傷めた方は</span><br />
                    お断りしております。
                  </p>
                </li>
                <li>
                  <p class="text-gray-700 leading-relaxed">
                    <span class="font-bold">♢ 他店で、パーマ・ストレートを行った方は</span><br />
                    3ヶ月経過してからの施術となります。
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ショートの施術例 */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-heading-3 text-gray-800 mb-6 text-center">ショート</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="rounded-xl overflow-hidden shadow-md">
                <img
                  src={`${BASE}/sins-short.avif`}
                  alt="sins酸性ストレート ショート 施術例"
                  class="w-full object-cover"
                />
              </div>
              <div class="rounded-xl overflow-hidden shadow-md">
                <img
                  src={`${BASE}/sins-short-before-after.avif`}
                  alt="sins酸性ストレート ショート ビフォーアフター"
                  class="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ミディアムの施術例 */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-heading-3 text-gray-800 mb-6 text-center">ミディアム</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5].map((n) => (
                <div key={n} class="rounded-xl overflow-hidden shadow-md">
                  <img
                    src={`${BASE}/sins-medium-${n}.avif`}
                    alt={`sins酸性ストレート ミディアム 施術例${n}`}
                    class="w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ロングの施術例 */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-heading-3 text-gray-800 mb-6 text-center">ロング</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} class="rounded-xl overflow-hidden shadow-md">
                  <img
                    src={`${BASE}/sins-long-${n}.avif`}
                    alt={`sins酸性ストレート ロング 施術例${n}`}
                    class="w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 料金 */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-2xl mx-auto">
            <h2 class="text-heading-2 text-gray-800 mb-8 text-center">料金</h2>

            <div class="bg-white rounded-2xl p-8 shadow-lg">
              <div class="space-y-4">
                <PriceRow label="ショート" price="¥19,800〜" variant="border" />
                <PriceRow label="ミディアム" price="¥22,000〜" variant="border" />
                <PriceRow label="ロング" price="¥24,200〜" variant="border" />
              </div>
              <p class="text-sm text-gray-500 mt-6">※シャンプー・ブロー・カット込み</p>
              <div class="mt-4 space-y-1">
                <p class="text-sm text-red-600">※毛量が多い方、癖が強い方は、長さに問わず、プラス1,000円〜になります。</p>
                <p class="text-sm text-red-600">※ロングの方もプラス1,000円〜になります。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </Layout>,
    { title: 'sins酸性ストレート | 美容室success' }
  )
})
