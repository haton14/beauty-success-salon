import { describe, expect, it } from 'vitest'
import { render } from '../../../test-utils'
import { MenuCard } from './MenuCard'

describe('メニューカード', () => {
  describe('訪問者がメニューカテゴリを把握できる', () => {
    it('カテゴリ名が見出しとして表示される', () => {
      const html = render(
        MenuCard({
          title: 'カット',
          children: '<div>内容</div>',
        })
      )

      expect(html).toContain('カット')
      expect(html).toContain('<h4')
    })

    it('見出しが目立つスタイルで表示される', () => {
      const html = render(
        MenuCard({
          title: 'カラー',
          children: '<div>内容</div>',
        })
      )

      expect(html).toContain('text-heading-3')
      expect(html).toContain('text-primary-900')
    })
  })

  describe('メニュー内容を柔軟に表示できる', () => {
    it('子要素が表示される', () => {
      const html = render(
        MenuCard({
          title: 'テスト',
          children: '<div class="test-content">料金一覧</div>',
        })
      )

      expect(html).toContain('test-content')
      expect(html).toContain('料金一覧')
    })
  })

  describe('補足情報を追加できる', () => {
    it('注釈が指定されると表示される', () => {
      const html = render(
        MenuCard({
          title: 'カラー',
          note: '※上記料金はシャンプー・ブロー込み',
          children: '<div>内容</div>',
        })
      )

      expect(html).toContain('※上記料金はシャンプー・ブロー込み')
    })

    it('注釈がなければ余計な要素は表示されない', () => {
      const html = render(
        MenuCard({
          title: 'カット',
          children: '<div>内容</div>',
        })
      )

      expect(html).not.toContain('text-gray-500 mt-3')
    })
  })

  describe('詳細ページへ誘導できる', () => {
    it('リンクが指定されるとボタンが表示される', () => {
      const html = render(
        MenuCard({
          title: 'ストレート',
          linkHref: '/pages/sins',
          linkText: 'sins酸性ストレートを詳しく見る',
          children: '<div>内容</div>',
        })
      )

      expect(html).toContain('href="/pages/sins"')
      expect(html).toContain('sins酸性ストレートを詳しく見る')
    })

    it('リンクがなければボタンは表示されない', () => {
      const html = render(
        MenuCard({
          title: 'カット',
          children: '<div>内容</div>',
        })
      )

      expect(html).not.toContain('<a')
    })
  })

  describe('カードのデザインが統一される', () => {
    it('白背景で角丸のカードスタイルになる', () => {
      const html = render(
        MenuCard({
          title: 'テスト',
          children: '<div>内容</div>',
        })
      )

      expect(html).toContain('bg-white')
      expect(html).toContain('rounded-2xl')
      expect(html).toContain('shadow-lg')
    })
  })
})
