import type { FC } from 'hono/jsx'
import { Button } from '../../common/Button'

export const HeroButtons: FC = () => {
  return (
    <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
      <Button href="#sins" variant="primary" size="lg" className="whitespace-nowrap">
        sins 酸性ストレートについて
      </Button>
      <Button href="#contact" variant="secondary" size="lg" className="whitespace-nowrap">
        ご予約はこちら
      </Button>
    </div>
  )
}
