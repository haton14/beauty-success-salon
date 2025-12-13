import type { FC } from 'hono/jsx'

type Props = {
  title?: string
  subtitle?: string
  bgColor?: string
}

export const CTA: FC<Props> = ({
  title = 'ご予約・お問い合わせ',
  subtitle,
  bgColor = 'bg-blue-50'
}) => {
  return (
    <section class={`py-16 ${bgColor}`}>
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
        {subtitle && <p class="text-gray-700 mb-8">{subtitle}</p>}
        <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <a
            href="tel:0299697700"
            class="bg-gradient-to-b from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-blue-800"
          >
            0299-69-7700
          </a>
          <a
            href="https://lin.ee/uZbY0uQ"
            target="_blank"
            class="bg-gradient-to-b from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-bold text-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-green-700"
          >
            LINEから予約
          </a>
        </div>
      </div>
    </section>
  )
}
