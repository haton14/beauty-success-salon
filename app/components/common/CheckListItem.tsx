import type { FC } from 'hono/jsx'

type Props = {
  icon?: '✓' | '◆' | '•' | '♢'
  iconColor?: string
  children: string
}

export const CheckListItem: FC<Props> = ({
  icon = '✓',
  iconColor = 'text-green-500',
  children
}) => {
  return (
    <li class="flex items-start">
      <span class={`${iconColor} mr-2`}>{icon}</span>
      {children}
    </li>
  )
}
