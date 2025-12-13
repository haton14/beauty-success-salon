import { describe, it, expect } from 'vitest'
import { PageHeader } from './PageHeader'

const render = (component: any): string => component.toString()

describe('ページヘッダー', () => {
  describe('訪問者がページタイトルを確認できる', () => {
    it('タイトルが表示される', () => {
      const html = render(PageHeader({
        title: 'パーマ'
      }))

      expect(html).toContain('パーマ')
      expect(html).toContain('<h1')
    })

    it('サブタイトルが表示される', () => {
      const html = render(PageHeader({
        title: 'パーマ',
        subtitle: '理想のカールやウェーブを実現'
      }))

      expect(html).toContain('理想のカールやウェーブを実現')
    })

    it('サブタイトルが指定されなければ表示されない', () => {
      const html = render(PageHeader({
        title: 'パーマ'
      }))

      expect(html).not.toContain('<p')
    })
  })

  describe('アンダーラインの表示を切り替えられる', () => {
    it('アンダーラインを表示できる', () => {
      const html = render(PageHeader({
        title: 'パーマ',
        showUnderline: true
      }))

      expect(html).toContain('w-24')
      expect(html).toContain('h-1')
      expect(html).toContain('bg-blue-800')
    })

    it('指定がなければアンダーラインは表示されない', () => {
      const html = render(PageHeader({
        title: 'パーマ'
      }))

      expect(html).not.toContain('w-24')
    })
  })

  describe('背景グラデーションをカスタマイズできる', () => {
    it('指定されたグラデーションが適用される', () => {
      const html = render(PageHeader({
        title: 'パーマ',
        bgGradient: 'from-pink-50 to-white'
      }))

      expect(html).toContain('from-pink-50')
      expect(html).toContain('to-white')
    })

    it('指定がなければデフォルトのグラデーションが適用される', () => {
      const html = render(PageHeader({
        title: 'パーマ'
      }))

      expect(html).toContain('from-gray-50')
      expect(html).toContain('to-white')
    })
  })

  describe('レイアウトが統一される', () => {
    it('中央寄せで表示される', () => {
      const html = render(PageHeader({
        title: 'パーマ'
      }))

      expect(html).toContain('text-center')
    })

    it('グラデーション背景が適用される', () => {
      const html = render(PageHeader({
        title: 'パーマ'
      }))

      expect(html).toContain('bg-gradient-to')
    })

    it('セクションとして表示される', () => {
      const html = render(PageHeader({
        title: 'パーマ'
      }))

      expect(html).toContain('<section')
    })
  })
})
