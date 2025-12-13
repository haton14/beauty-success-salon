import { createRoute } from 'honox/factory'
import { Layout } from '../../components/common/Layout'
import { CTA } from '../../components/common/CTA'

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
                    <li>✓ 振袖着付け</li>
                    <li>✓ ヘアセット</li>
                    <li>✓ メイク</li>
                    <li>✓ 髪飾り取り付け</li>
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
                    <li>• 訪問着</li>
                    <li>• 留袖</li>
                    <li>• 振袖</li>
                    <li>• 袴</li>
                    <li>• 浴衣</li>
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
              <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                <div class="bg-gray-200 aspect-[3/4] flex items-center justify-center">
                  <p class="text-gray-500">成人式スタイル1</p>
                </div>
                <div class="p-4">
                  <h3 class="font-bold mb-2">クラシカルスタイル</h3>
                  <p class="text-sm text-gray-600">伝統的な日本髪アレンジ</p>
                </div>
              </div>

              <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                <div class="bg-gray-200 aspect-[3/4] flex items-center justify-center">
                  <p class="text-gray-500">成人式スタイル2</p>
                </div>
                <div class="p-4">
                  <h3 class="font-bold mb-2">モダンスタイル</h3>
                  <p class="text-sm text-gray-600">現代的なヘアアレンジ</p>
                </div>
              </div>

              <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                <div class="bg-gray-200 aspect-[3/4] flex items-center justify-center">
                  <p class="text-gray-500">成人式スタイル3</p>
                </div>
                <div class="p-4">
                  <h3 class="font-bold mb-2">キュートスタイル</h3>
                  <p class="text-sm text-gray-600">可愛らしいアレンジ</p>
                </div>
              </div>

              <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                <div class="bg-gray-200 aspect-[3/4] flex items-center justify-center">
                  <p class="text-gray-500">結婚式スタイル</p>
                </div>
                <div class="p-4">
                  <h3 class="font-bold mb-2">結婚式ゲスト</h3>
                  <p class="text-sm text-gray-600">訪問着の着付け</p>
                </div>
              </div>

              <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                <div class="bg-gray-200 aspect-[3/4] flex items-center justify-center">
                  <p class="text-gray-500">卒業式スタイル</p>
                </div>
                <div class="p-4">
                  <h3 class="font-bold mb-2">卒業式</h3>
                  <p class="text-sm text-gray-600">袴の着付け</p>
                </div>
              </div>

              <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                <div class="bg-gray-200 aspect-[3/4] flex items-center justify-center">
                  <p class="text-gray-500">七五三スタイル</p>
                </div>
                <div class="p-4">
                  <h3 class="font-bold mb-2">七五三</h3>
                  <p class="text-sm text-gray-600">お子様の着付け</p>
                </div>
              </div>
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
              <div class="flex items-start gap-6">
                <div class="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 class="text-xl font-bold mb-2">ご来店・お支度開始</h3>
                  <p class="text-gray-700">早朝からの対応も可能です。お時間に余裕を持ってお越しください。</p>
                </div>
              </div>

              <div class="flex items-start gap-6">
                <div class="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 class="text-xl font-bold mb-2">ヘアセット</h3>
                  <p class="text-gray-700">ご希望のスタイルに合わせて、丁寧にヘアセットを行います。（約60分）</p>
                </div>
              </div>

              <div class="flex items-start gap-6">
                <div class="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 class="text-xl font-bold mb-2">メイク</h3>
                  <p class="text-gray-700">着物に合わせた華やかなメイクで、美しさを引き立てます。（約45分）</p>
                </div>
              </div>

              <div class="flex items-start gap-6">
                <div class="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h3 class="text-xl font-bold mb-2">着付け</h3>
                  <p class="text-gray-700">熟練の技術で美しく、着崩れしにくい着付けを行います。（約45分）</p>
                </div>
              </div>

              <div class="flex items-start gap-6">
                <div class="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
                <div>
                  <h3 class="text-xl font-bold mb-2">最終チェック・お見送り</h3>
                  <p class="text-gray-700">全体のバランスを確認し、記念撮影のお手伝いもいたします。</p>
                </div>
              </div>
            </div>

            <div class="mt-8 bg-purple-50 rounded-xl p-6">
              <p class="text-purple-900 font-semibold">所要時間：約3時間（着物の種類により異なります）</p>
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
                  <li>• 早朝料金なし（5:00〜対応可能）</li>
                  <li>• 髪飾りのお持ち込み可能</li>
                  <li>• 前撮りの着付けも承ります</li>
                </ul>
              </div>

              <div class="bg-white rounded-2xl shadow-lg p-8">
                <h3 class="text-xl font-bold mb-4">その他の着付け料金</h3>
                <div class="space-y-3">
                  <div class="flex justify-between pb-2 border-b">
                    <span>訪問着・留袖</span>
                    <span class="font-bold">¥8,000〜</span>
                  </div>
                  <div class="flex justify-between pb-2 border-b">
                    <span>振袖（着付けのみ）</span>
                    <span class="font-bold">¥10,000〜</span>
                  </div>
                  <div class="flex justify-between pb-2 border-b">
                    <span>袴</span>
                    <span class="font-bold">¥8,000〜</span>
                  </div>
                  <div class="flex justify-between pb-2 border-b">
                    <span>浴衣</span>
                    <span class="font-bold">¥3,000〜</span>
                  </div>
                  <div class="flex justify-between">
                    <span>七五三（お子様）</span>
                    <span class="font-bold">¥5,000〜</span>
                  </div>
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
                <li>• 成人式のご予約は1年前から承っております</li>
                <li>• 人気の時間帯（早朝）は早めに埋まります</li>
                <li>• 事前のご相談・打ち合わせも無料で行っています</li>
                <li>• ヘアメイクのリハーサルも可能です（有料）</li>
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
