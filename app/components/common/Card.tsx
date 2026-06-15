import type { Child, FC } from 'hono/jsx'

type CardVariant = 'default' | 'featured'
type CardPadding = 'sm' | 'md' | 'lg'

type Props = {
  children: Child
  variant?: CardVariant
  padding?: CardPadding
  className?: string
}

const variantStyles: Record<CardVariant, string> = {
  default: 'bg-white rounded-2xl shadow-lg',
  featured: 'bg-white rounded-3xl shadow-xl',
}

const paddingStyles: Record<CardPadding, string> = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export const Card: FC<Props> = ({ children, variant = 'default', padding = 'md', className = '' }) => {
  return <div class={`${variantStyles[variant]} ${paddingStyles[padding]} ${className}`}>{children}</div>
}
