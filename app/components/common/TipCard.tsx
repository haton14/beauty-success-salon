import type { FC } from 'hono/jsx'

type Props = {
  title: string
  items: string[]
  iconColor?: string
  titleColor?: string
}

export const TipCard: FC<Props> = ({
  title,
  items,
  iconColor = 'text-blue-500',
  titleColor = 'text-blue-900'
}) => {
  return (
    <div class="bg-white rounded-xl p-6">
      <h4 class={`font-bold text-lg mb-3 ${titleColor}`}>{title}</h4>
      <ul class="space-y-2 text-gray-700">
        {items.map((item) => (
          <li class="flex items-start">
            <span class={`${iconColor} mr-2`}>•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
