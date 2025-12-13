import type { FC } from 'hono/jsx'

type Props = {
  title: string
  subtitle?: string
  bgGradient?: string
  showUnderline?: boolean
}

export const PageHeader: FC<Props> = ({
  title,
  subtitle,
  bgGradient = 'from-gray-50 to-white',
  showUnderline = false
}) => {
  return (
    <section class={`pt-24 pb-16 bg-gradient-to-br ${bgGradient}`}>
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
          {subtitle && <p class="text-lg text-gray-600">{subtitle}</p>}
          {showUnderline && <div class="w-24 h-1 bg-blue-800 mx-auto mt-4"></div>}
        </div>
      </div>
    </section>
  )
}
