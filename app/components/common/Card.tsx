import type { FC, Child } from 'hono/jsx'

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

export const Card: FC<Props> = ({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
}) => {
  return (
    <div class={`${variantStyles[variant]} ${paddingStyles[padding]} ${className}`}>
      {children}
    </div>
  )
}

// セクションコンテナ用
type SectionProps = {
  children: Child
  id?: string
  bgColor?: 'white' | 'gray' | 'primary-light'
  padding?: 'default' | 'small'
  className?: string
}

const bgColorStyles: Record<string, string> = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  'primary-light': 'bg-primary-50',
}

export const Section: FC<SectionProps> = ({
  children,
  id,
  bgColor = 'white',
  padding = 'default',
  className = '',
}) => {
  const paddingClass = padding === 'default' ? 'py-section' : 'py-section-sm'

  return (
    <section id={id} class={`${paddingClass} ${bgColorStyles[bgColor]} ${className}`}>
      <div class="container mx-auto px-4">
        {children}
      </div>
    </section>
  )
}
