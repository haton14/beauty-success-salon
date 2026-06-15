import type { Child, FC } from 'hono/jsx'

type HeadingLevel = 1 | 2 | 3 | 4

type Props = {
  level?: HeadingLevel
  children: Child
  className?: string
  centered?: boolean
}

const levelStyles: Record<HeadingLevel, string> = {
  1: 'text-heading-1 text-gray-800', // 36px - ページタイトル
  2: 'text-heading-2 text-gray-800', // 30px - セクションタイトル
  3: 'text-heading-3 text-gray-800', // 24px - カードタイトル
  4: 'text-heading-4 text-gray-800', // 20px - サブセクション
}

export const Heading: FC<Props> = ({ level = 2, children, className = '', centered = false }) => {
  const baseStyles = centered ? 'text-center' : ''
  const combinedClass = `${levelStyles[level]} ${baseStyles} ${className}`.trim()

  switch (level) {
    case 1:
      return <h1 class={combinedClass}>{children}</h1>
    case 2:
      return <h2 class={combinedClass}>{children}</h2>
    case 3:
      return <h3 class={combinedClass}>{children}</h3>
    case 4:
      return <h4 class={combinedClass}>{children}</h4>
  }
}

// セクションヘッダー（タイトル + サブタイトル + 下線）
type SectionHeaderProps = {
  title: string
  subtitle?: string
  className?: string
}

export const SectionHeader: FC<SectionHeaderProps> = ({ title, subtitle, className = '' }) => {
  return (
    <div class={`text-center mb-16 ${className}`}>
      <h2 class="text-heading-2 text-gray-800 mb-4">{title}</h2>
      {subtitle && <p class="text-lg text-gray-600 mb-4">{subtitle}</p>}
      <div class="w-24 h-1 bg-primary-800 mx-auto"></div>
    </div>
  )
}
