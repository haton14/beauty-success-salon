import type { FC } from 'hono/jsx'

type Props = {
  label: string
  price: string
  priceColor?: string
  variant?: 'rounded' | 'border'
}

export const PriceRow: FC<Props> = ({ label, price, priceColor = 'text-brand-strong', variant = 'rounded' }) => {
  const baseClass = 'flex flex-col items-start gap-1 sm:flex-row sm:justify-between sm:items-center p-3'
  const variantClass = variant === 'rounded' ? 'bg-gray-50 rounded-lg' : 'pb-3 border-b'

  return (
    <div class={`${baseClass} ${variantClass}`}>
      <span class="text-gray-700 font-medium">{label}</span>
      <span class={`font-bold text-xl ${priceColor}`}>{price}</span>
    </div>
  )
}
