import { createRoute } from 'honox/factory'
import { Layout } from '../components/common/Layout'
import { SectionHeader } from '../components/pages/home/SectionHeader'
import { MenuCard } from '../components/pages/home/MenuCard'
import { PriceItem } from '../components/pages/home/PriceItem'
import { FAQItem } from '../components/pages/home/FAQItem'
import { Button, PhoneButton } from '../components/common/Button'

export default createRoute((c) => {
  const yearsInOperation = new Date().getFullYear() - 1998 + 1
  return c.render(
    <Layout showFullFooter>

      {/* コンセプト */}
      <section id="concept" class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <SectionHeader title="Concept" />
          <div class="max-w-3xl mx-auto text-center">
            <p class="text-gray-600 leading-relaxed mb-8">
              飾らない雰囲気で、長く通っていただける美容室を続けて{yearsInOperation}年目になりました。
            </p>
            <p class="text-gray-600 leading-relaxed">ダメージを極力出さずに</p>
            <p class="text-gray-600 leading-relaxed">普段のお手入れを扱いやすく</p>
            <p class="text-gray-600 leading-relaxed">美髪へと導く</p>
            <p class="text-gray-600 leading-relaxed mt-4">最高の技術、知識を提供いたします。</p>
          </div>
        </div>
      </section>

      {/* 外観・内観 */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div class="rounded-2xl overflow-hidden shadow-lg aspect-video">
              <img
                src="https://images.success-salon.haton14.com/exterior.avif"
                alt="美容室successの外観"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="rounded-2xl overflow-hidden shadow-lg aspect-video">
              <img
                src="https://images.success-salon.haton14.com/interior.avif"
                alt="美容室successの内観"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* sins 酸性ストレート */}
      <section id="sins" class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center mb-8">
            <h3 class="text-3xl font-bold text-gray-800 mb-4">sins 酸性ストレート</h3>
            <div class="w-24 h-1 bg-blue-800 mx-auto mb-6"></div>
            <p class="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              茨城県で一番最初に導入。<br />
              癖や広がりが伸びてきても気になりづらく、髪質に合わせたオーダーメイドのストレート。<br />
              時間が経ってもきれいに素敵でいられる、再現性の高い技術にこだわっています。
            </p>
          </div>

          <div class="max-w-3xl mx-auto">
            <div class="rounded-2xl overflow-hidden shadow-lg mb-8">
              <img
                src="https://images.success-salon.haton14.com/sins-before-after.avif"
                alt="sins酸性ストレート before/after"
                class="w-full object-cover"
              />
            </div>

            <div class="text-center">
              <div class="grid md:grid-cols-2 gap-4 mb-8">
                <div class="bg-gray-50 rounded-xl p-4 shadow-lg">
                  <h4 class="font-bold mb-2">こんな方に</h4>
                  <p class="text-sm text-gray-600">縮毛矯正で傷んだ髪・自然な仕上がりを求める方</p>
                </div>
                <div class="bg-gray-50 rounded-xl p-4 shadow-lg">
                  <h4 class="font-bold mb-2">特徴</h4>
                  <p class="text-sm text-gray-600">一人一人に合わせた調合・柔らかな仕上がり</p>
                </div>
              </div>

              <div class="bg-gray-50 rounded-xl p-6 mb-8 shadow-lg">
                <p class="text-lg font-bold text-blue-900 mb-3">料金</p>
                <div class="space-y-1 md:space-y-0">
                  <p class="text-gray-700 md:hidden">ショート ¥19,800</p>
                  <p class="text-gray-700 md:hidden">ミディアム ¥22,000</p>
                  <p class="text-gray-700 md:hidden">ロング ¥24,200</p>
                  <p class="text-gray-700 hidden md:block">
                    ショート ¥19,800 / ミディアム ¥22,000 / ロング ¥24,200
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
      <section id="menu" class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <SectionHeader title="Menu & Price" />

          <div class="max-w-5xl mx-auto space-y-12">
            <MenuCard title="カット">
              <PriceItem name="カット" price="¥4,400" note="（シャンプー・ブロー込）" />
              <PriceItem name="幼児カット" price="¥2,500" />
              <PriceItem name="小中高校生" price="¥3,310" note="（シャンプー・ブロー込）" />
              <PriceItem name="前髪カット" price="¥1,100" />
            </MenuCard>

            <MenuCard title="カラー" note="※上記料金はシャンプー・ブロー込み">
              <PriceItem name="カラー＋カット" price="¥8,800〜" />
              <PriceItem name="カラーのみ" price="¥6,600〜" />
            </MenuCard>

            <MenuCard title="ストレート" note="※上記料金はカット・シャンプー・ブロー込み" linkHref="/pages/sins" linkText="sins酸性ストレートを詳しく見る">
              <PriceItem name="sins 酸性ストレート（ショート）" price="¥19,800" />
              <PriceItem name="縮毛矯正" price="¥16,500〜" />
              <PriceItem name="sins 酸性ストレート（ミディアム）" price="¥22,000" />
              <PriceItem name="縮毛矯正(メンズ)" price="¥7,700〜" />
              <PriceItem name="sins 酸性ストレート（ロング）" price="¥24,200" />
              <PriceItem name="ストレートパーマ" price="¥9,900〜" />
            </MenuCard>

            <MenuCard title="パーマ" note="※上記料金はカット・シャンプー・ブロー込み" linkHref="/pages/perm" linkText="パーマを詳しく見る">
              <PriceItem name="パーマ" price="¥8,800〜" />
              <PriceItem name="エアーパーマ" price="¥13,200" />
              <PriceItem name="酸性デジタルパーマ" price="¥17,600" />
            </MenuCard>

            <MenuCard title="ヘッドスパ・トリートメント" note="※ドライヘッドスパは女性限定・完全個室">
              <PriceItem name="水のヘッドスパ (15分)" price="¥2,750〜" />
              <PriceItem name="トリートメント" price="¥1,320〜" />
              <PriceItem name="ドライヘッドスパ (30分)" price="¥3,000" />
              <PriceItem name="シャンプー" price="¥1,100" />
              <PriceItem name="ドライヘッドスパ (60分)" price="¥6,000" />
            </MenuCard>

            <MenuCard title="ヘアセット・着付け">
              <PriceItem name="ヘアセット" price="¥4,400" />
              <PriceItem name="着付け（訪問着）" price="¥11,000" />
              <PriceItem name="メイク" price="¥2,200" />
              <PriceItem name="着付け（振袖）" price="¥8,800" />
              <PriceItem name="成人式(着付け・ヘアセット・メイク)" price="¥22,000" />
              <div class="flex items-baseline gap-2 md:justify-between md:border-b md:border-gray-400 md:pb-2">
                <span class="text-gray-700">夏の浴衣着付け</span>
                <span class="flex-1 border-b border-dotted border-gray-300 mx-2 md:hidden"></span>
                <span class="text-blue-900 whitespace-nowrap">
                  <span class="text-sm">ヘアセット(¥4,400)時</span>
                  <span class="font-semibold"> 無料</span>
                </span>
              </div>
            </MenuCard>

            <MenuCard title="その他メニュー" note="※学生は眉カット無料">
              <PriceItem name="まつ毛パーマ" price="¥2,200" />
              <PriceItem name="眉カット" price="¥550" />
            </MenuCard>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <SectionHeader title="よくあるご質問" subtitle="sins酸性ストレートについて" />
          <div class="max-w-4xl mx-auto space-y-6">
            <FAQItem
              question="従来の縮毛矯正とは何が違うのですか？"
              answer="sins酸性ストレートは髪に優しい酸性薬剤を使用します。アルカリを使わないため、キューティクルを開かずに施術でき、髪へのダメージを最小限に抑えながら自然なストレートヘアを実現します。"
            />
            <FAQItem
              question="どのくらいの頻度で施術が必要ですか？"
              answer="sins酸性ストレートは約4〜6ヶ月効果が持続します。個人差はありますが、通常は4〜6ヶ月に1回の施術で美しいストレートヘアを保つことができます。"
            />
            <FAQItem
              question="カラーリングとの同時施術は可能ですか？"
              answer="はい、可能です。sins酸性ストレートは髪へのダメージが少ないため、カラーリングと同時施術でも髪への負担を最小限に抑えられます。詳しくはご相談ください。"
            />
            <FAQItem
              question="痛んだ髪でも施術できますか？"
              answer="痛んだ髪にもおすすめです。sins酸性ストレートにはトリートメント効果があり、施術により髪質改善が期待できます。縮毛矯正で傷んだ髪にも艶を取り戻します。"
            />
          </div>
        </div>
      </section>

      {/* 予約セクション */}
      <section id="contact" class="py-16 bg-gray-100">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h3 class="text-3xl font-bold text-gray-800 mb-4">ご予約・お問い合わせ</h3>
            <div class="w-24 h-1 bg-blue-800 mx-auto mb-8"></div>
          </div>

          <div class="max-w-4xl mx-auto">
            <div class="grid md:grid-cols-2 gap-8">
              <div class="bg-white rounded-2xl shadow-lg p-8 text-center">
                <h4 class="text-heading-3 font-semibold mb-4">電話予約</h4>
                <PhoneButton href="tel:0299697700" className="text-2xl">
                  0299-69-7700
                </PhoneButton>
              </div>

              <div class="bg-white rounded-2xl shadow-lg p-8 text-center">
                <h4 class="text-heading-3 font-semibold mb-4">LINE公式アカウント</h4>
                <PhoneButton href="https://lin.ee/uZbY0uQ" variant="line" target="_blank" className="text-xl">
                  LINEから予約する
                </PhoneButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 営業時間・アクセス */}
      <section id="access" class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <SectionHeader title="営業時間・アクセス" />

          <div class="max-w-4xl mx-auto">
            <div class="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div class="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 class="text-xl font-semibold mb-4">営業時間</h4>
                  <ul class="space-y-2 text-gray-600 mb-8">
                    <li class="flex justify-between">
                      <span>営業時間</span>
                      <span>9:00 - 19:00</span>
                    </li>
                    <li class="flex justify-between">
                      <span>受付(カット)</span>
                      <span>9:00 - 18:00</span>
                    </li>
                    <li class="flex justify-between">
                      <span>受付(カラー・パーマ)</span>
                      <span>9:00 - 17:00</span>
                    </li>
                    <li class="flex justify-between">
                      <span>定休日</span>
                      <span>火曜日</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 class="text-xl font-semibold mb-4">住所</h4>
                  <p class="text-gray-600 mb-2">〒314-0042</p>
                  <p class="text-gray-600 mb-8">茨城県鹿嶋市小山1072-88</p>

                  <h4 class="text-xl font-semibold mb-4">アクセス</h4>
                  <p class="text-gray-600">駐車場あり</p>
                  <p class="text-gray-600">最寄り駅：荒野台駅から車で約5分</p>
                  <p class="text-gray-600">　　　　　鹿島神宮駅から車で約10分</p>
                </div>
              </div>

              <div class="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6454.854729781947!2d140.626995!3d36.009856!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x602254687abc2475%3A0xeca6e6bd9141c2e3!2z576O5a655a6kc3VjY2Vzcy_jg5jjg4Pjg4njgrnjg5E!5e0!3m2!1sja!2sjp!4v1679374360791!5m2!1sja!2sjp"
                  width="100%"
                  height="350"
                  style="border:0;"
                  allowfullscreen
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  class="rounded-xl shadow-lg"
                >
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>,
    { title: '美容室success | 茨城県鹿嶋市の美容室' }
  )
})
