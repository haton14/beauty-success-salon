import type { FC } from 'hono/jsx'

type Props = {
  duration: string
  retention?: string
  bgColor?: string
  textColor?: string
}

export const ServiceInfoBox: FC<Props> = ({
  duration,
  retention,
  bgColor = 'bg-blue-50',
  textColor = 'text-blue-800'
}) => {
  return (
    <div class={`${bgColor} rounded-xl p-4`}>
      <p class={`text-sm ${textColor} font-semibold mb-2`}>施術時間：{duration}</p>
      {retention && <p class="text-sm text-gray-600">持続期間：{retention}</p>}
    </div>
  )
}
