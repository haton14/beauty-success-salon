import type { FC } from 'hono/jsx'
import { PhoneButton } from './Button'
import { SectionHeader } from './Heading'

type Props = {
  title?: string
  subtitle?: string
  bgColor?: string
}

export const CTA: FC<Props> = ({
  title = 'ご予約・お問い合わせ',
  subtitle,
  bgColor = 'bg-primary-50'
}) => {
  return (
    <section class={`py-section-sm ${bgColor}`}>
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-heading-2 text-gray-800 mb-4">{title}</h2>
        {subtitle && <p class="text-gray-700 mb-8">{subtitle}</p>}
        <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <PhoneButton href="tel:0299697700" variant="primary" size="lg" className="text-xl">
            0299-69-7700
          </PhoneButton>
          <PhoneButton href="https://lin.ee/uZbY0uQ" variant="line" size="lg" className="text-xl" target="_blank">
            LINEから予約
          </PhoneButton>
        </div>
      </div>
    </section>
  )
}
