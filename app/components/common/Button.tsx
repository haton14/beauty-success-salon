import type { FC, Child } from 'hono/jsx'

type ButtonVariant = 'primary' | 'secondary' | 'line'
type ButtonSize = 'sm' | 'md' | 'lg'

type Props = {
  href: string
  variant?: ButtonVariant
  size?: ButtonSize
  children: Child
  className?: string
  target?: '_blank'
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-gradient-to-b from-blue-600 to-blue-700 text-white border border-blue-800 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl',
  secondary: 'bg-white text-blue-800 border-2 border-blue-800 hover:bg-blue-50 shadow-md hover:shadow-lg',
  line: 'bg-gradient-to-b from-green-500 to-green-600 text-white border border-green-700 hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-6 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export const Button: FC<Props> = ({
  href,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  target,
}) => {
  const baseStyles = 'inline-block rounded-full font-bold transition-all duration-200 transform hover:-translate-y-0.5 text-center'

  return (
    <a
      href={href}
      target={target}
      class={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </a>
  )
}

// 電話ボタン用（角丸がrounded-xl）
export const PhoneButton: FC<Omit<Props, 'variant'> & { variant?: 'primary' | 'line' }> = ({
  href,
  variant = 'primary',
  size = 'lg',
  children,
  className = '',
  target,
}) => {
  const baseStyles = 'inline-block rounded-xl font-bold transition-all duration-200 transform hover:-translate-y-0.5 text-center'

  return (
    <a
      href={href}
      target={target}
      class={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </a>
  )
}
