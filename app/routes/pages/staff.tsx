import { createRoute } from 'honox/factory'
import { Card } from '../../components/common/Card'
import { CTA } from '../../components/common/CTA'
import { Heading } from '../../components/common/Heading'
import { Layout } from '../../components/common/Layout'
import { PageHeader } from '../../components/common/PageHeader'
import { SalonImage } from '../../components/common/SalonImage'
import { getYearsInBusiness } from '../../utils'

export default createRoute((c) => {
  const years = getYearsInBusiness()
  return c.render(
    <Layout currentPage="staff" showFullFooter>
      <PageHeader title="スタッフ紹介" bgGradient="from-blue-50 to-white" />

      {/* スタッフ紹介 */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto space-y-8">
            {/* オーナー(写真・肩書き・説明を1枚のカードに) */}
            <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div class="grid md:grid-cols-2 gap-6 items-center">
                <div class="rounded-xl overflow-hidden">
                  <SalonImage
                    file="staff-1-male.avif"
                    alt="オーナースタイリスト(男性スタッフ)"
                    width={1144}
                    height={1430}
                    eager
                  />
                </div>
                <div>
                  <Heading level={3} className="mb-4">
                    オーナースタイリスト
                  </Heading>
                  <div class="bg-blue-50 rounded-lg p-4">
                    <p class="text-gray-700 leading-relaxed">
                      普段のお手入れがしやすいように再現性のあるカットに仕上げます。
                      すきバサミ(セニングシザー)を使わず、ハサミだけでの毛量調整が得意です。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* スタッフ(同上) */}
            <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div class="grid md:grid-cols-2 gap-6 items-center">
                <div class="rounded-xl overflow-hidden">
                  <SalonImage file="staff-2-female.avif" alt="スタイリスト(女性スタッフ)" width={1144} height={1430} />
                </div>
                <div>
                  <Heading level={3} className="mb-4">
                    スタイリスト
                  </Heading>
                  <div class="bg-pink-50 rounded-lg p-4">
                    <p class="text-gray-700 leading-relaxed">
                      オールハンドで、頭皮を柔らかくしたり、体の詰まりを取り除くのが得意です。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* メッセージ */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto text-center">
            <Heading level={2} className="mb-8">
              私たちの想い
            </Heading>
            <Card padding="lg">
              <p class="text-gray-700 leading-relaxed mb-6">
                夫婦で営んで{years}年。長年の経験と技術を活かし、 お客様一人ひとりに寄り添ったサービスを提供しています。
              </p>
              <p class="text-gray-700 leading-relaxed mb-6">
                髪のお悩みを解決し、自宅でもお手入れしやすいスタイルをご提案。
                技術の向上はもちろん、お客様とのコミュニケーションを大切にしています。
              </p>
              <p class="text-gray-700 leading-relaxed">リラックスできる空間で、特別な時間をお過ごしください。</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </Layout>,
    {
      title: 'スタッフ紹介 | 美容室success',
      description:
        '夫婦で営む茨城県鹿嶋市の美容室successのスタッフ紹介。長年の経験と技術で、お客様一人ひとりに寄り添ったサービスを提供しています。',
    }
  )
})
