import { describe, it, expect } from 'vitest'
import { SectionHeader } from './SectionHeader'

const render = (component: any): string => component.toString()

describe('セクション見出し', () => {
  describe('訪問者がセクションの内容を把握できる', () => {
    it('タイトルが表示される', () => {
      const html = render(SectionHeader({ title: '私たちについて' }))

      expect(html).toContain('私たちについて')
      expect(html).toContain('<h3')
    })

    it('タイトルが目立つスタイルで表示される', () => {
      const html = render(SectionHeader({ title: 'テスト' }))

      expect(html).toContain('text-3xl')
      expect(html).toContain('font-bold')
    })
  })

  describe('補足説明を追加できる', () => {
    it('サブタイトルが指定されると表示される', () => {
      const html = render(SectionHeader({
        title: 'よくあるご質問',
        subtitle: 'sins酸性ストレートについて'
      }))

      expect(html).toContain('よくあるご質問')
      expect(html).toContain('sins酸性ストレートについて')
    })

    it('サブタイトルがなければ余計な要素は表示されない', () => {
      const html = render(SectionHeader({ title: 'メニュー' }))

      expect(html).not.toContain('<p')
    })
  })

  describe('デザインの統一性が保たれる', () => {
    it('下線のアクセントが表示される', () => {
      const html = render(SectionHeader({ title: 'テスト' }))

      expect(html).toContain('w-24')
      expect(html).toContain('h-1')
      expect(html).toContain('bg-blue-800')
    })

    it('中央揃えでレイアウトされる', () => {
      const html = render(SectionHeader({ title: 'テスト' }))

      expect(html).toContain('text-center')
    })
  })
})
