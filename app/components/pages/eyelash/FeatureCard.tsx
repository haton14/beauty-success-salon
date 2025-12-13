import type { FC, Child } from 'hono/jsx'

type Props = {
  title: string
  description: string
  icon: Child
  iconBgColor?: string
}

export const FeatureCard: FC<Props> = ({ title, description, icon, iconBgColor = 'bg-pink-100' }) => {
  return (
    <div class="text-center">
      <div class={`w-20 h-20 ${iconBgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
        {icon}
      </div>
      <h3 class="text-xl font-bold mb-3">{title}</h3>
      <p class="text-gray-600">{description}</p>
    </div>
  )
}
