import type { FC } from 'hono/jsx'
import { getImageUrl } from '../../utils'

type Props = {
  file: string
  alt: string
  width: number
  height: number
  /** ファーストビュー内の画像のみ true（遅延読み込みを無効化） */
  eager?: boolean
  className?: string
}

// width / height 指定によるCLS対策と遅延読み込みを一括適用する共通画像コンポーネント
export const SalonImage: FC<Props> = ({
  file,
  alt,
  width,
  height,
  eager = false,
  className = 'w-full object-cover',
}) => {
  return (
    <img
      src={getImageUrl(file)}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? undefined : 'lazy'}
      // ファーストビュー画像はLCP候補。優先取得でLCPを早める
      fetchPriority={eager ? 'high' : undefined}
      decoding="async"
      class={className}
    />
  )
}
