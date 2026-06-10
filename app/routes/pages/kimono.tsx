import { createRoute } from 'honox/factory'
import { Layout } from '../../components/common/Layout'
import { PageHeader } from '../../components/common/PageHeader'
import { CTA } from '../../components/common/CTA'
import { PriceRow } from '../../components/common/PriceRow'

const BASE = 'https://images.success-salon.haton14.com'

const seijinshikiPhotos = [
  { file: 'seijinshiki-1-purple.avif', alt: '成人式 紫系振袖のヘアセットと帯結び' },
  { file: 'seijinshiki-2-red.avif', alt: '成人式 赤系振袖のヘアセットと帯結び' },
  { file: 'seijinshiki-3-white.avif', alt: '成人式 白い髪飾りと帯結びのスタイル' },
  { file: 'seijinshiki-4-hair.avif', alt: '成人式 ヘアアレンジと髪飾り' },
  { file: 'seijinshiki-5-red-obi.avif', alt: '成人式 赤系振袖の帯結びアップ' },
]

const houmongiPhotos = [
  { file: 'houmongi-1.avif', alt: '訪問着の着付け 帯結びの後ろ姿' },
  { file: 'tomesode-1.avif', alt: '黒留袖の着姿' },
]

const shichigosanPhotos = [
  { file: 'shichigosan-1-fullbody.avif', alt: '七五三 着物姿のお子様の全身' },
  { file: 'shichigosan-2-closeup.avif', alt: '七五三 着物姿のお子様の笑顔のアップ' },
  { file: 'shichigosan-3-minnie.avif', alt: '七五三 赤い着物のお子様とミニーマウス' },
  { file: 'shichigosan-4-red-pair.avif', alt: '七五三 赤い着物のお子様たち' },
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
            <h2 class="text-heading-2 text-gray-800 mb-6 text-center">◇成人式◇</h2>
            <p class="text-center text-gray-700 text-lg mb-10">
              振袖着付け、ヘアアップ、メイク<br />
              <span class="font-bold text-purple-900">3点セット: 22,000円</span>
            </p>

            <div class="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-lg mb-8">
              <img
                src={`${BASE}/seijinshiki-main.avif`}
                alt="成人式 白い振袖の着付けとヘアメイク"
                class="w-full object-cover"
              />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
              {seijinshikiPhotos.map((photo) => (
                <div key={photo.file} class="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={`${BASE}/${photo.file}`}
                    alt={photo.alt}
                    class="w-full object-cover"
                  />
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
            <h2 class="text-heading-2 text-gray-800 mb-6 text-center">◇訪問着 留袖◇</h2>
            <p class="text-center text-gray-700 text-lg mb-10">
              <span class="font-bold text-purple-900">8,800円</span>
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              {houmongiPhotos.map((photo) => (
                <div key={photo.file} class="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={`${BASE}/${photo.file}`}
                    alt={photo.alt}
                    class="w-full object-cover"
                  />
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
            <h2 class="text-heading-2 text-gray-800 mb-6 text-center">◇七五三◇</h2>

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
                  <img
                    src={`${BASE}/${photo.file}`}
                    alt={photo.alt}
                    class="w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA subtitle="まずはお気軽にご相談ください" bgColor="bg-purple-50" />
    </Layout>,
    { title: 'ヘアセット・着付け | 美容室success' }
  )
})
