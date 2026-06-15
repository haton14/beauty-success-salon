import { describe, expect, it } from 'vitest'
import { render } from '../../test-utils'
import { CTA } from './CTA'

describe('予約誘導セクション', () => {
  describe('訪問者が予約方法を確認できる', () => {
    it('電話番号をタップすると電話発信できる', () => {
      const html = render(CTA({}))

      expect(html).toContain('href="tel:0299697700"')
      expect(html).toContain('0299-69-7700')
    })

    it('LINEボタンをタップするとLINE予約ページが新しいタブで開く', () => {
      const html = render(CTA({}))

      expect(html).toContain('https://lin.ee/')
      expect(html).toContain('LINEから予約')
      expect(html).toContain('target="_blank"')
    })
  })

  describe('ページに応じて見出しをカスタマイズできる', () => {
    it('指定がなければ「ご予約・お問い合わせ」と表示される', () => {
      const html = render(CTA({}))

      expect(html).toContain('ご予約・お問い合わせ')
    })

    it('ページに合わせた見出しを設定できる', () => {
      const html = render(CTA({ title: 'まずはお気軽にご相談ください' }))

      expect(html).toContain('まずはお気軽にご相談ください')
    })

    it('補足説明を追加できる', () => {
      const html = render(CTA({ subtitle: '※ご予約の際は「sins希望」とお伝えください' }))

      expect(html).toContain('※ご予約の際は「sins希望」とお伝えください')
    })

    it('補足説明がなければ余計な要素は表示されない', () => {
      const html = render(CTA({}))

      expect(html).not.toContain('class="text-gray-700 mb-8"')
    })
  })

  describe('デザインに応じて背景色を変更できる', () => {
    it('指定がなければ薄い青色で表示される', () => {
      const html = render(CTA({}))

      expect(html).toContain('bg-blue-50')
    })

    it('ページのデザインに合わせた背景色を設定できる', () => {
      const html = render(CTA({ bgColor: 'bg-pink-50' }))

      expect(html).toContain('bg-pink-50')
      expect(html).not.toContain('bg-blue-50')
    })
  })
})
