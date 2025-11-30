/**
 * HeroButtons コンポーネントの振る舞いテスト
 *
 * JSTQBテスト設計技法に基づく:
 * - ヒーローセクションのボタン仕様
 * - レスポンシブ対応（改行防止）
 */
import { describe, it, expect } from 'vitest'
import { HeroButtons } from '../components/HeroButtons'

// Hono JSXをHTMLに変換するヘルパー
const renderToString = (component: any): string => {
  return component.toString()
}

describe('HeroButtons コンポーネント', () => {
  describe('CTAボタンの仕様', () => {
    /**
     * テストケース: TC-HERO-001
     * 目的: 「sins 酸性ストレートについて」ボタンが存在する
     * 期待結果: href="#sins" のリンクとテキストが存在
     */
    it('「sins 酸性ストレートについて」ボタンが存在する', () => {
      const html = renderToString(HeroButtons({}))

      expect(html).toContain('href="#sins"')
      expect(html).toContain('sins 酸性ストレートについて')
    })

    /**
     * テストケース: TC-HERO-002
     * 目的: 「ご予約はこちら」ボタンが存在する
     * 期待結果: href="#contact" のリンクとテキストが存在
     */
    it('「ご予約はこちら」ボタンが存在する', () => {
      const html = renderToString(HeroButtons({}))

      expect(html).toContain('href="#contact"')
      expect(html).toContain('ご予約はこちら')
    })

    /**
     * テストケース: TC-HERO-003
     * 目的: 「sins 酸性ストレートについて」ボタンはテキストが改行されない
     * 期待結果: whitespace-nowrap クラスが適用されている
     */
    it('「sins 酸性ストレートについて」ボタンは改行されない（whitespace-nowrap）', () => {
      const html = renderToString(HeroButtons({}))

      // href="#sins" を含むaタグにwhitespace-nowrapがあることを確認
      const sinsButtonMatch = html.match(/<a[^>]*href="#sins"[^>]*class="([^"]*)"[^>]*>/)
      expect(sinsButtonMatch).toBeTruthy()
      expect(sinsButtonMatch![1]).toContain('whitespace-nowrap')
    })

    /**
     * テストケース: TC-HERO-004
     * 目的: 「ご予約はこちら」ボタンはテキストが改行されない
     * 期待結果: whitespace-nowrap クラスが適用されている
     */
    it('「ご予約はこちら」ボタンは改行されない（whitespace-nowrap）', () => {
      const html = renderToString(HeroButtons({}))

      // #contactリンクを検索
      const contactButtonMatch = html.match(/<a[^>]*href="#contact"[^>]*class="([^"]*)"[^>]*>/)
      expect(contactButtonMatch).toBeTruthy()
      expect(contactButtonMatch![1]).toContain('whitespace-nowrap')
    })

    /**
     * テストケース: TC-HERO-005
     * 目的: ボタンはモバイルで縦並び、sm以上で横並び
     * 期待結果: 親divにflex-col sm:flex-rowが適用されている
     */
    it('ボタンはモバイルで縦並び、sm以上で横並び', () => {
      const html = renderToString(HeroButtons({}))

      expect(html).toContain('flex flex-col sm:flex-row')
    })
  })

  describe('ボタンのスタイリング', () => {
    /**
     * テストケース: TC-HERO-006
     * 目的: 「sins 酸性ストレートについて」ボタンは青系グラデーション背景
     * 期待結果: bg-gradient-to-b from-blue-700 to-blue-800 が適用
     */
    it('「sins 酸性ストレートについて」ボタンは青系グラデーション背景', () => {
      const html = renderToString(HeroButtons({}))

      const sinsButtonMatch = html.match(/<a[^>]*href="#sins"[^>]*class="([^"]*)"[^>]*>/)
      expect(sinsButtonMatch).toBeTruthy()
      expect(sinsButtonMatch![1]).toContain('from-blue-700')
      expect(sinsButtonMatch![1]).toContain('to-blue-800')
    })

    /**
     * テストケース: TC-HERO-007
     * 目的: 「ご予約はこちら」ボタンは白背景・青ボーダー
     * 期待結果: bg-white と border-blue-800 が適用
     */
    it('「ご予約はこちら」ボタンは白背景・青ボーダー', () => {
      const html = renderToString(HeroButtons({}))

      const contactButtonMatch = html.match(/<a[^>]*href="#contact"[^>]*class="([^"]*)"[^>]*>/)
      expect(contactButtonMatch).toBeTruthy()
      expect(contactButtonMatch![1]).toContain('bg-white')
      expect(contactButtonMatch![1]).toContain('border-blue-800')
    })

    /**
     * テストケース: TC-HERO-008
     * 目的: 両ボタンに角丸が適用されている
     * 期待結果: rounded-full クラスが適用
     */
    it('両ボタンに角丸（rounded-full）が適用されている', () => {
      const html = renderToString(HeroButtons({}))

      const sinsButtonMatch = html.match(/<a[^>]*href="#sins"[^>]*class="([^"]*)"[^>]*>/)
      const contactButtonMatch = html.match(/<a[^>]*href="#contact"[^>]*class="([^"]*)"[^>]*>/)

      expect(sinsButtonMatch![1]).toContain('rounded-full')
      expect(contactButtonMatch![1]).toContain('rounded-full')
    })

    /**
     * テストケース: TC-HERO-009
     * 目的: 両ボタンにホバー時の浮き上がり効果がある
     * 期待結果: hover:-translate-y-0.5 クラスが適用
     */
    it('両ボタンにホバー時の浮き上がり効果がある', () => {
      const html = renderToString(HeroButtons({}))

      const sinsButtonMatch = html.match(/<a[^>]*href="#sins"[^>]*class="([^"]*)"[^>]*>/)
      const contactButtonMatch = html.match(/<a[^>]*href="#contact"[^>]*class="([^"]*)"[^>]*>/)

      expect(sinsButtonMatch![1]).toContain('hover:-translate-y-0.5')
      expect(contactButtonMatch![1]).toContain('hover:-translate-y-0.5')
    })
  })
})
