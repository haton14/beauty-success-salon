import { describe, expect, it } from 'vitest'
import { render } from '../../test-utils'
import { Layout } from './Layout'

describe('ページレイアウト', () => {
  describe('全ページ共通の構造を提供する', () => {
    it('ヘッダーとフッターで囲まれた構造になる', () => {
      const html = render(Layout({ children: '<main>テスト</main>' }))

      expect(html).toContain('<header')
      expect(html).toContain('美容室success')
      expect(html).toContain('<footer')
    })

    it('ページ固有のコンテンツを表示できる', () => {
      const html = render(Layout({ children: '<div id="test-content">テストコンテンツ</div>' }))

      expect(html).toContain('test-content')
      expect(html).toContain('テストコンテンツ')
    })
  })

  describe('訪問者が現在地に応じたナビゲーションを利用できる', () => {
    it('サービスページでは該当リンクが強調される', () => {
      const html = render(Layout({ children: '<main>sins page</main>', currentPage: 'sins' }))

      expect(html).toContain('text-blue-800 font-bold border-b-2 border-blue-800')
    })

    it('トップページではページ内ナビゲーションが表示される', () => {
      const html = render(Layout({ children: '<main>トップ</main>' }))

      expect(html).toContain('href="#concept"')
      expect(html).toContain('href="#menu"')
    })
  })

  describe('訪問者がブラウザ操作に頼らずトップページへ戻れる', () => {
    it('サービスページでは上下2箇所に「トップページに戻る」ボタンが表示される', () => {
      const html = render(Layout({ children: '<main>sins page</main>', currentPage: 'sins' }))

      const matches = html.match(/← トップページに戻る/g)
      expect(matches).toHaveLength(2)
    })

    it('トップページでは「トップページに戻る」ボタンは表示されない', () => {
      const html = render(Layout({ children: '<main>トップ</main>' }))

      expect(html).not.toContain('トップページに戻る')
    })
  })

  describe('ページに応じてフッターの情報量を調整できる', () => {
    it('トップページでは店舗の詳細情報を表示できる', () => {
      const html = render(Layout({ children: '<main>content</main>', showFullFooter: true }))

      expect(html).toContain('茨城県鹿嶋市')
      expect(html).toContain('0299-69-7700')
    })

    it('サービスページではシンプルな著作権表示のみにできる', () => {
      const html = render(Layout({ children: '<main>content</main>', showFullFooter: false }))

      expect(html).toContain('Copyright')
      expect(html).not.toContain('〒311-2222')
    })

    it('指定がなければシンプルなフッターが表示される', () => {
      const html = render(Layout({ children: '<main>content</main>' }))

      expect(html).toContain('Copyright')
      expect(html).not.toContain('〒311-2222')
    })
  })
})
