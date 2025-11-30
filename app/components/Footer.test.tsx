/**
 * Footer コンポーネントの振る舞いテスト
 *
 * JSTQBテスト設計技法に基づく:
 * - 同値分割: showFullInfo の true/false
 * - 境界値分析: デフォルト値の確認
 */
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

// Hono JSXをHTMLに変換するヘルパー
const renderToString = (component: any): string => {
  return component.toString()
}

describe('Footer コンポーネント', () => {
  describe('シンプルFooter (showFullInfo=false)', () => {
    /**
     * テストケース: TC-FTR-001
     * 目的: シンプルFooterはコピーライトのみ表示
     * 期待結果: Copyright テキストが含まれる
     */
    it('コピーライトが表示される', () => {
      const html = renderToString(Footer({ showFullInfo: false }))

      expect(html).toContain('Copyright')
      expect(html).toContain('美容室success')
    })

    /**
     * テストケース: TC-FTR-002
     * 目的: シンプルFooterには住所が表示されない
     * 期待結果: 住所情報が含まれない
     */
    it('住所が表示されない', () => {
      const html = renderToString(Footer({ showFullInfo: false }))

      expect(html).not.toContain('茨城県鹿嶋市')
      expect(html).not.toContain('〒314-0042')
    })

    /**
     * テストケース: TC-FTR-003
     * 目的: シンプルFooterには電話番号が表示されない
     * 期待結果: 電話番号が含まれない
     */
    it('電話番号が表示されない', () => {
      const html = renderToString(Footer({ showFullInfo: false }))

      expect(html).not.toContain('TEL:')
      expect(html).not.toContain('0299-69-7700')
    })

    /**
     * テストケース: TC-FTR-004
     * 目的: シンプルFooterには店舗名見出しが表示されない
     * 期待結果: h2タグの店舗名が含まれない
     */
    it('店舗名見出しが表示されない', () => {
      const html = renderToString(Footer({ showFullInfo: false }))

      expect(html).not.toContain('<h2')
      expect(html).not.toContain('美容室SUCCESS')
    })
  })

  describe('詳細Footer (showFullInfo=true)', () => {
    /**
     * テストケース: TC-FTR-005
     * 目的: 詳細Footerはコピーライトが表示される
     * 期待結果: Copyright テキストが含まれる
     */
    it('コピーライトが表示される', () => {
      const html = renderToString(Footer({ showFullInfo: true }))

      expect(html).toContain('Copyright')
      expect(html).toContain('美容室success')
    })

    /**
     * テストケース: TC-FTR-006
     * 目的: 詳細Footerは店舗名見出しが表示される
     * 期待結果: 「美容室SUCCESS」がh2タグで表示
     */
    it('店舗名見出しが表示される', () => {
      const html = renderToString(Footer({ showFullInfo: true }))

      expect(html).toContain('<h2')
      expect(html).toContain('美容室SUCCESS')
    })

    /**
     * テストケース: TC-FTR-007
     * 目的: 詳細Footerは住所が表示される
     * 期待結果: 郵便番号と住所が含まれる
     */
    it('住所が表示される', () => {
      const html = renderToString(Footer({ showFullInfo: true }))

      expect(html).toContain('〒314-0042')
      expect(html).toContain('茨城県鹿嶋市小山1072-88')
    })

    /**
     * テストケース: TC-FTR-008
     * 目的: 詳細Footerは電話番号が表示される
     * 期待結果: 電話番号が含まれる
     */
    it('電話番号が表示される', () => {
      const html = renderToString(Footer({ showFullInfo: true }))

      expect(html).toContain('TEL: 0299-69-7700')
    })
  })

  describe('デフォルト値', () => {
    /**
     * テストケース: TC-FTR-009
     * 目的: showFullInfo のデフォルト値は false
     * 期待結果: 未指定時はシンプルFooterが表示される
     */
    it('showFullInfo デフォルトは false（シンプルFooter）', () => {
      const html = renderToString(Footer({}))

      // シンプルFooterの特徴を確認
      expect(html).toContain('Copyright')
      expect(html).not.toContain('茨城県鹿嶋市')
      expect(html).not.toContain('TEL:')
    })
  })

  describe('共通要素', () => {
    /**
     * テストケース: TC-FTR-010
     * 目的: 両方のFooterでfooterタグが使用される
     * 期待結果: <footer>タグが存在
     */
    it('footerタグが使用される（シンプル）', () => {
      const html = renderToString(Footer({ showFullInfo: false }))

      expect(html).toContain('<footer')
      expect(html).toContain('</footer>')
    })

    it('footerタグが使用される（詳細）', () => {
      const html = renderToString(Footer({ showFullInfo: true }))

      expect(html).toContain('<footer')
      expect(html).toContain('</footer>')
    })

    /**
     * テストケース: TC-FTR-011
     * 目的: 両方のFooterで同じ背景色が使用される
     * 期待結果: bg-gray-900 クラスが存在
     */
    it('背景色 bg-gray-900 が適用される', () => {
      const htmlSimple = renderToString(Footer({ showFullInfo: false }))
      const htmlFull = renderToString(Footer({ showFullInfo: true }))

      expect(htmlSimple).toContain('bg-gray-900')
      expect(htmlFull).toContain('bg-gray-900')
    })

    /**
     * テストケース: TC-FTR-012
     * 目的: 両方のFooterでテキスト色が白
     * 期待結果: text-white クラスが存在
     */
    it('テキスト色 text-white が適用される', () => {
      const htmlSimple = renderToString(Footer({ showFullInfo: false }))
      const htmlFull = renderToString(Footer({ showFullInfo: true }))

      expect(htmlSimple).toContain('text-white')
      expect(htmlFull).toContain('text-white')
    })
  })
})
