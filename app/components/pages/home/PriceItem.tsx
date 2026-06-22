import type { FC } from 'hono/jsx'

type Props = {
  name: string
  price: string
  note?: string
}

const PAREN = /[（(][^）)]*[）)]/g

// 名前から（…）/(…)を抜き出し、本体と括弧部分に分ける
const splitParens = (text: string) => {
  const parens = text.match(PAREN) ?? []
  const main = text.replace(PAREN, '').replace(/\s+/g, ' ').trim()
  return { main, parens }
}

export const PriceItem: FC<Props> = ({ name, price, note }) => {
  const { main, parens } = splitParens(name)
  // 名前内の括弧・note をまとめて名前の下の小さい行に置き、名前行の折り返しを防ぐ
  const below = [...parens, note].filter(Boolean).join(' ')
  return (
    <div class="md:border-b md:border-gray-400 md:pb-2">
      <div class="flex items-baseline gap-2 justify-between">
        <span class="text-gray-700">{main}</span>
        <span class="flex-1 border-b border-dotted border-gray-300 mx-2 md:hidden"></span>
        <span class="font-semibold text-brand-strong whitespace-nowrap">{price}</span>
      </div>
      {below && <p class="text-xs text-gray-500 mt-0.5">{below}</p>}
    </div>
  )
}
