import { describe, it, expect } from 'vitest'
import { HeroButtons } from '../components/HeroButtons'

const render = (component: any): string => component.toString()

describe('トップページのヒーローボタン', () => {
  describe('訪問者がメインサービスと予約へ誘導される', () => {
    it('sinsサービスの詳細へ移動できる', () => {
      const html = render(HeroButtons({}))

      expect(html).toContain('href="#sins"')
      expect(html).toContain('sins 酸性ストレートについて')
    })

    it('予約セクションへ移動できる', () => {
      const html = render(HeroButtons({}))

      expect(html).toContain('href="#contact"')
      expect(html).toContain('ご予約はこちら')
    })
  })

  describe('ボタンのテキストが見切れない', () => {
    it('sinsボタンのテキストは改行されない', () => {
      const html = render(HeroButtons({}))

      const sinsButtonMatch = html.match(/<a[^>]*href="#sins"[^>]*class="([^"]*)"[^>]*>/)
      expect(sinsButtonMatch).toBeTruthy()
      expect(sinsButtonMatch![1]).toContain('whitespace-nowrap')
    })

    it('予約ボタンのテキストは改行されない', () => {
      const html = render(HeroButtons({}))

      const contactButtonMatch = html.match(/<a[^>]*href="#contact"[^>]*class="([^"]*)"[^>]*>/)
      expect(contactButtonMatch).toBeTruthy()
      expect(contactButtonMatch![1]).toContain('whitespace-nowrap')
    })
  })

  describe('スマートフォンでも操作しやすい', () => {
    it('画面幅に応じてボタンの並びが変わる', () => {
      const html = render(HeroButtons({}))

      expect(html).toContain('flex flex-col sm:flex-row')
    })

    it('ボタンはタップしやすい丸みのある形状になっている', () => {
      const html = render(HeroButtons({}))

      const sinsButtonMatch = html.match(/<a[^>]*href="#sins"[^>]*class="([^"]*)"[^>]*>/)
      const contactButtonMatch = html.match(/<a[^>]*href="#contact"[^>]*class="([^"]*)"[^>]*>/)

      expect(sinsButtonMatch![1]).toContain('rounded-full')
      expect(contactButtonMatch![1]).toContain('rounded-full')
    })
  })

  describe('ボタンの視覚的な区別ができる', () => {
    it('sinsボタンは目立つ青色で表示される', () => {
      const html = render(HeroButtons({}))

      const sinsButtonMatch = html.match(/<a[^>]*href="#sins"[^>]*class="([^"]*)"[^>]*>/)
      expect(sinsButtonMatch).toBeTruthy()
      expect(sinsButtonMatch![1]).toContain('from-blue-700')
      expect(sinsButtonMatch![1]).toContain('to-blue-800')
    })

    it('予約ボタンは白背景で控えめに表示される', () => {
      const html = render(HeroButtons({}))

      const contactButtonMatch = html.match(/<a[^>]*href="#contact"[^>]*class="([^"]*)"[^>]*>/)
      expect(contactButtonMatch).toBeTruthy()
      expect(contactButtonMatch![1]).toContain('bg-white')
      expect(contactButtonMatch![1]).toContain('border-blue-800')
    })
  })
})
