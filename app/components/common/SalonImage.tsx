import type { FC } from 'hono/jsx'
import { getImageUrl } from '../../utils'

type Props = {
  file: string
  alt: string
  width: number
  height: number
  /** ファーストビュー内の画像のみ true（遅延読み込みを無効化） */
  eager?: boolean
  /**
   * LCP候補の1枚のみ true（fetchPriority="high"）。
   * 既定では eager に追従するが、ファーストビューに複数枚ある場合は
   * 真のLCP以外を priority={false} にして優先度の競合を避ける。
   */
  priority?: boolean
  className?: string
}

// width / height 指定によるCLS対策と遅延読み込みを一括適用する共通画像コンポーネント
export const SalonImage: FC<Props> = ({
  file,
  alt,
  width,
  height,
  eager = false,
  priority = eager,
  className = 'w-full object-cover',
}) => {
  return (
    <img
      src={getImageUrl(file)}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? undefined : 'lazy'}
      // LCP候補は優先取得でLCPを早める。複数highは競合するため1枚に絞る
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      class={className}
    />
  )
}
