import type { FC, Child } from 'hono/jsx'

type Props = {
  title: string
  subtitle: string
  color: 'teal' | 'purple' | 'blue'
  recommended?: boolean
  children: Child
}

const colorMap = {
  teal: 'from-teal-600 to-teal-700',
  purple: 'from-purple-600 to-purple-700',
  blue: 'from-blue-600 to-blue-700'
}

export const ServiceCard: FC<Props> = ({ title, subtitle, color, recommended = false, children }) => {
  return (
    <div class="bg-white rounded-3xl shadow-xl overflow-hidden">
      <div class={`bg-gradient-to-r ${colorMap[color]} p-6 text-white`}>
        <h2 class="text-2xl font-bold flex items-center">
          {recommended && <span class="bg-white/20 rounded-lg px-3 py-1 mr-3">おすすめ</span>}
          {title}
        </h2>
        <p class="mt-2 opacity-90">{subtitle}</p>
      </div>
      <div class="p-8">
        {children}
      </div>
    </div>
  )
}
