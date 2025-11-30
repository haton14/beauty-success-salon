import { createRoute } from 'honox/factory'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { CTA } from '../../components/CTA'
import MobileMenu from '../../islands/MobileMenu'

export default createRoute((c) => {
  return c.render(
    <>
      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
        }
      `}</style>
      <MobileMenu />
      <Header currentPage="sins" />

      {/* メインビジュアル */}
      <section class="pt-20 pb-12 bg-gradient-to-b from-blue-50 to-white">
        <div class="container mx-auto px-4">
          <div class="text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-blue-900 mb-6">sins 酸性ストレート</h1>
            <p class="text-xl text-gray-700 mb-8">当店はsins酸性ストレートを提供しております</p>
          </div>
        </div>
      </section>

      {/* こんな方におすすめ */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-gray-800 mb-12 text-center">こんな方におすすめです</h2>

            <div class="bg-blue-50 rounded-xl p-8 mb-12">
              <ul class="space-y-4 text-lg">
                <li class="flex items-start">
                  <span class="text-blue-800 mr-3 mt-1">◆</span>
                  <span>何度も縮毛矯正を施術して傷めた方</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-800 mr-3 mt-1">◆</span>
                  <span>針金のように真っ直ぐになりたくない方</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-800 mr-3 mt-1">◆</span>
                  <span>自然な仕上がりを求める方</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-800 mr-3 mt-1">◆</span>
                  <span>ハリがあり、艶々な髪質になりたい方</span>
                </li>
              </ul>
            </div>

            <div class="text-gray-700 space-y-4 mb-8">
              <p>
                何をしてもパサついて艶がなくまとまりにくい髪や、
                縮毛矯正で傷んだ髪も修復、
                どんなくせ毛でもサラサラに、
                仕上げます。
              </p>
              <p class="text-sm text-red-600">
                ※ブリーチ毛で極端に傷めた方は、お断りしております
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 当店の特徴 */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-gray-800 mb-12 text-center">当店のsins酸性ストレートの特徴</h2>

            <div class="space-y-8">
              <div class="bg-white rounded-xl p-6 shadow-md">
                <h3 class="text-xl font-bold mb-4 text-blue-900">繰り返しても自然な仕上がり</h3>
                <p class="text-gray-700">
                  酸性ストレートを繰り返すことで、
                  髪質が硬くなることをご心配される方も
                  いらっしゃるかもしれませんが、<br /><br />
                  当店のsins酸性ストレートでは、
                  繰り返し施術なさっても、
                  自然で柔らかな仕上げを保ちます。
                </p>
              </div>

              <div class="bg-white rounded-xl p-6 shadow-md">
                <h3 class="text-xl font-bold mb-4 text-blue-900">一人一人に合わせた施術</h3>
                <p class="text-gray-700">
                  また、一人一人に合わせて調合し、
                  特別なワンランク上の薬剤で、
                  施術いたしております。<br /><br />
                  薬剤技術が数ヶ月毎に向上しているため、
                  毎回最高の技術で、
                  ご満足いただけるように行なっております。
                </p>
              </div>

              <div class="bg-white rounded-xl p-6 shadow-md">
                <h3 class="text-xl font-bold mb-4 text-blue-900">茨城県で最初の導入店</h3>
                <p class="text-gray-700">
                  当店ではsins酸性ストレートを茨城県で一番最初に導入しております。
                  施術を多くのお客様にご提供した実績がありますので、安心してお任せください。
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
              <h3 class="text-xl font-bold mb-4 text-yellow-900">ご予約前の注意事項</h3>
              <p class="text-gray-700">
                当店では、sins酸性ストレートを行う場合、
                ヘアカラーを行なってから、
                <span class="font-bold text-red-600">1ヶ月以上経過してから</span>の施術となります。
              </p>
              <p class="text-gray-700 mt-4">
                一ヶ月以内ですと、
                ヘアカラーの薬剤に含まれているアルカリが、
                髪に残っているため最適な仕上がりにならない可能性があります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 料金 */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-2xl mx-auto">
            <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">料金</h2>

            <div class="bg-white rounded-2xl p-8 shadow-lg">
              <div class="space-y-4">
                <div class="flex justify-between pb-3 border-b">
                  <span class="text-lg">ショート</span>
                  <span class="text-xl font-bold text-blue-900">¥19,800</span>
                </div>
                <div class="flex justify-between pb-3 border-b">
                  <span class="text-lg">ミディアム</span>
                  <span class="text-xl font-bold text-blue-900">¥22,000</span>
                </div>
                <div class="flex justify-between pb-3">
                  <span class="text-lg">ロング</span>
                  <span class="text-xl font-bold text-blue-900">¥24,200</span>
                </div>
              </div>
              <p class="text-sm text-gray-500 mt-6">※シャンプー・ブロー・カット込み</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA subtitle="※ご予約の際は「sins酸性ストレート希望」とお伝えください" />

      <Footer showFullInfo />
    </>,
    { title: 'sins酸性ストレート | 美容室success' }
  )
})
