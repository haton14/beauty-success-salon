import { describe, expect, it } from 'vitest'
import { render } from '../../../test-utils'
import { PriceItem } from './PriceItem'

describe('料金項目', () => {
  describe('訪問者がメニューと価格を確認できる', () => {
    it('メニュー名が表示される', () => {
      const html = render(PriceItem({ name: 'カット', price: '¥4,400' }))

      expect(html).toContain('カット')
    })

    it('価格が表示される', () => {
      const html = render(PriceItem({ name: 'カット', price: '¥4,400' }))

      expect(html).toContain('¥4,400')
    })

    it('価格が目立つスタイルで表示される', () => {
      const html = render(PriceItem({ name: 'テスト', price: '¥1,000' }))

      expect(html).toContain('font-semibold')
      expect(html).toContain('text-brand-strong')
    })
  })

  describe('補足情報を追加できる', () => {
    it('補足説明が指定されると表示される', () => {
      const html = render(
        PriceItem({
          name: 'カット',
          price: '¥4,400',
          note: '（シャンプー・ブロー込）',
        })
      )

      expect(html).toContain('（シャンプー・ブロー込）')
      expect(html).toContain('text-xs')
    })

    it('補足説明がなければ余計な要素は表示されない', () => {
      const html = render(PriceItem({ name: 'カット', price: '¥4,400' }))

      expect(html).not.toContain('text-xs text-gray-500')
    })
  })

  describe('レスポンシブ対応', () => {
    it('モバイルでは点線で区切られる', () => {
      const html = render(PriceItem({ name: 'テスト', price: '¥1,000' }))

      expect(html).toContain('border-dotted')
      expect(html).toContain('md:hidden')
    })

    it('デスクトップでは下線で区切られる', () => {
      const html = render(PriceItem({ name: 'テスト', price: '¥1,000' }))

      expect(html).toContain('md:border-b')
      expect(html).toContain('md:border-gray-400')
    })
  })

  describe('価格が見切れない', () => {
    it('価格は改行されない', () => {
      const html = render(PriceItem({ name: 'テスト', price: '¥100,000' }))

      expect(html).toContain('whitespace-nowrap')
    })
  })
})
