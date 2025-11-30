/**
 * Header コンポーネントの振る舞いテスト
 *
 * JSTQBテスト設計技法に基づく:
 * - 同値分割: currentPage の有無
 * - 決定表: ページ別のナビゲーション表示パターン
 * - 状態遷移: アクティブページのハイライト
 */
import { describe, it, expect } from 'vitest'
import { Header } from './Header'

// Hono JSXをHTMLに変換するヘルパー
const renderToString = (component: any): string => {
  return component.toString()
}

describe('Header コンポーネント', () => {
  describe('トップページ表示時 (currentPage未指定)', () => {
    /**
     * テストケース: TC-HDR-001
     * 目的: トップページでは「私たちについて」「メニュー」リンクが表示される
     * 期待結果: アンカーリンク #concept, #menu が存在する
     */
    it('「私たちについて」と「メニュー」のアンカーリンクが表示される', () => {
      const html = renderToString(Header({}))

      expect(html).toContain('href="#concept"')
      expect(html).toContain('私たちについて')
      expect(html).toContain('href="#menu"')
      expect(html).toContain('メニュー')
    })

    /**
     * テストケース: TC-HDR-002
     * 目的: トップページでは「トップ」リンクが表示されない
     * 期待結果: トップへのリンクテキストが存在しない
     */
    it('「トップ」リンクが表示されない', () => {
      const html = renderToString(Header({}))

      // デスクトップナビ内の「トップ」リンクを確認
      // トップページでは #concept, #menu が表示され、「トップ」は表示されない
      expect(html).not.toContain('>トップ<')
    })

    /**
     * テストケース: TC-HDR-003
     * 目的: ご予約リンクが #contact を指す
     * 期待結果: href="#contact" が存在
     */
    it('ご予約リンクが #contact を指す', () => {
      const html = renderToString(Header({}))

      expect(html).toContain('href="#contact"')
      expect(html).toContain('ご予約')
    })
  })

  describe('サブページ表示時 (currentPage指定)', () => {
    /**
     * テストケース: TC-HDR-004
     * 目的: サブページでは「トップ」リンクが表示される
     * 期待結果: href="/" とテキスト「トップ」が存在
     */
    it('「トップ」リンクが表示される', () => {
      const html = renderToString(Header({ currentPage: 'sins' }))

      expect(html).toContain('href="/"')
      expect(html).toContain('>トップ<')
    })

    /**
     * テストケース: TC-HDR-005
     * 目的: サブページでは「私たちについて」「メニュー」が表示されない
     * 期待結果: #concept, #menu リンクが存在しない
     */
    it('「私たちについて」「メニュー」リンクが表示されない', () => {
      const html = renderToString(Header({ currentPage: 'perm' }))

      expect(html).not.toContain('href="#concept"')
      expect(html).not.toContain('href="#menu"')
    })

    /**
     * テストケース: TC-HDR-006
     * 目的: ご予約リンクが /#contact を指す（トップページへのアンカー）
     * 期待結果: href="/#contact" が存在
     */
    it('ご予約リンクが /#contact を指す', () => {
      const html = renderToString(Header({ currentPage: 'eyelash' }))

      expect(html).toContain('href="/#contact"')
    })
  })

  describe('ナビゲーションリンクの表示', () => {
    /**
     * テストケース: TC-HDR-007
     * 目的: サービスページへのリンクが全て存在する
     * 期待結果: パーマ, sins酸性ストレート, まつ毛, 着付け へのリンクが存在
     */
    it('全サービスページへのリンクが表示される', () => {
      const html = renderToString(Header({}))

      expect(html).toContain('href="/pages/perm"')
      expect(html).toContain('パーマ')
      expect(html).toContain('href="/pages/sins"')
      expect(html).toContain('sins酸性ストレート')
      expect(html).toContain('href="/pages/eyelash"')
      expect(html).toContain('まつ毛')
      expect(html).toContain('href="/pages/kimono"')
      expect(html).toContain('着付け')
    })

    /**
     * テストケース: TC-HDR-008
     * 目的: スタッフページへのリンクが存在する
     * 期待結果: /pages/staff へのリンクとテキスト「スタッフ」が存在
     */
    it('スタッフページへのリンクが表示される', () => {
      const html = renderToString(Header({}))

      expect(html).toContain('href="/pages/staff"')
      expect(html).toContain('スタッフ')
    })
  })

  describe('アクティブページのハイライト表示', () => {
    /**
     * テストケース: TC-HDR-009
     * 目的: 現在のページがハイライトされる（太字・下線）
     * 期待結果: currentPageに対応するリンクに font-bold, border-b-2 クラスが付与
     */
    it('sins ページでは sins リンクがハイライトされる', () => {
      const html = renderToString(Header({ currentPage: 'sins' }))

      // sins リンクがアクティブスタイルを持つことを確認
      expect(html).toContain('text-blue-800 font-bold border-b-2 border-blue-800')
    })

    /**
     * テストケース: TC-HDR-010
     * 目的: perm ページでは perm リンクがハイライトされる
     */
    it('perm ページでは perm リンクがハイライトされる', () => {
      const html = renderToString(Header({ currentPage: 'perm' }))

      // HTMLを解析して perm リンクのスタイルを確認
      const permLinkMatch = html.match(/href="\/pages\/perm"[^>]*class="([^"]*)"/);
      expect(permLinkMatch).toBeTruthy()
      expect(permLinkMatch![1]).toContain('font-bold')
      expect(permLinkMatch![1]).toContain('border-b-2')
    })

    /**
     * テストケース: TC-HDR-011
     * 目的: staff ページでは staff リンクがハイライトされる
     */
    it('staff ページでは staff リンクがハイライトされる', () => {
      const html = renderToString(Header({ currentPage: 'staff' }))

      const staffLinkMatch = html.match(/href="\/pages\/staff"[^>]*class="([^"]*)"/);
      expect(staffLinkMatch).toBeTruthy()
      expect(staffLinkMatch![1]).toContain('font-bold')
      expect(staffLinkMatch![1]).toContain('border-b-2')
    })
  })

  describe('レスポンシブ対応', () => {
    /**
     * テストケース: TC-HDR-012
     * 目的: デスクトップナビゲーションは初期状態で非表示
     * 期待結果: desktop-nav に style="display: none;" が設定
     */
    it('デスクトップナビゲーションは初期状態で非表示', () => {
      const html = renderToString(Header({}))

      expect(html).toContain('class="desktop-nav')
      expect(html).toContain('style="display: none;"')
    })

    /**
     * テストケース: TC-HDR-013
     * 目的: モバイルメニューボタンが存在する
     * 期待結果: id="menuToggle" ボタンが存在
     */
    it('モバイルメニュートグルボタンが存在する', () => {
      const html = renderToString(Header({}))

      expect(html).toContain('id="menuToggle"')
      expect(html).toContain('<button')
    })

    /**
     * テストケース: TC-HDR-014
     * 目的: モバイルメニューが存在する
     * 期待結果: id="mobileMenu" が存在
     */
    it('モバイルメニューが存在する', () => {
      const html = renderToString(Header({}))

      expect(html).toContain('id="mobileMenu"')
    })
  })

  describe('ロゴとブランディング', () => {
    /**
     * テストケース: TC-HDR-015
     * 目的: ロゴがトップページへリンクする
     * 期待結果: "美容室success" テキストがあり、href="/" へリンク
     */
    it('ロゴはトップページへリンクする', () => {
      const html = renderToString(Header({}))

      expect(html).toContain('美容室success')
      expect(html).toContain('href="/"')
    })
  })
})
