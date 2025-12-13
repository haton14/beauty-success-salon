import type { FC } from 'hono/jsx'
import { Card } from '../../common/Card'

type Props = {
  question: string
  answer: string
}

export const FAQItem: FC<Props> = ({ question, answer }) => {
  return (
    <Card>
      <div>
        <div class="flex items-start mb-3">
          <div class="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">Q</div>
          <h4 class="font-bold text-lg flex-1">{question}</h4>
        </div>
        <div class="flex items-start">
          <div class="bg-secondary-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">A</div>
          <p class="text-gray-700 flex-1">{answer}</p>
        </div>
      </div>
    </Card>
  )
}
