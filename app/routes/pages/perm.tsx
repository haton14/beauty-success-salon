import { createRoute } from 'honox/factory'
import { Layout } from '../../components/common/Layout'
import { ServiceCard } from '../../components/common/ServiceCard'
import { CheckListItem } from '../../components/common/CheckListItem'
import { ServiceInfoBox } from '../../components/common/ServiceInfoBox'
import { PriceRow } from '../../components/common/PriceRow'
import { TipCard } from '../../components/common/TipCard'

export default createRoute((c) => {
  return c.render(
    <Layout currentPage="perm" showFullFooter>

      {/* メインコンテンツ */}
      <section class="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-gray-800 mb-4">パーマ</h1>
            <p class="text-lg text-gray-600">理想のカールやウェーブを実現する多彩なパーマ</p>
            <div class="w-24 h-1 bg-blue-800 mx-auto mt-4"></div>
          </div>

          {/* メニューカード */}
          <div class="grid gap-8 max-w-6xl mx-auto">
            {/* パーマ */}
            <ServiceCard title="パーマ" subtitle="理想のカールやウェーブを実現" color="teal">
              <div class="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 class="font-bold text-lg mb-4 text-teal-900">こんな方におすすめ</h3>
                  <ul class="space-y-2 text-gray-700 mb-6">
                    <CheckListItem>ボリュームが欲しい方</CheckListItem>
                    <CheckListItem>スタイリングを楽にしたい方</CheckListItem>
                    <CheckListItem>動きのあるスタイルにしたい方</CheckListItem>
                  </ul>
                  <ServiceInfoBox
                    duration="約2〜2.5時間"
                    retention="2〜3ヶ月"
                    bgColor="bg-teal-50"
                    textColor="text-teal-800"
                  />
                </div>
                <div>
                  <h3 class="font-bold text-lg mb-4 text-teal-900">料金</h3>
                  <div class="space-y-3 mb-6">
                    <PriceRow label="パーマ" price="¥8,800〜" priceColor="text-teal-900" />
                  </div>
                  <p class="text-sm text-gray-500">※カット・シャンプー・ブロー込み</p>
                </div>
              </div>
            </ServiceCard>

            {/* 酸性デジタルパーマ */}
            <ServiceCard title="酸性デジタルパーマ" subtitle="髪に優しく、弾力のあるカールを実現" color="purple" recommended>
              <div class="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 class="font-bold text-lg mb-4 text-purple-900">こんな方におすすめ</h3>
                  <ul class="space-y-2 text-gray-700 mb-6">
                    <CheckListItem>髪のダメージを最小限に抑えたい方</CheckListItem>
                    <CheckListItem>大きく弾力のあるカールが欲しい方</CheckListItem>
                    <CheckListItem>乾かすだけでカールが再現できる髪にしたい方</CheckListItem>
                    <CheckListItem>長持ちするパーマをかけたい方</CheckListItem>
                  </ul>
                  <ServiceInfoBox
                    duration="約3〜3.5時間"
                    retention="4〜6ヶ月"
                    bgColor="bg-purple-50"
                    textColor="text-purple-800"
                  />
                </div>
                <div>
                  <h3 class="font-bold text-lg mb-4 text-purple-900">料金</h3>
                  <div class="space-y-3 mb-6">
                    <PriceRow label="酸性デジタルパーマ" price="¥17,600" priceColor="text-purple-900" />
                  </div>
                  <p class="text-sm text-gray-500">※カット・シャンプー・ブロー込み</p>
                </div>
              </div>
            </ServiceCard>

            {/* エアーパーマ */}
            <ServiceCard title="エアーパーマ" subtitle="ふんわり軽やかな質感のカール" color="blue">
              <div class="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 class="font-bold text-lg mb-4 text-blue-900">こんな方におすすめ</h3>
                  <ul class="space-y-2 text-gray-700 mb-6">
                    <CheckListItem>ナチュラルで柔らかいカールが欲しい方</CheckListItem>
                    <CheckListItem>根元からふんわりボリュームが欲しい方</CheckListItem>
                    <CheckListItem>軽い質感のスタイルが好みの方</CheckListItem>
                  </ul>
                  <ServiceInfoBox
                    duration="約2.5〜3時間"
                    retention="3〜5ヶ月"
                  />
                </div>
                <div>
                  <h3 class="font-bold text-lg mb-4 text-blue-900">料金</h3>
                  <div class="space-y-3 mb-6">
                    <PriceRow label="エアーパーマ" price="¥13,200" />
                  </div>
                  <p class="text-sm text-gray-500">※カット・シャンプー・ブロー込み</p>
                </div>
              </div>
            </ServiceCard>
          </div>

          {/* スタイリングアドバイス */}
          <div class="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">パーマを長持ちさせるコツ</h3>
            <div class="grid md:grid-cols-2 gap-6">
              <TipCard
                title="自宅でのケア"
                items={[
                  '洗髪後は優しくタオルドライ',
                  '保湿力の高いトリートメントを使用',
                  'ドライヤーは低温で乾かす'
                ]}
              />
              <TipCard
                title="スタイリング方法"
                items={[
                  'スタイリング剤は髪が濡れた状態で',
                  '指でくるくると巻きながら乾かす',
                  '仕上げにオイルで艶をプラス'
                ]}
                iconColor="text-purple-500"
                titleColor="text-purple-900"
              />
            </div>
          </div>

          {/* CTA */}
          <div class="mt-16 text-center">
            <div class="bg-white rounded-3xl p-8 max-w-2xl mx-auto shadow-lg">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">理想のパーマスタイルを見つけよう</h3>
              <p class="text-gray-600 mb-6">お客様の髪質やライフスタイルに合わせて、最適なパーマをご提案いたします。</p>
              <a
                href="/#contact"
                class="inline-block bg-gradient-to-b from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-blue-800"
              >
                ご予約・ご相談はこちら
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>,
    { title: 'パーマ | 美容室success' }
  )
})
