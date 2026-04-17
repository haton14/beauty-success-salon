import { createRoute } from 'honox/factory'
import { Layout } from '../../components/common/Layout'
import { CTA } from '../../components/common/CTA'
import { PriceRow } from '../../components/common/PriceRow'

const BASE = 'https://images.success-salon.haton14.com'

export default createRoute((c) => {
  return c.render(
    <Layout currentPage="dry-head" showFullFooter>

      {/* メインビジュアル */}
      <section class="pt-12 pb-8 bg-linear-to-b from-emerald-50 to-white">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">ドライヘッドスパ</h1>
            <p class="text-gray-700 leading-relaxed mb-6">
              「ドライヘッドスパ」とは、水やオイルを使用せずに手技のみで頭部をもみほぐすことにより、<br class="hidden md:inline" />
              血行を促進し、睡眠を誘発するヘッドマッサージのことです。<br />
              ツボ押しや指圧とは異なり、頭皮の筋肉をもみほぐすことで効果を発揮します。
            </p>
            <p class="text-gray-700 leading-relaxed">
              目の周り、こめかみ、後頭部、側頭部をもみほぐします。<br />
              指で頭を触って上下に動かない場合は、筋肉が固まっている可能性があります。<br />
              頭皮の筋肉が硬くなると、弾力がなくなり、顔の筋肉にも影響を与え、ハリやたるみの原因になることがあります。
            </p>
          </div>
        </div>
      </section>

      {/* 施術写真 */}
      <section class="py-12 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <div class="grid grid-cols-2 gap-4 items-start">
              {[1, 2].map((n) => (
                <div key={n} class="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={`${BASE}/dry-head-spa-${n}.avif`}
                    alt={`ドライヘッドスパ 施術例${n}`}
                    class="w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 施術場所 */}
      <section class="py-8 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-lg">
            <img
              src={`${BASE}/dry-head-room.avif`}
              alt="ドライヘッドスパ 施術個室"
              class="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 感想写真 */}
      <section class="py-12 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">お客様の声</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 items-start">
              {[1, 2, 3].map((n) => (
                <div key={n} class="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={`${BASE}/dry-head-review-${n}.avif`}
                    alt={`ドライヘッドスパ お客様の声${n}`}
                    class="w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 担当者説明 */}
      <section class="py-12 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto">
            <div class="bg-emerald-50 rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center">
              <p class="text-gray-700 leading-relaxed flex-1">
                当サロンでのヘッドスパ担当者は、<br />
                頭のスペシャリスト資格<span class="font-bold">『ヘッドマイスター』</span>取得者です。<br /><br />
                個室のお部屋で女性スタッフが、特殊技術で行っております。
              </p>
              <div class="w-40 shrink-0 rounded-xl overflow-hidden shadow-md">
                <img
                  src={`${BASE}/dry-head-license.avif`}
                  alt="ヘッドマイスター資格証"
                  class="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* プレゼント説明 */}
      <section class="py-12 bg-emerald-50">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold text-emerald-900 mb-8 text-center">ヘッドスパを施術する方へのプレゼント</h2>
            <div class="grid grid-cols-2 gap-4 mb-8">
              {[1, 2].map((n) => (
                <div key={n} class="rounded-xl overflow-hidden shadow-md">
                  <img
                    src={`${BASE}/dry-head-present-${n}.avif`}
                    alt={`ヘッドスパ プレゼント施術 例${n}`}
                    class="w-full"
                  />
                </div>
              ))}
            </div>
            <div class="bg-white rounded-xl p-8 shadow-md">
              <p class="text-gray-700 leading-relaxed mb-6">
                頭皮マッサージの前に<br />
                腕の可動域を広げて、つまりを取る施術をいたします。<br />
                腕の可動域をスムーズにすることで<br />
                肩こり、頭皮の硬さも解消されやすくなり、<br />
                より一層、ヘッドスパで頭皮が柔らかくなります。<br />
                お帰りの際には、背筋も伸びて<br />
                全身の血流が良くなる他店にはないマッサージを、お試し下さいませ。
              </p>
              <p class="text-gray-700 leading-relaxed">
                その他にも<br />
                股関節の痛み、肩が上がらずブロック注射をしている方も、ご相談下さいませ。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 可動域施術写真 */}
      <section class="py-12 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4, 5].map((n) => (
                <div key={n} class="rounded-xl overflow-hidden shadow-md">
                  <img
                    src={`${BASE}/arm-mobility-${n}.avif`}
                    alt={`可動域を広げる施術 例${n}`}
                    class="w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 補足説明・注意事項 */}
      <section class="py-12 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto">
            <div class="bg-yellow-50 rounded-xl p-8 border-2 border-yellow-200">
              <h3 class="text-xl font-bold mb-6 text-yellow-900">ご注意</h3>
              <p class="text-gray-700 leading-relaxed">
                何かを治すものではありません。<br />
                痛みのない優しい手技で、<br />
                身体の奥深くの神経を整え、神経伝達異常を改善させて、<br />
                本来のコンディションを引き出す、最先端の新しい手技です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 可動域施術の資格 */}
      <section class="py-12 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto">
            <div class="bg-gray-50 rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center">
              <p class="text-gray-700 leading-relaxed flex-1">
                腕の可動域を広げる施術は、<br />
                専門の資格を持つスタッフが行っております。<br /><br />
                痛みのない優しい手技で、<br />
                身体本来のコンディションを引き出します。
              </p>
              <div class="w-40 shrink-0 rounded-xl overflow-hidden shadow-md">
                <img
                  src={`${BASE}/arm-mobility-license.avif`}
                  alt="可動域施術 資格証"
                  class="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 料金 */}
      <section class="py-12 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-2xl mx-auto">
            <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">料金</h2>
            <div class="bg-white rounded-2xl p-8 shadow-lg">
              <div class="space-y-4">
                <PriceRow label="ドライヘッドスパ（30分）" price="¥3,000" variant="border" />
                <PriceRow label="ドライヘッドスパ（60分）" price="¥6,000" variant="border" />
              </div>
              <p class="text-sm text-gray-500 mt-6">※女性限定・完全個室</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA subtitle="※ご予約の際は「ドライヘッドスパ希望」とお伝えください" />
    </Layout>,
    { title: 'ドライヘッドスパ | 美容室success' }
  )
})
