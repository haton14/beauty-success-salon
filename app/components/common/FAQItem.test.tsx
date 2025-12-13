import { describe, it, expect } from 'vitest'
import { FAQItem } from './FAQItem'

const render = (component: any): string => component.toString()

describe('FAQ項目', () => {
  describe('訪問者が質問と回答を確認できる', () => {
    it('質問が表示される', () => {
      const html = render(FAQItem({
        question: '従来の縮毛矯正とは何が違うのですか？',
        answer: '髪に優しい酸性薬剤を使用します。'
      }))

      expect(html).toContain('従来の縮毛矯正とは何が違うのですか？')
    })

    it('回答が表示される', () => {
      const html = render(FAQItem({
        question: 'テスト質問',
        answer: '髪に優しい酸性薬剤を使用します。'
      }))

      expect(html).toContain('髪に優しい酸性薬剤を使用します。')
    })
  })

  describe('質問と回答が視覚的に区別できる', () => {
    it('質問にQマークが表示される', () => {
      const html = render(FAQItem({
        question: 'テスト',
        answer: '回答'
      }))

      expect(html).toContain('>Q<')
      expect(html).toContain('bg-blue-600')
    })

    it('回答にAマークが表示される', () => {
      const html = render(FAQItem({
        question: 'テスト',
        answer: '回答'
      }))

      expect(html).toContain('>A<')
      expect(html).toContain('bg-green-500')
    })
  })

  describe('カードのデザインが統一される', () => {
    it('白背景で角丸のカードスタイルになる', () => {
      const html = render(FAQItem({
        question: 'テスト',
        answer: '回答'
      }))

      expect(html).toContain('bg-white')
      expect(html).toContain('rounded-2xl')
      expect(html).toContain('shadow-lg')
    })
  })

  describe('質問が見出しとして機能する', () => {
    it('質問がh4要素で表示される', () => {
      const html = render(FAQItem({
        question: 'テスト質問',
        answer: '回答'
      }))

      expect(html).toContain('<h4')
      expect(html).toContain('font-bold')
    })
  })
})
