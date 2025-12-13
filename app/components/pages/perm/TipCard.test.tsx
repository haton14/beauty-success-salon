import { describe, it, expect } from 'vitest'
import { TipCard } from './TipCard'

const render = (component: any): string => component.toString()

describe('ヒントカード', () => {
  describe('訪問者がケアのヒントを確認できる', () => {
    it('タイトルが表示される', () => {
      const html = render(TipCard({
        title: '自宅でのケア',
        items: ['洗髪後は優しくタオルドライ']
      }))

      expect(html).toContain('自宅でのケア')
      expect(html).toContain('<h4')
    })

    it('ヒント項目が表示される', () => {
      const html = render(TipCard({
        title: '自宅でのケア',
        items: ['洗髪後は優しくタオルドライ', 'ドライヤーは低温で乾かす']
      }))

      expect(html).toContain('洗髪後は優しくタオルドライ')
      expect(html).toContain('ドライヤーは低温で乾かす')
    })

    it('項目がリストとして表示される', () => {
      const html = render(TipCard({
        title: 'テスト',
        items: ['項目1']
      }))

      expect(html).toContain('<ul')
      expect(html).toContain('<li')
    })
  })

  describe('アイコンの色をカスタマイズできる', () => {
    it('指定された色が適用される', () => {
      const html = render(TipCard({
        title: 'テスト',
        items: ['項目1'],
        iconColor: 'text-purple-500'
      }))

      expect(html).toContain('text-purple-500')
    })

    it('指定がなければデフォルトの色が適用される', () => {
      const html = render(TipCard({
        title: 'テスト',
        items: ['項目1']
      }))

      expect(html).toContain('text-blue-500')
    })
  })

  describe('タイトルの色をカスタマイズできる', () => {
    it('指定された色が適用される', () => {
      const html = render(TipCard({
        title: 'テスト',
        items: ['項目1'],
        titleColor: 'text-purple-900'
      }))

      expect(html).toContain('text-purple-900')
    })

    it('指定がなければデフォルトの色が適用される', () => {
      const html = render(TipCard({
        title: 'テスト',
        items: ['項目1']
      }))

      expect(html).toContain('text-blue-900')
    })
  })

  describe('レイアウトが統一される', () => {
    it('白背景のカードで表示される', () => {
      const html = render(TipCard({
        title: 'テスト',
        items: ['項目1']
      }))

      expect(html).toContain('bg-white')
    })

    it('角丸で表示される', () => {
      const html = render(TipCard({
        title: 'テスト',
        items: ['項目1']
      }))

      expect(html).toContain('rounded-xl')
    })

    it('適切なパディングが設定される', () => {
      const html = render(TipCard({
        title: 'テスト',
        items: ['項目1']
      }))

      expect(html).toContain('p-6')
    })
  })
})
