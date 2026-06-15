import { describe, expect, it } from 'vitest'
import { render } from '../../test-utils'
import { PriceRow } from './PriceRow'

describe('料金行', () => {
  describe('訪問者がメニューと料金を確認できる', () => {
    it('メニュー名が表示される', () => {
      const html = render(
        PriceRow({
          label: 'パーマ',
          price: '¥8,800〜',
        })
      )

      expect(html).toContain('パーマ')
    })

    it('料金が表示される', () => {
      const html = render(
        PriceRow({
          label: 'パーマ',
          price: '¥8,800〜',
        })
      )

      expect(html).toContain('¥8,800〜')
    })
  })

  describe('料金の色をカスタマイズできる', () => {
    it('指定された色が適用される', () => {
      const html = render(
        PriceRow({
          label: 'パーマ',
          price: '¥8,800〜',
          priceColor: 'text-purple-900',
        })
      )

      expect(html).toContain('text-purple-900')
    })

    it('指定がなければデフォルトの色が適用される', () => {
      const html = render(
        PriceRow({
          label: 'パーマ',
          price: '¥8,800〜',
        })
      )

      expect(html).toContain('text-blue-900')
    })
  })

  describe('表示スタイルを切り替えられる', () => {
    it('roundedスタイルで背景付きで表示される', () => {
      const html = render(
        PriceRow({
          label: 'パーマ',
          price: '¥8,800〜',
          variant: 'rounded',
        })
      )

      expect(html).toContain('bg-gray-50')
      expect(html).toContain('rounded-lg')
    })

    it('borderスタイルで下線付きで表示される', () => {
      const html = render(
        PriceRow({
          label: 'パーマ',
          price: '¥8,800〜',
          variant: 'border',
        })
      )

      expect(html).toContain('border-b')
    })

    it('指定がなければroundedスタイルになる', () => {
      const html = render(
        PriceRow({
          label: 'パーマ',
          price: '¥8,800〜',
        })
      )

      expect(html).toContain('rounded-lg')
    })
  })

  describe('レイアウトが統一される', () => {
    it('メニュー名と料金が両端に配置される', () => {
      const html = render(
        PriceRow({
          label: 'パーマ',
          price: '¥8,800〜',
        })
      )

      expect(html).toContain('flex')
      expect(html).toContain('justify-between')
    })

    it('料金が太字で表示される', () => {
      const html = render(
        PriceRow({
          label: 'パーマ',
          price: '¥8,800〜',
        })
      )

      expect(html).toContain('font-bold')
    })
  })
})
