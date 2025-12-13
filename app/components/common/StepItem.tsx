import type { FC } from 'hono/jsx'

type Props = {
  step: number
  title: string
  description: string
  bgColor?: string
}

export const StepItem: FC<Props> = ({ step, title, description, bgColor = 'bg-pink-600' }) => {
  return (
    <div class="flex items-start gap-4">
      <div class={`w-10 h-10 ${bgColor} text-white rounded-full flex items-center justify-center font-bold flex-shrink-0`}>
        {step}
      </div>
      <div>
        <h3 class="text-lg font-bold mb-1">{title}</h3>
        <p class="text-gray-700">{description}</p>
      </div>
    </div>
  )
}
