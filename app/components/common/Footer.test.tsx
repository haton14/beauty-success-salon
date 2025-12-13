import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

const render = (component: any): string => component.toString()

describe('フッター', () => {
  describe('サービスページで表示されるシンプルなフッター', () => {
    it('著作権表示が確認できる', () => {
      const html = render(Footer({ showFullInfo: false }))

      expect(html).toContain('Copyright')
      expect(html).toContain('美容室success')
    })

    it('店舗情報は表示されない', () => {
      const html = render(Footer({ showFullInfo: false }))

      expect(html).not.toContain('茨城県鹿嶋市')
      expect(html).not.toContain('〒314-0042')
      expect(html).not.toContain('TEL:')
      expect(html).not.toContain('0299-69-7700')
    })
  })

  describe('トップページで表示される詳細なフッター', () => {
    it('著作権表示が確認できる', () => {
      const html = render(Footer({ showFullInfo: true }))

      expect(html).toContain('Copyright')
      expect(html).toContain('美容室success')
    })

    it('店舗名が目立つように表示される', () => {
      const html = render(Footer({ showFullInfo: true }))

      expect(html).toContain('<h2')
      expect(html).toContain('美容室success')
    })

    it('訪問者が店舗の場所を確認できる', () => {
      const html = render(Footer({ showFullInfo: true }))

      expect(html).toContain('〒314-0042')
      expect(html).toContain('茨城県鹿嶋市小山1072-88')
    })

    it('訪問者が電話で問い合わせできる', () => {
      const html = render(Footer({ showFullInfo: true }))

      expect(html).toContain('TEL: 0299-69-7700')
    })
  })

  describe('デフォルトではシンプルなフッターが表示される', () => {
    it('指定がなければ店舗情報なしで表示される', () => {
      const html = render(Footer({}))

      expect(html).toContain('Copyright')
      expect(html).not.toContain('茨城県鹿嶋市')
      expect(html).not.toContain('TEL:')
    })
  })
})
