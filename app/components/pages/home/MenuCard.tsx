import type { FC, Child } from 'hono/jsx'
import { Button } from '../../common/Button'
import { Card } from '../../common/Card'

type Props = {
  title: string
  children: Child
  note?: string
  linkHref?: string
  linkText?: string
}

export const MenuCard: FC<Props> = ({ title, children, note, linkHref, linkText }) => {
  return (
    <Card padding="lg">
      <h4 class="text-heading-3 mb-6 text-primary-900 border-b-2 border-primary-200 pb-3">{title}</h4>
      <div class="grid md:grid-cols-2 gap-x-8 gap-y-4">
        {children}
      </div>
      {note && <p class="text-sm text-gray-500 mt-3">{note}</p>}
      {linkHref && linkText && (
        <div class="mt-4">
          <Button href={linkHref} size="sm">
            {linkText}
          </Button>
        </div>
      )}
    </Card>
  )
}
