import type { FC, Child } from 'hono/jsx'
import { Card } from '../../common/Card'

type Props = {
  title: string
  subtitle: string
  color: 'accent' | 'highlight' | 'primary'
  recommended?: boolean
  children: Child
}

const colorMap = {
  accent: 'from-accent-600 to-accent-700',
  highlight: 'from-highlight-600 to-highlight-700',
  primary: 'from-primary-600 to-primary-700'
}

export const ServiceCard: FC<Props> = ({ title, subtitle, color, recommended = false, children }) => {
  return (
    <Card variant="featured" padding="lg" className="p-0 overflow-hidden">
      <div class={`bg-gradient-to-r ${colorMap[color]} p-6 text-white`}>
        <h2 class="text-heading-3 flex items-center">
          {recommended && <span class="bg-white/20 rounded-lg px-3 py-1 mr-3">おすすめ</span>}
          {title}
        </h2>
        <p class="mt-2 opacity-90">{subtitle}</p>
      </div>
      <div class="p-8">
        {children}
      </div>
    </Card>
  )
}
