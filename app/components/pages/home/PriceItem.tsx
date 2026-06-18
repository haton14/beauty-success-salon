import type { FC } from 'hono/jsx'

type Props = {
  name: string
  price: string
  note?: string
}

// 名前に含まれる（…）/(…)を小さい文字で表示する（例: カラーのみ（全体）→ （全体）を小さく）
const withSmallParens = (text: string) =>
  text.split(/([（(][^）)]*[）)])/).map((part, i) =>
    /^[（(].*[）)]$/.test(part) ? (
      <span key={i} class="text-xs text-gray-500">
        {part}
      </span>
    ) : (
      part
    )
  )

export const PriceItem: FC<Props> = ({ name, price, note }) => {
  return (
    <div class="flex items-baseline gap-2 md:justify-between md:border-b md:border-gray-400 md:pb-2">
      <span class="text-gray-700">
        {withSmallParens(name)}
        {note && <span class="text-xs text-gray-500">{note}</span>}
      </span>
      <span class="flex-1 border-b border-dotted border-gray-300 mx-2 md:hidden"></span>
      <span class="font-semibold text-blue-900 whitespace-nowrap">{price}</span>
    </div>
  )
}
