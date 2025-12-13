import type { FC } from 'hono/jsx'
import { Card } from '../../common/Card'

type Props = {
  title: string
  items: string[]
  iconColor?: string
  titleColor?: string
}

export const TipCard: FC<Props> = ({
  title,
  items,
  iconColor = 'text-primary-500',
  titleColor = 'text-primary-900'
}) => {
  return (
    <Card>
      <h4 class={`text-heading-4 mb-3 ${titleColor}`}>{title}</h4>
      <ul class="space-y-2 text-gray-700">
        {items.map((item) => (
          <li class="flex items-start">
            <span class={`${iconColor} mr-2`}>•</span>
            {item}
          </li>
        ))}
      </ul>
    </Card>
  )
}
