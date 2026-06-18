import { createRoute } from 'honox/factory'
import { Button, PhoneButton } from '../components/common/Button'
import { SectionHeader } from '../components/common/Heading'
import { Layout } from '../components/common/Layout'
import { SalonImage } from '../components/common/SalonImage'
import { FAQItem } from '../components/pages/home/FAQItem'
import { MenuCard } from '../components/pages/home/MenuCard'
import { PriceItem } from '../components/pages/home/PriceItem'
import {
  ACCESS_INFO,
  BUSINESS_HOURS,
  GOOGLE_MAPS_EMBED_URL,
  LINE_URL,
  SHOP_INFO,
  SINS_FAQ,
  SINS_PRICES,
} from '../constants'
import { getYearsInBusiness } from '../utils'

export default createRoute((c) => {
  return c.render(
    <Layout showFullFooter>
      <h1 class="sr-only">美容室success | 茨城県鹿嶋市の美容室</h1>

      {/* コンセプト */}
      <section id="concept" class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <SectionHeader title="Concept" />
          <div class="max-w-3xl mx-auto text-center">
            <p class="text-gray-600 leading-relaxed mb-8">
              飾らない雰囲気で、長く通っていただける美容室を続けて{getYearsInBusiness() + 1}年目になりました。
            </p>
            <p class="text-gray-600 leading-relaxed">ダメージを極力出さずに</p>
            <p class="text-gray-600 leading-relaxed">普段のお手入れを扱いやすく</p>
            <p class="text-gray-600 leading-relaxed">美髪へと導く</p>
            <p class="text-gray-600 leading-relaxed mt-4">最高の技術、知識を提供いたします。</p>
            <div class="mt-8">
              <Button href="/pages/staff" variant="secondary">
                スタッフ紹介を見る
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 外観・内観 */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div class="rounded-2xl overflow-hidden shadow-lg aspect-video">
              <SalonImage
                file="exterior.avif"
                alt="美容室successの外観"
                width={1282}
                height={961}
                eager
                className="w-full h-full object-cover"
              />
            </div>
            <div class="rounded-2xl overflow-hidden shadow-lg aspect-video">
              <SalonImage
                file="interior.avif"
                alt="美容室successの内観"
                width={1282}
                height={961}
                eager
                priority={false}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* sins 酸性ストレート */}
      <section id="sins" class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <SectionHeader
            title="sins 酸性ストレート"
            subtitle="茨城県で一番最初に導入。髪質に合わせたオーダーメイドのストレートで、時間が経ってもきれいに素敵でいられる、再現性の高い技術にこだわっています。"
          />

          <div class="max-w-3xl mx-auto">
            <div class="rounded-2xl overflow-hidden shadow-lg mb-8">
              <SalonImage
                file="sins-before-after.avif"
                alt="sins酸性ストレート before/after"
                width={1280}
                height={1280}
              />
            </div>

            <div class="text-center">
              <div class="grid md:grid-cols-2 gap-4 mb-8">
                <div class="bg-gray-50 rounded-xl p-4 shadow-lg">
                  <h3 class="font-bold mb-2">このような方に</h3>
                  <p class="text-sm text-gray-600">艶髪で、綺麗な髪質を求める方</p>
                </div>
                <div class="bg-gray-50 rounded-xl p-4 shadow-lg">
                  <h3 class="font-bold mb-2">特徴</h3>
                  <p class="text-sm text-gray-600">一人一人に合わせた調合・柔らかな仕上がり</p>
                </div>
              </div>

              <div class="bg-gray-50 rounded-xl p-6 mb-8 shadow-lg">
                <p class="text-lg font-bold text-blue-900 mb-3">料金</p>
                <div class="space-y-1 md:space-y-0">
                  {SINS_PRICES.map((item) => (
                    <p key={item.label} class="text-gray-700 md:hidden">
                      {item.label} {item.price}
                    </p>
                  ))}
                  <p class="text-gray-700 hidden md:block">
                    {SINS_PRICES.map((item) => `${item.label} ${item.price}`).join(' / ')}
                  </p>
                </div>
                <p class="text-sm text-gray-500 mt-2">※カット・シャンプー・ブロー込み</p>
              </div>

              <div class="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Button href="/pages/sins" className="w-44">
                  詳しく見る →
                </Button>
                <Button href="#contact" variant="secondary" className="w-44">
                  ご予約はこちら
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* メニュー */}
      <section id="menu" class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <SectionHeader title="Menu & Price" />

          <div class="text-center -mt-8 mb-12 text-gray-600">
            <p>価格は全て税込みです</p>
            <p>お支払い方法は現金のみとなっております</p>
          </div>

          <div class="max-w-5xl mx-auto space-y-12">
            <MenuCard title="カット">
              <PriceItem name="カット" price="¥4,400" note="（シャンプー・ブロー込）" />
              <PriceItem name="幼児カット" price="¥2,500" />
              <PriceItem name="小中高校生" price="¥3,960" note="（シャンプー・ブロー込）" />
              <PriceItem name="前髪カット" price="¥1,100" />
              <PriceItem name="眉カット" price="¥550" />
            </MenuCard>

            <MenuCard title="カラー" note="※上記料金はシャンプー・ブロー込み">
              <PriceItem name="カラー＋カット" price="¥9,900〜" />
              <PriceItem name="カラーのみ（全体）" price="¥7,700〜" />
              <PriceItem name="マニキア＋カット" price="¥9,900〜" />
              <PriceItem name="マニキアのみ" price="¥7,700〜" />
              <PriceItem name="ヘナ＋カット" price="¥9,900〜" />
              <PriceItem name="ヘナのみ" price="¥7,700〜" />
            </MenuCard>

            <MenuCard
              title="ストレート"
              note="※上記料金はカット・シャンプー・ブロー込み"
              linkHref="/pages/sins"
              linkText="sins酸性ストレートを詳しく見る"
            >
              {SINS_PRICES.map((item) => (
                <PriceItem key={item.label} name={`sins 酸性ストレート（${item.label}）`} price={item.price} />
              ))}
            </MenuCard>

            <MenuCard title="パーマ" note="※上記料金はカット・シャンプー・ブロー込み">
              <PriceItem name="パーマ" price="¥9,900〜" />
              <PriceItem name="酸性デジタルパーマ" price="¥17,600" />
              <PriceItem name="エアパーマ" price="¥13,200" />
              <PriceItem name="ツイストパーマ" price="¥11,000" />
              <PriceItem name="スパイラルパーマ" price="¥11,000" />
              <PriceItem name="ツイストスパイラルパーマ" price="¥11,000" />
            </MenuCard>

            <MenuCard
              title="ヘッドスパ"
              note="※ドライヘッドスパは女性限定・完全個室"
              linkHref="/pages/head-spa"
              linkText="ヘッドスパを詳しく見る"
            >
              <PriceItem name="ドライヘッドスパ (30分)" price="¥3,000" />
              <PriceItem name="ドライヘッドスパ (60分)" price="¥6,000" />
              <PriceItem name="水のヘッドスパ (15分)" price="¥2,750〜" />
            </MenuCard>

            <MenuCard title="ヘアセット・着付け" linkHref="/pages/kimono" linkText="ヘアセット・着付けを詳しく見る">
              <PriceItem name="ヘアセット" price="¥4,400" />
              <PriceItem name="メイク" price="¥2,200" />
              <PriceItem name="着付け（振袖）" price="¥11,000" />
              <PriceItem name="着付け（留袖、訪問着、袴）" price="¥8,800" />
              <PriceItem name="成人式(振袖着付け、ヘアアップ、メイク)" price="¥22,000" />
              <PriceItem name="七五三着付け(ヘアセット、着付け、メイク)" price="¥12,100" />
            </MenuCard>

            <MenuCard title="まつ毛パーマ" linkHref="/pages/eyelash" linkText="まつ毛パーマを詳しく見る">
              <PriceItem name="まつ毛パーマ" price="¥2,200" />
              <div class="md:col-span-2">
                <SalonImage
                  file="eyelash-main.avif"
                  alt="まつ毛パーマの施術例"
                  width={1303}
                  height={1256}
                  className="rounded-xl shadow-lg w-full max-w-md mx-auto"
                />
              </div>
            </MenuCard>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <SectionHeader title="よくあるご質問" subtitle="sins酸性ストレートについて" />
          <div class="max-w-4xl mx-auto space-y-6">
            {SINS_FAQ.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* 予約セクション */}
      <section id="contact" class="py-16 bg-gray-100">
        <div class="container mx-auto px-4">
          <SectionHeader title="ご予約・お問い合わせ" />

          <div class="max-w-4xl mx-auto">
            <div class="grid md:grid-cols-2 gap-8">
              <div class="bg-white rounded-2xl shadow-lg p-8 text-center">
                <h3 class="text-heading-3 font-semibold mb-4">電話予約</h3>
                <PhoneButton href={SHOP_INFO.telHref} className="text-2xl">
                  {SHOP_INFO.tel}
                </PhoneButton>
              </div>

              <div class="bg-white rounded-2xl shadow-lg p-8 text-center">
                <h3 class="text-heading-3 font-semibold mb-4">LINE公式アカウント</h3>
                <PhoneButton href={LINE_URL} variant="line" target="_blank" className="text-xl">
                  LINEから予約する
                </PhoneButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 営業時間・アクセス */}
      <section id="access" class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <SectionHeader title="営業時間・アクセス" />

          <div class="max-w-4xl mx-auto">
            <div class="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div class="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 class="text-xl font-semibold mb-4">営業時間</h3>
                  <ul class="space-y-2 text-gray-600 mb-8">
                    {BUSINESS_HOURS.map((hour) => (
                      <li key={hour.label} class="flex justify-between">
                        <span>{hour.label}</span>
                        <span>{hour.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 class="text-xl font-semibold mb-4">住所</h3>
                  <address class="not-italic">
                    <p class="text-gray-600 mb-2">{SHOP_INFO.postalCode}</p>
                    <p class="text-gray-600 mb-8">{SHOP_INFO.address}</p>
                  </address>

                  <h3 class="text-xl font-semibold mb-4">アクセス</h3>
                  <p class="text-gray-600">{ACCESS_INFO.parking}</p>
                  <ul class="text-gray-600">
                    {ACCESS_INFO.stations.map((station) => (
                      <li key={station}>{station}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div class="mt-8">
                <iframe
                  src={GOOGLE_MAPS_EMBED_URL}
                  title="美容室successの地図（Googleマップ）"
                  width="100%"
                  height="350"
                  style="border:0;"
                  allowfullscreen
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  class="rounded-xl shadow-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>,
    { title: '美容室success | 茨城県鹿嶋市の美容室' }
  )
})
