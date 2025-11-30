/**
 * CTA コンポーネントの振る舞いテスト
 *
 * JSTQBテスト設計技法に基づく:
 * - 同値分割: 各propsの有無
 * - デフォルト値のテスト
 */
import { describe, it, expect } from 'vitest'
import { CTA } from './CTA'

// Hono JSXをHTMLに変換するヘルパー
const renderToString = (component: any): string => {
  return component.toString()
}

describe('CTA コンポーネント', () => {
  describe('デフォルト表示', () => {
    /**
     * テストケース: TC-CTA-001
     * 目的: デフォルトのタイトルが表示される
     * 期待結果: 「ご予約・お問い合わせ」が表示される
     */
    it('デフォルトタイトル「ご予約・お問い合わせ」が表示される', () => {
      const html = renderToString(CTA({}))

      expect(html).toContain('ご予約・お問い合わせ')
    })

    /**
     * テストケース: TC-CTA-002
     * 目的: デフォルトの背景色が適用される
     * 期待結果: bg-blue-50 クラスが含まれる
     */
    it('デフォルト背景色 bg-blue-50 が適用される', () => {
      const html = renderToString(CTA({}))

      expect(html).toContain('bg-blue-50')
    })

    /**
     * テストケース: TC-CTA-003
     * 目的: 電話番号リンクが表示される
     * 期待結果: tel:0299697700 へのリンクと表示テキスト
     */
    it('電話番号リンクが表示される', () => {
      const html = renderToString(CTA({}))

      expect(html).toContain('href="tel:0299697700"')
      expect(html).toContain('0299-69-7700')
    })

    /**
     * テストケース: TC-CTA-004
     * 目的: LINE予約リンクが表示される
     * 期待結果: LINEへのリンクと「LINEから予約」テキスト
     */
    it('LINE予約リンクが表示される', () => {
      const html = renderToString(CTA({}))

      expect(html).toContain('https://lin.ee/')
      expect(html).toContain('LINEから予約')
    })
  })

  describe('カスタムprops', () => {
    /**
     * テストケース: TC-CTA-005
     * 目的: カスタムタイトルが表示される
     * 期待結果: 渡したtitleが表示される
     */
    it('カスタムタイトルが表示される', () => {
      const html = renderToString(CTA({ title: 'お気軽にご相談ください' }))

      expect(html).toContain('お気軽にご相談ください')
    })

    /**
     * テストケース: TC-CTA-006
     * 目的: サブタイトルが表示される
     * 期待結果: 渡したsubtitleが表示される
     */
    it('サブタイトルが表示される', () => {
      const html = renderToString(CTA({ subtitle: '※ご予約の際は「sins希望」とお伝えください' }))

      expect(html).toContain('※ご予約の際は「sins希望」とお伝えください')
    })

    /**
     * テストケース: TC-CTA-007
     * 目的: サブタイトルが未指定の場合は表示されない
     * 期待結果: subtitle用の要素が存在しない（または空）
     */
    it('サブタイトル未指定時は表示されない', () => {
      const html = renderToString(CTA({}))

      // デフォルトではsubtitleがないので、subtitle用のpタグは表示されない
      // 具体的には subtitle && の条件で表示されるため
      expect(html).not.toContain('class="text-gray-700 mb-8"')
    })

    /**
     * テストケース: TC-CTA-008
     * 目的: カスタム背景色が適用される
     * 期待結果: 渡したbgColorが適用される
     */
    it('カスタム背景色が適用される', () => {
      const html = renderToString(CTA({ bgColor: 'bg-pink-50' }))

      expect(html).toContain('bg-pink-50')
    })

    /**
     * テストケース: TC-CTA-009
     * 目的: カスタム背景色が適用されるとデフォルト色は使われない
     * 期待結果: bg-blue-50 は含まれない
     */
    it('カスタム背景色適用時はデフォルト色は使われない', () => {
      const html = renderToString(CTA({ bgColor: 'bg-purple-50' }))

      expect(html).toContain('bg-purple-50')
      // セクションのbgColorにはデフォルトが使われない
      expect(html).not.toContain('py-16 bg-blue-50')
    })
  })

  describe('リンクのアクセシビリティ', () => {
    /**
     * テストケース: TC-CTA-010
     * 目的: LINEリンクは新しいタブで開く
     * 期待結果: target="_blank" が設定されている
     */
    it('LINEリンクは新しいタブで開く', () => {
      const html = renderToString(CTA({}))

      expect(html).toContain('target="_blank"')
    })
  })

  describe('決定表テスト: props組み合わせ', () => {
    /**
     * 決定表:
     * | title    | subtitle | bgColor  | 期待結果 |
     * |----------|----------|----------|----------|
     * | default  | なし     | default  | デフォルト表示 |
     * | custom   | あり     | custom   | 全カスタム表示 |
     * | default  | あり     | default  | subtitleのみ追加 |
     * | custom   | なし     | custom   | title+bgColorカスタム |
     */
    it('全カスタム: title + subtitle + bgColor', () => {
      const html = renderToString(
        CTA({
          title: 'カスタムタイトル',
          subtitle: 'カスタムサブタイトル',
          bgColor: 'bg-green-50',
        })
      )

      expect(html).toContain('カスタムタイトル')
      expect(html).toContain('カスタムサブタイトル')
      expect(html).toContain('bg-green-50')
    })

    it('subtitleのみ追加', () => {
      const html = renderToString(CTA({ subtitle: 'サブのみ' }))

      expect(html).toContain('ご予約・お問い合わせ') // デフォルトtitle
      expect(html).toContain('サブのみ')
      expect(html).toContain('bg-blue-50') // デフォルトbgColor
    })
  })
})
