import type { FC } from 'hono/jsx'
import type { Notice } from '../../types'

type Props = {
  notice: Notice | null
}

/**
 * お知らせバナー（臨時休業など）。
 * サーバー側で表示対象を判定してHTMLに埋め込むため、追加のAPI呼び出しは行わない。
 */
export const NoticeBanner: FC<Props> = ({ notice }) => {
  if (!notice) return null

  return (
    <div role="alert" class="notice-banner bg-amber-100 border-b-2 border-amber-400 text-amber-900">
      <div class="container mx-auto px-4 py-3 flex items-start gap-2.5">
        <span aria-hidden="true" class="shrink-0 mt-px text-lg leading-none">
          ⚠️
        </span>
        <p class="flex-1 text-sm sm:text-base font-semibold leading-relaxed whitespace-pre-line">{notice.message}</p>
      </div>
    </div>
  )
}
