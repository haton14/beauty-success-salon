import { createRoute } from 'honox/factory'
import { Layout } from '../../components/common/Layout'
import { CTA } from '../../components/common/CTA'
import { FeatureCard } from '../../components/common/FeatureCard'
import { StepItem } from '../../components/common/StepItem'

export default createRoute((c) => {
  return c.render(
    <Layout currentPage="eyelash" showFullFooter>

      {/* メインビジュアル */}
      <section class="pt-20 pb-12 bg-gradient-to-b from-pink-50 to-white">
        <div class="container mx-auto px-4">
          <div class="text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-blue-900 mb-6">まつ毛パーマ</h1>
            <p class="text-xl text-gray-700 mb-8">自然で美しいカールをあなたに</p>
          </div>
        </div>
      </section>

      {/* 特徴 */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-gray-800 mb-12 text-center">まつ毛パーマの魅力</h2>

            <div class="grid md:grid-cols-3 gap-8">
              <FeatureCard
                title="目力アップ"
                description="自然なカールで目元がパッチリ。マスカラなしでも印象的な目元に。"
                icon={
                  <svg class="w-10 h-10 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                }
              />
              <FeatureCard
                title="時短メイク"
                description="朝のメイク時間を大幅短縮。ビューラー不要で忙しい朝も楽々。"
                icon={
                  <svg class="w-10 h-10 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                }
              />
              <FeatureCard
                title="持続性"
                description="約1〜2ヶ月持続。まつ毛に優しい薬剤で自然な仕上がりをキープ。"
                icon={
                  <svg class="w-10 h-10 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* デザイン例 */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-gray-800 mb-12 text-center">仕上がりイメージ</h2>

            <div class="grid md:grid-cols-2 gap-8">
              <div class="bg-white rounded-2xl shadow-lg p-6">
                <div class="bg-gray-100 rounded-xl aspect-video mb-4 flex items-center justify-center">
                  <p class="text-gray-500">ナチュラルカール</p>
                </div>
                <h3 class="text-xl font-bold mb-2">ナチュラルカール</h3>
                <p class="text-gray-600">自然な上向きカール。普段使いに最適で、すっぴんでも映える仕上がり。</p>
              </div>

              <div class="bg-white rounded-2xl shadow-lg p-6">
                <div class="bg-gray-100 rounded-xl aspect-video mb-4 flex items-center justify-center">
                  <p class="text-gray-500">しっかりカール</p>
                </div>
                <h3 class="text-xl font-bold mb-2">しっかりカール</h3>
                <p class="text-gray-600">根元からしっかり立ち上げるカール。華やかな印象で特別な日にも。</p>
              </div>

              <div class="bg-white rounded-2xl shadow-lg p-6">
                <div class="bg-gray-100 rounded-xl aspect-video mb-4 flex items-center justify-center">
                  <p class="text-gray-500">セクシーカール</p>
                </div>
                <h3 class="text-xl font-bold mb-2">セクシーカール</h3>
                <p class="text-gray-600">毛先を中心にカールをつけた大人っぽい仕上がり。</p>
              </div>

              <div class="bg-white rounded-2xl shadow-lg p-6">
                <div class="bg-gray-100 rounded-xl aspect-video mb-4 flex items-center justify-center">
                  <p class="text-gray-500">キュートカール</p>
                </div>
                <h3 class="text-xl font-bold mb-2">キュートカール</h3>
                <p class="text-gray-600">丸みのある可愛らしいカール。若々しい印象に。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 施術の流れ */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-gray-800 mb-12 text-center">施術の流れ</h2>

            <div class="space-y-6">
              <StepItem step={1} title="カウンセリング" description="理想のカールをお伺いし、まつ毛の状態を確認します。" />
              <StepItem step={2} title="クレンジング" description="まつ毛を清潔にし、パーマがかかりやすい状態に。" />
              <StepItem step={3} title="ロッド選び・巻き上げ" description="目の形に合わせてロッドを選び、丁寧に巻き上げます。" />
              <StepItem step={4} title="薬剤塗布" description="まつ毛に優しいパーマ液を塗布し、理想のカールを作ります。" />
              <StepItem step={5} title="仕上げ" description="トリートメントで栄養を与え、美しい仕上がりに。" />
            </div>

            <div class="mt-8 bg-pink-50 rounded-xl p-6">
              <p class="text-pink-900 font-semibold">施術時間：約60〜90分</p>
            </div>
          </div>
        </div>
      </section>

      {/* 注意事項 */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">施術前後の注意点</h2>

            <div class="bg-white rounded-2xl shadow-lg p-8">
              <h3 class="text-xl font-bold mb-4">施術前</h3>
              <ul class="space-y-2 text-gray-700 mb-6">
                <li>• マスカラは落としてご来店ください</li>
                <li>• まつ毛エクステは事前に外してください</li>
                <li>• コンタクトレンズは外していただく場合があります</li>
              </ul>

              <h3 class="text-xl font-bold mb-4">施術後</h3>
              <ul class="space-y-2 text-gray-700">
                <li>• 施術後24時間は水に濡らさないでください</li>
                <li>• 目をこすらないよう注意してください</li>
                <li>• マスカラは翌日から使用可能です</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 料金 */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-md mx-auto">
            <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">料金</h2>

            <div class="bg-pink-50 rounded-2xl p-8 shadow-lg text-center">
              <p class="text-4xl font-bold text-blue-900 mb-4">¥2,200</p>
              <p class="text-gray-600">カウンセリング込み</p>
              <p class="text-sm text-gray-500 mt-4">※下まつ毛パーマも承っております（要相談）</p>
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
