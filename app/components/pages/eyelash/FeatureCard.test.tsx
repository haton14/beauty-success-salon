import { describe, it, expect } from 'vitest'
import { FeatureCard } from './FeatureCard'

const render = (component: any): string => component.toString()

describe('特徴カード', () => {
  describe('訪問者が特徴を把握できる', () => {
    it('タイトルが表示される', () => {
      const html = render(FeatureCard({
        title: '目力アップ',
        description: '自然なカールで目元がパッチリ。',
        icon: '<svg>icon</svg>'
      }))

      expect(html).toContain('目力アップ')
      expect(html).toContain('<h3')
    })

    it('説明文が表示される', () => {
      const html = render(FeatureCard({
        title: 'テスト',
        description: '自然なカールで目元がパッチリ。',
        icon: '<svg>icon</svg>'
      }))

      expect(html).toContain('自然なカールで目元がパッチリ。')
    })

    it('アイコンが表示される', () => {
      const html = render(FeatureCard({
        title: 'テスト',
        description: '説明',
        icon: '<svg class="test-icon">icon</svg>'
      }))

      expect(html).toContain('test-icon')
    })
  })

  describe('アイコンの背景色をカスタマイズできる', () => {
    it('指定された背景色が適用される', () => {
      const html = render(FeatureCard({
        title: 'テスト',
        description: '説明',
        icon: '<svg>icon</svg>',
        iconBgColor: 'bg-blue-100'
      }))

      expect(html).toContain('bg-blue-100')
    })

    it('指定がなければデフォルトの背景色が適用される', () => {
      const html = render(FeatureCard({
        title: 'テスト',
        description: '説明',
        icon: '<svg>icon</svg>'
      }))

      expect(html).toContain('bg-pink-100')
    })
  })

  describe('レイアウトが統一される', () => {
    it('中央揃えで表示される', () => {
      const html = render(FeatureCard({
        title: 'テスト',
        description: '説明',
        icon: '<svg>icon</svg>'
      }))

      expect(html).toContain('text-center')
    })

    it('アイコンが丸い背景で表示される', () => {
      const html = render(FeatureCard({
        title: 'テスト',
        description: '説明',
        icon: '<svg>icon</svg>'
      }))

      expect(html).toContain('rounded-full')
    })
  })
})
