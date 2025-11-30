/**
 * Layout コンポーネントの振る舞いテスト
 *
 * JSTQBテスト設計技法に基づく:
 * - 同値分割: showFullFooter の true/false
 * - 決定表: currentPage と showFullFooter の組み合わせ
 */
import { describe, it, expect } from 'vitest'
import { Layout } from './Layout'

// Hono JSXをHTMLに変換するヘルパー
const renderToString = (component: any): string => {
  return component.toString()
}

describe('Layout コンポーネント', () => {
  describe('基本構造', () => {
    /**
     * テストケース: TC-LAY-001
     * 目的: Layoutが必要な子コンポーネントを含む
     * 期待結果: Header, Footer が出力に含まれる
     * 注: MobileMenuはislandコンポーネントのため、SSR時は関数呼び出しとして展開される
     */
    it('Header, Footer が含まれる', () => {
      const html = renderToString(
        Layout({
          children: '<main>テスト</main>',
        })
      )

      // Header
      expect(html).toContain('<header')
      expect(html).toContain('美容室success')

      // Footer
      expect(html).toContain('<footer')
    })

    /**
     * テストケース: TC-LAY-002
     * 目的: children が正しく表示される
     * 期待結果: 渡された children が出力に含まれる
     */
    it('children が表示される', () => {
      const html = renderToString(
        Layout({
          children: '<div id="test-content">テストコンテンツ</div>',
        })
      )

      expect(html).toContain('test-content')
      expect(html).toContain('テストコンテンツ')
    })
  })

  describe('currentPage の伝播', () => {
    /**
     * テストケース: TC-LAY-003
     * 目的: currentPage が Header に正しく渡される
     * 期待結果: Header内で該当ページがハイライトされる
     */
    it('currentPage が Header に渡され、該当リンクがハイライトされる', () => {
      const html = renderToString(
        Layout({
          children: '<main>sins page</main>',
          currentPage: 'sins',
        })
      )

      // sins ページがアクティブとしてハイライトされる
      expect(html).toContain('text-blue-800 font-bold border-b-2 border-blue-800')
    })

    /**
     * テストケース: TC-LAY-004
     * 目的: currentPage が指定されない場合はトップページ表示
     * 期待結果: 「私たちについて」「メニュー」リンクが表示される
     */
    it('currentPage 未指定時はトップページ用のナビゲーションが表示される', () => {
      const html = renderToString(
        Layout({
          children: '<main>トップ</main>',
        })
      )

      expect(html).toContain('href="#concept"')
      expect(html).toContain('href="#menu"')
    })
  })

  describe('Footer の表示モード', () => {
    /**
     * テストケース: TC-LAY-005
     * 目的: showFullFooter=true の場合、詳細情報付きFooterが表示される
     * 期待結果: 住所や電話番号などの詳細情報が含まれる
     */
    it('showFullFooter=true で詳細Footer表示', () => {
      const html = renderToString(
        Layout({
          children: '<main>content</main>',
          showFullFooter: true,
        })
      )

      expect(html).toContain('茨城県鹿嶋市')
      expect(html).toContain('0299-69-7700')
    })

    /**
     * テストケース: TC-LAY-006
     * 目的: showFullFooter=false (デフォルト) の場合、シンプルFooterが表示される
     * 期待結果: コピーライトのみのシンプルなFooter
     */
    it('showFullFooter=false でシンプルFooter表示', () => {
      const html = renderToString(
        Layout({
          children: '<main>content</main>',
          showFullFooter: false,
        })
      )

      expect(html).toContain('Copyright')
      // シンプル版では住所は表示されない（Footerの実装による）
    })

    /**
     * テストケース: TC-LAY-007
     * 目的: showFullFooter デフォルト値は false
     * 期待結果: 未指定時はシンプルFooter
     */
    it('showFullFooter デフォルトは false', () => {
      const htmlDefault = renderToString(
        Layout({
          children: '<main>content</main>',
        })
      )

      // デフォルトはシンプルFooter（住所なし）
      expect(htmlDefault).toContain('Copyright')
      // 詳細情報は表示されない
      expect(htmlDefault).not.toContain('〒314-0042')
    })
  })

  describe('決定表テスト: currentPage × showFullFooter', () => {
    /**
     * テストケース: TC-LAY-008
     * 決定表:
     * | currentPage | showFullFooter | 期待結果 |
     * |-------------|----------------|----------|
     * | undefined   | false          | トップナビ + シンプルFooter |
     * | undefined   | true           | トップナビ + 詳細Footer |
     * | 'sins'      | false          | サブナビ + シンプルFooter |
     * | 'sins'      | true           | サブナビ + 詳細Footer |
     */
    it('トップページ + シンプルFooter', () => {
      const html = renderToString(
        Layout({ children: '<main/>', showFullFooter: false })
      )

      expect(html).toContain('href="#concept"')
      expect(html).toContain('Copyright')
    })

    it('トップページ + 詳細Footer', () => {
      const html = renderToString(
        Layout({ children: '<main/>', showFullFooter: true })
      )

      expect(html).toContain('href="#concept"')
      expect(html).toContain('茨城県鹿嶋市')
    })

    it('サブページ + シンプルFooter', () => {
      const html = renderToString(
        Layout({ children: '<main/>', currentPage: 'sins', showFullFooter: false })
      )

      expect(html).toContain('>トップ<')
      expect(html).toContain('Copyright')
    })

    it('サブページ + 詳細Footer', () => {
      const html = renderToString(
        Layout({ children: '<main/>', currentPage: 'sins', showFullFooter: true })
      )

      expect(html).toContain('>トップ<')
      expect(html).toContain('茨城県鹿嶋市')
    })
  })
})
