import { createRoute } from 'honox/factory'
import { Card } from '../../components/common/Card'
import { CTA } from '../../components/common/CTA'
import { Heading } from '../../components/common/Heading'
import { Layout } from '../../components/common/Layout'
import { PageHeader } from '../../components/common/PageHeader'
import { PriceRow } from '../../components/common/PriceRow'
import { SalonImage } from '../../components/common/SalonImage'

const bodyMobilityPhotos = [
  {
    file: 'body-mobility-1-agura-v2.avif',
    alt: 'あぐらがかけないほど硬かった股関節の可動域改善 ビフォーアフター',
    width: 870,
    height: 580,
  },
  { file: 'body-mobility-2-zenkutsu.avif', alt: '前屈の可動域改善 ビフォーアフター', width: 1705, height: 959 },
  { file: 'body-mobility-3-sorigoshi-gray.avif', alt: '反り腰の改善 ビフォーアフター', width: 1144, height: 1430 },
  { file: 'body-mobility-4-sorigoshi-brown.avif', alt: '反り腰の改善 ビフォーアフター', width: 1144, height: 1430 },
  { file: 'body-mobility-5-hiza.avif', alt: '仰向けでの脚・膝の可動域改善 ビフォーアフター', width: 1705, height: 959 },
  {
    file: 'body-mobility-6-kakato.avif',
    alt: 'うつ伏せで踵がお尻に近づく可動域改善 ビフォーアフター',
    width: 1477,
    height: 1108,
  },
  {
    file: 'body-mobility-7-straight-neck.avif',
    alt: 'ストレートネックの改善 ビフォーアフター',
    width: 1280,
    height: 720,
  },
]

export default createRoute((c) => {
  return c.render(
    <Layout currentPage="head-spa" showFullFooter>
      <PageHeader title="ドライヘッドスパ" bgGradient="from-emerald-50 to-white">
        <div class="max-w-3xl mx-auto text-center space-y-6 text-gray-700 leading-relaxed">
          <p>
            「ドライヘッドスパ」とは、水やオイルを使用せずに手技のみで頭部をもみほぐすことにより、
            <br class="hidden md:inline" />
            血行を促進し、睡眠を誘発するヘッドマッサージのことです。
            <br />
            ツボ押しや指圧とは異なり、頭皮の筋肉をもみほぐすことで効果を発揮します。
          </p>
          <p>
            目の周り、こめかみ、後頭部、側頭部をもみほぐします。
            <br />
            指で頭を触って上下に動かない場合は、筋肉が固まっている可能性があります。
            <br />
            頭皮の筋肉が硬くなると、弾力がなくなり、顔の筋肉にも影響を与え、ハリやたるみの原因になることがあります。
          </p>
        </div>
      </PageHeader>

      {/* 施術写真 */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              {[1, 2].map((n) => (
                <div key={n} class="rounded-2xl overflow-hidden shadow-lg">
                  <SalonImage
                    file={`dry-head-spa-${n}.avif`}
                    alt={`ドライヘッドスパ 施術例${n}`}
                    width={1430}
                    height={1144}
                    eager={n === 1}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 施術場所 */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-lg">
            <SalonImage file="dry-head-room.avif" alt="ドライヘッドスパ 施術個室" width={1280} height={1024} />
          </div>
        </div>
      </section>

      {/* 担当者説明 */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto">
            <div class="bg-emerald-50 rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center">
              <p class="text-gray-700 leading-relaxed flex-1">
                当サロンでのヘッドスパ担当者は、
                <br />
                頭のスペシャリスト資格<span class="font-bold">『ヘッドマイスター』</span>取得者です。
                <br />
                <br />
                個室のお部屋で女性スタッフが、特殊技術で行っております。
              </p>
              <div class="w-40 shrink-0 rounded-xl overflow-hidden shadow-md">
                <SalonImage file="dry-head-license.avif" alt="ヘッドマイスター資格証" width={1108} height={1477} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* プレゼント説明 */}
      <section class="py-16 bg-emerald-50">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto">
            <Heading level={2} centered className="mb-8">
              ヘッドスパを施術する方へのプレゼント
            </Heading>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[1, 2].map((n) => (
                <div key={n} class="rounded-xl overflow-hidden shadow-md">
                  <SalonImage
                    file={`dry-head-present-${n}.avif`}
                    alt={`ヘッドスパ プレゼント施術 例${n}`}
                    width={1108}
                    height={1477}
                    className="w-full"
                  />
                </div>
              ))}
            </div>
            <div class="bg-white rounded-xl p-8 shadow-md">
              <p class="text-gray-700 leading-relaxed mb-6">
                頭皮マッサージの前に
                <br />
                腕の可動域を広げて、つまりを取る施術をいたします。
                <br />
                腕の可動域をスムーズにすることで
                <br />
                肩こり、頭皮の硬さも解消されやすくなり、
                <br />
                より一層、ヘッドスパで頭皮が柔らかくなります。
                <br />
                お帰りの際には、背筋も伸びて
                <br />
                全身の血流が良くなる他店にはないマッサージを、お試し下さいませ。
              </p>
              <p class="text-gray-700 leading-relaxed">
                ＊股関節、腰の不調、肩が上がらない等で、お困りの方もお試しくださいませ。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 可動域施術写真 */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bodyMobilityPhotos.map((photo) => (
                <div key={photo.file} class="rounded-xl overflow-hidden shadow-md">
                  <SalonImage
                    file={photo.file}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 補足説明・注意事項 */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto">
            <div class="bg-yellow-50 rounded-xl p-8 border-2 border-yellow-200">
              <h3 class="text-xl font-bold mb-6 text-yellow-900">ご注意</h3>
              <p class="text-gray-700 leading-relaxed">
                何かを治すものではなく
                <br />
                神経伝達異常を改善させる手技です。
                <br />
                個人差があります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 可動域施術の資格 */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto">
            <div class="bg-gray-50 rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center">
              <p class="text-gray-700 leading-relaxed flex-1">
                腕の可動域を広げる施術は、
                <br />
                専門の資格を持つスタッフが行っております。
                <br />
                <br />
                痛みのない優しい手技で、
                <br />
                身体本来のコンディションを引き出します。
              </p>
              <div class="w-40 shrink-0 rounded-xl overflow-hidden shadow-md">
                <SalonImage
                  file="arm-mobility-license.avif"
                  alt="可動域施術 資格証"
                  width={1108}
                  height={1477}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 水のヘッドスパ */}
      <section class="py-16 bg-emerald-50">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto">
            <Heading level={2} centered className="mb-8">
              水のヘッドスパ
            </Heading>
            <div class="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-lg mb-8">
              <SalonImage file="water-head-spa.avif" alt="水のヘッドスパ 施術風景" width={1430} height={1144} />
            </div>
            <div class="bg-white rounded-xl p-8 shadow-md mb-8">
              <p class="text-gray-700 leading-relaxed">
                水のヘッドスパは、特殊なお水を使用し、高めの温度で15分間のマッサージを行います。
                <br />
                シャンプーでは落としきれない頭皮の汚れを取り除くことができます。
                <br />
                施術終了後には、お客様自身でも汚れを確認することができます。
                <br />
                また、頭皮の水分補給も同時に行いますので、髪も艶々サラサラになります。
              </p>
            </div>
            <div class="bg-white rounded-xl p-8 shadow-md">
              <div class="space-y-4">
                <PriceRow label="水のヘッドスパ（15分）" price="¥2,750（税込）" variant="border" />
              </div>
              <p class="text-sm text-gray-500 mt-6">※ロング、毛量が多い方はプラス500円〜1000円になります。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 料金 */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-2xl mx-auto">
            <Heading level={2} centered className="mb-8">
              料金
            </Heading>
            <Card padding="lg">
              <div class="space-y-4">
                <PriceRow label="ドライヘッドスパ（30分）" price="¥3,000" variant="border" />
                <PriceRow label="ドライヘッドスパ（60分）" price="¥6,000" variant="border" />
              </div>
              <p class="text-sm text-gray-500 mt-6">※女性限定・完全個室</p>
            </Card>
          </div>
        </div>
      </section>

      {/* お客様の声 */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <Heading level={2} centered className="mb-8">
              お客様の声
            </Heading>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} class="rounded-2xl overflow-hidden shadow-lg">
                  <SalonImage
                    file={`head-spa-voice-${n}.avif`}
                    alt={`ヘッドスパ お客様の声${n}`}
                    width={1108}
                    height={1477}
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </Layout>,
    {
      title: 'ドライヘッドスパ | 美容室success',
      description:
        'ヘッドマイスター資格取得者が完全個室で行う女性限定のドライヘッドスパ。血行を促進し睡眠を誘発するヘッドマッサージで、頭皮から心までリラックス。茨城県鹿嶋市の美容室success。',
    }
  )
})
