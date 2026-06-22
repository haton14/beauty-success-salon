import { createRoute } from 'honox/factory'
import { CTA } from '../../components/common/CTA'
import { Heading } from '../../components/common/Heading'
import { Layout } from '../../components/common/Layout'
import { PageHeader } from '../../components/common/PageHeader'
import { PriceRow } from '../../components/common/PriceRow'
import { SalonImage } from '../../components/common/SalonImage'

const seijinshikiPhotos = [
  { file: 'seijinshiki-1-purple.avif', alt: '成人式 紫系振袖のヘアセットと帯結び', width: 1477, height: 1108 },
  { file: 'seijinshiki-2-red.avif', alt: '成人式 赤系振袖のヘアセットと帯結び', width: 1430, height: 1144 },
  { file: 'seijinshiki-3-white.avif', alt: '成人式 白い髪飾りと帯結びのスタイル', width: 1430, height: 1144 },
  { file: 'seijinshiki-4-hair.avif', alt: '成人式 ヘアアレンジと髪飾り', width: 1108, height: 1477 },
  { file: 'seijinshiki-5-red-obi.avif', alt: '成人式 赤系振袖の帯結びアップ', width: 1430, height: 1144 },
]

const houmongiPhotos = [
  { file: 'houmongi-1.avif', alt: '訪問着の着付け 帯結びの後ろ姿', width: 1049, height: 1399 },
  { file: 'tomesode-1.avif', alt: '黒留袖の着姿', width: 1108, height: 1477 },
]

const shichigosanPhotos = [
  { file: 'shichigosan-1-fullbody.avif', alt: '七五三 着物姿のお子様の全身', width: 1144, height: 1430 },
  { file: 'shichigosan-2-closeup.avif', alt: '七五三 着物姿のお子様の笑顔のアップ', width: 1567, height: 1045 },
  { file: 'shichigosan-3-minnie.avif', alt: '七五三 赤い着物のお子様とミニーマウス', width: 1108, height: 1478 },
  { file: 'shichigosan-4-red-pair.avif', alt: '七五三 赤い着物のお子様たち', width: 1144, height: 1430 },
]

export default createRoute((c) => {
  return c.render(
    <Layout currentPage="kimono" showFullFooter>
      <PageHeader
        title="ヘアセット・着付け"
        subtitle="人生の特別な日を、最高の装いで"
        bgGradient="from-purple-50 to-white"
      />

      {/* 成人式 */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <Heading level={2} centered className="mb-6">
              ◇成人式◇
            </Heading>
            <p class="text-center text-gray-700 text-lg mb-10">
              振袖着付け、ヘアアップ、メイク
              <br />
              <span class="font-bold text-purple-900">3点セット: 22,000円</span>
            </p>

            <div class="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-lg mb-8">
              <SalonImage
                file="seijinshiki-main.avif"
                alt="成人式 白い振袖の着付けとヘアメイク"
                width={1060}
                height={1544}
                eager
              />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
              {seijinshikiPhotos.map((photo) => (
                <div key={photo.file} class="rounded-2xl overflow-hidden shadow-lg">
                  <SalonImage file={photo.file} alt={photo.alt} width={photo.width} height={photo.height} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 訪問着 留袖 */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <Heading level={2} centered className="mb-6">
              ◇訪問着 留袖◇
            </Heading>
            <p class="text-center text-gray-700 text-lg mb-10">
              <span class="font-bold text-purple-900">8,800円</span>
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              {houmongiPhotos.map((photo) => (
                <div key={photo.file} class="rounded-2xl overflow-hidden shadow-lg">
                  <SalonImage file={photo.file} alt={photo.alt} width={photo.width} height={photo.height} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 七五三 */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <Heading level={2} centered className="mb-6">
              ◇七五三◇
            </Heading>

            <div class="max-w-2xl mx-auto bg-purple-50 rounded-2xl p-8 mb-10">
              <div class="space-y-3">
                <PriceRow label="ヘアセット" price="¥4,400" variant="border" />
                <PriceRow label="着付け" price="¥5,500" variant="border" />
                <PriceRow label="メイク" price="¥2,200" variant="border" />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              {shichigosanPhotos.map((photo) => (
                <div key={photo.file} class="rounded-2xl overflow-hidden shadow-lg">
                  <SalonImage file={photo.file} alt={photo.alt} width={photo.width} height={photo.height} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA bgColor="bg-purple-50" />
    </Layout>,
    {
      title: 'ヘアセット・着付け | 美容室success',
      description:
        '成人式・七五三・訪問着・留袖などのヘアセット・着付けは茨城県鹿嶋市の美容室successへ。人生の特別な日を最高の装いでお手伝いします。',
    }
  )
})
