import { createRoute } from 'honox/factory'
import { Layout } from '../../components/common/Layout'
import { CTA } from '../../components/common/CTA'
import { CheckListItem } from '../../components/common/CheckListItem'
import { GalleryCard } from '../../components/common/GalleryCard'
import { StepItem } from '../../components/common/StepItem'
import { ServiceInfoBox } from '../../components/common/ServiceInfoBox'
import { PriceRow } from '../../components/common/PriceRow'

export default createRoute((c) => {
  return c.render(
    <Layout currentPage="kimono" showFullFooter>

      {/* メインビジュアル */}
      <section class="pt-20 pb-12 bg-gradient-to-b from-purple-50 to-white">
        <div class="container mx-auto px-4">
          <div class="text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-blue-900 mb-6">着付け・成人式</h1>
            <p class="text-xl text-gray-700 mb-8">人生の特別な日を、最高の装いで</p>
          </div>
        </div>
      </section>

      {/* サービス内容 */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-gray-800 mb-12 text-center">着付けサービス</h2>

            <div class="grid md:grid-cols-2 gap-8">
              <div class="bg-purple-50 rounded-2xl p-8">
                <h3 class="text-2xl font-bold text-purple-900 mb-4">成人式</h3>
                <p class="text-gray-700 mb-6">
                  一生に一度の晴れの日を、最高の着姿でお迎えください。
                  お客様の個性を活かした着付けとヘアメイクをご提供します。
                </p>
                <div class="bg-white rounded-lg p-4">
                  <p class="font-bold text-lg mb-2">セット内容</p>
                  <ul class="space-y-2 text-gray-700">
                    <CheckListItem>振袖着付け</CheckListItem>
                    <CheckListItem>ヘアセット</CheckListItem>
                    <CheckListItem>メイク</CheckListItem>
                    <CheckListItem>髪飾り取り付け</CheckListItem>
                  </ul>
                </div>
              </div>

              <div class="bg-pink-50 rounded-2xl p-8">
                <h3 class="text-2xl font-bold text-pink-900 mb-4">その他の着付け</h3>
                <p class="text-gray-700 mb-6">
                  結婚式のお呼ばれ、七五三、卒業式など、様々なシーンでの着付けを承っております。
                </p>
                <div class="bg-white rounded-lg p-4">
                  <p class="font-bold text-lg mb-2">対応可能な着物</p>
                  <ul class="space-y-2 text-gray-700">
                    <CheckListItem icon="•" iconColor="text-gray-700">訪問着</CheckListItem>
                    <CheckListItem icon="•" iconColor="text-gray-700">留袖</CheckListItem>
                    <CheckListItem icon="•" iconColor="text-gray-700">振袖</CheckListItem>
                    <CheckListItem icon="•" iconColor="text-gray-700">袴</CheckListItem>
                    <CheckListItem icon="•" iconColor="text-gray-700">浴衣</CheckListItem>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* スタイルギャラリー */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-5xl mx-auto">
            <h2 class="text-3xl font-bold text-gray-800 mb-12 text-center">スタイルギャラリー</h2>

            <div class="grid md:grid-cols-3 gap-6">
              <GalleryCard
                title="クラシカルスタイル"
                description="伝統的な日本髪アレンジ"
                placeholder="成人式スタイル1"
                aspectRatio="3/4"
              />
              <GalleryCard
                title="モダンスタイル"
                description="現代的なヘアアレンジ"
                placeholder="成人式スタイル2"
                aspectRatio="3/4"
              />
              <GalleryCard
                title="キュートスタイル"
                description="可愛らしいアレンジ"
                placeholder="成人式スタイル3"
                aspectRatio="3/4"
              />
              <GalleryCard
                title="結婚式ゲスト"
                description="訪問着の着付け"
                placeholder="結婚式スタイル"
                aspectRatio="3/4"
              />
              <GalleryCard
                title="卒業式"
                description="袴の着付け"
                placeholder="卒業式スタイル"
                aspectRatio="3/4"
              />
              <GalleryCard
                title="七五三"
                description="お子様の着付け"
                placeholder="七五三スタイル"
                aspectRatio="3/4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 当日の流れ */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-gray-800 mb-12 text-center">成人式当日の流れ</h2>

            <div class="space-y-8">
              <StepItem step={1} title="ご来店・お支度開始" description="早朝からの対応も可能です。お時間に余裕を持ってお越しください。" bgColor="bg-purple-600" />
              <StepItem step={2} title="ヘアセット" description="ご希望のスタイルに合わせて、丁寧にヘアセットを行います。（約60分）" bgColor="bg-purple-600" />
              <StepItem step={3} title="メイク" description="着物に合わせた華やかなメイクで、美しさを引き立てます。（約45分）" bgColor="bg-purple-600" />
              <StepItem step={4} title="着付け" description="熟練の技術で美しく、着崩れしにくい着付けを行います。（約45分）" bgColor="bg-purple-600" />
              <StepItem step={5} title="最終チェック・お見送り" description="全体のバランスを確認し、記念撮影のお手伝いもいたします。" bgColor="bg-purple-600" />
            </div>

            <div class="mt-8">
              <ServiceInfoBox duration="約3時間（着物の種類により異なります）" bgColor="bg-purple-50" textColor="text-purple-900" />
            </div>
          </div>
        </div>
      </section>

      {/* 料金 */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold text-gray-800 mb-12 text-center">料金</h2>

            <div class="space-y-6">
              <div class="bg-white rounded-2xl shadow-lg p-8">
                <div class="flex justify-between items-center mb-4">
                  <h3 class="text-2xl font-bold text-purple-900">成人式セット</h3>
                  <p class="text-3xl font-bold text-blue-900">¥22,000</p>
                </div>
                <p class="text-gray-600 mb-4">着付け・ヘアセット・メイク込み</p>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <CheckListItem icon="•" iconColor="text-gray-700">早朝料金なし（5:00〜対応可能）</CheckListItem>
                  <CheckListItem icon="•" iconColor="text-gray-700">髪飾りのお持ち込み可能</CheckListItem>
                  <CheckListItem icon="•" iconColor="text-gray-700">前撮りの着付けも承ります</CheckListItem>
                </ul>
              </div>

              <div class="bg-white rounded-2xl shadow-lg p-8">
                <h3 class="text-xl font-bold mb-4">その他の着付け料金</h3>
                <div class="space-y-3">
                  <PriceRow label="訪問着・留袖" price="¥8,000〜" variant="border" />
                  <PriceRow label="振袖（着付けのみ）" price="¥10,000〜" variant="border" />
                  <PriceRow label="袴" price="¥8,000〜" variant="border" />
                  <PriceRow label="浴衣" price="¥3,000〜" variant="border" />
                  <PriceRow label="七五三（お子様）" price="¥5,000〜" variant="border" />
                </div>
                <p class="text-sm text-gray-500 mt-4">※ヘアセット・メイクは別途料金</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 予約について */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">ご予約について</h2>

            <div class="bg-purple-50 rounded-2xl p-8">
              <h3 class="text-xl font-bold mb-4 text-purple-900">早めのご予約をおすすめします</h3>
              <ul class="space-y-3 text-gray-700">
                <CheckListItem icon="•" iconColor="text-gray-700">成人式のご予約は1年前から承っております</CheckListItem>
                <CheckListItem icon="•" iconColor="text-gray-700">人気の時間帯（早朝）は早めに埋まります</CheckListItem>
                <CheckListItem icon="•" iconColor="text-gray-700">事前のご相談・打ち合わせも無料で行っています</CheckListItem>
                <CheckListItem icon="•" iconColor="text-gray-700">ヘアメイクのリハーサルも可能です（有料）</CheckListItem>
              </ul>

              <div class="mt-6 p-4 bg-white rounded-lg">
                <p class="font-bold mb-2">キャンセルポリシー</p>
                <p class="text-sm text-gray-600">
                  前日まで：無料<br />
                  当日：料金の50%
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA subtitle="まずはお気軽にご相談ください" bgColor="bg-purple-50" />
    </Layout>,
    { title: '着付け・成人式 | 美容室success' }
  )
})
