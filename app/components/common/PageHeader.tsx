import type { Child, FC } from 'hono/jsx'

type Props = {
  title: string
  subtitle?: string
  bgGradient?: string
  children?: Child
}

export const PageHeader: FC<Props> = ({ title, subtitle, bgGradient = 'from-gray-50 to-white', children }) => {
  return (
    <section class={`pt-20 pb-12 bg-linear-to-b ${bgGradient}`}>
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">{title}</h1>
          {subtitle && <p class="text-lg text-gray-700 leading-relaxed">{subtitle}</p>}
        </div>
        {children && <div class="mt-8">{children}</div>}
      </div>
    </section>
  )
}
