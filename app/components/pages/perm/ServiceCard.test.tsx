import { describe, it, expect } from 'vitest'
import { ServiceCard } from './ServiceCard'

const render = (component: any): string => component.toString()

describe('サービスカード', () => {
  describe('訪問者がサービスを把握できる', () => {
    it('サービス名が表示される', () => {
      const html = render(ServiceCard({
        title: 'パーマ',
        subtitle: '理想のカールやウェーブを実現',
        color: 'teal',
        children: '<div>内容</div>'
      }))

      expect(html).toContain('パーマ')
      expect(html).toContain('<h2')
    })

    it('サブタイトルが表示される', () => {
      const html = render(ServiceCard({
        title: 'パーマ',
        subtitle: '理想のカールやウェーブを実現',
        color: 'teal',
        children: '<div>内容</div>'
      }))

      expect(html).toContain('理想のカールやウェーブを実現')
    })
  })

  describe('おすすめバッジを表示できる', () => {
    it('recommendedがtrueの場合バッジが表示される', () => {
      const html = render(ServiceCard({
        title: '酸性デジタルパーマ',
        subtitle: '髪に優しい',
        color: 'purple',
        recommended: true,
        children: '<div>内容</div>'
      }))

      expect(html).toContain('おすすめ')
    })

    it('recommendedがfalseの場合バッジは表示されない', () => {
      const html = render(ServiceCard({
        title: 'パーマ',
        subtitle: 'テスト',
        color: 'teal',
        recommended: false,
        children: '<div>内容</div>'
      }))

      expect(html).not.toContain('おすすめ')
    })
  })

  describe('テーマカラーをカスタマイズできる', () => {
    it('tealカラーが適用される', () => {
      const html = render(ServiceCard({
        title: 'テスト',
        subtitle: 'サブ',
        color: 'teal',
        children: '<div>内容</div>'
      }))

      expect(html).toContain('from-teal-600')
      expect(html).toContain('to-teal-700')
    })

    it('purpleカラーが適用される', () => {
      const html = render(ServiceCard({
        title: 'テスト',
        subtitle: 'サブ',
        color: 'purple',
        children: '<div>内容</div>'
      }))

      expect(html).toContain('from-purple-600')
      expect(html).toContain('to-purple-700')
    })

    it('blueカラーが適用される', () => {
      const html = render(ServiceCard({
        title: 'テスト',
        subtitle: 'サブ',
        color: 'blue',
        children: '<div>内容</div>'
      }))

      expect(html).toContain('from-blue-600')
      expect(html).toContain('to-blue-700')
    })
  })

  describe('カードのデザインが統一される', () => {
    it('白背景で角丸のカードスタイルになる', () => {
      const html = render(ServiceCard({
        title: 'テスト',
        subtitle: 'サブ',
        color: 'teal',
        children: '<div>内容</div>'
      }))

      expect(html).toContain('bg-white')
      expect(html).toContain('rounded-3xl')
      expect(html).toContain('shadow-xl')
    })
  })
})
