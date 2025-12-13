import type { FC } from 'hono/jsx'

type Props = {
  title: string
  subtitle?: string
}

export const SectionHeader: FC<Props> = ({ title, subtitle }) => {
  return (
    <div class="text-center mb-16">
      <h3 class="text-3xl font-bold text-gray-800 mb-4">{title}</h3>
      {subtitle && <p class="text-lg text-gray-600 mb-4">{subtitle}</p>}
      <div class="w-24 h-1 bg-blue-800 mx-auto"></div>
    </div>
  )
}
