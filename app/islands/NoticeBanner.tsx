import { useEffect, useState } from 'hono/jsx'
import type { Notice } from '../types'

/**
 * お知らせバナー（臨時休業など）。
 * マーケHTMLはエッジキャッシュされるため、サーバー埋め込みだと最大1時間古くなる。
 * 緊急性を担保するためクライアントから /api/notice（no-store）を取得して表示する。
 * お知らせが無い日は何も描画しないので、通常時のレイアウトには一切影響しない。
 */
export default function NoticeBanner() {
  const [notice, setNotice] = useState<Notice | null>(null)

  useEffect(() => {
    let aborted = false
    fetch('/api/notice')
      .then((res) => (res.ok ? (res.json() as Promise<{ notice: Notice | null }>) : null))
      .then((data) => {
        const fetched = data?.notice
        if (aborted || !fetched) return
        setNotice(fetched)
      })
      .catch(() => {
        // 取得失敗時はバナーを出さない（サイト本体の表示は妨げない）
      })
    return () => {
      aborted = true
    }
  }, [])

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
