import { describe, it, expect } from 'vitest'
import { StepItem } from './StepItem'

const render = (component: any): string => component.toString()

describe('ステップ項目', () => {
  describe('訪問者が手順を把握できる', () => {
    it('ステップ番号が表示される', () => {
      const html = render(StepItem({
        step: 1,
        title: 'カウンセリング',
        description: '理想のカールをお伺いします。'
      }))

      expect(html).toContain('>1<')
    })

    it('タイトルが表示される', () => {
      const html = render(StepItem({
        step: 1,
        title: 'カウンセリング',
        description: '理想のカールをお伺いします。'
      }))

      expect(html).toContain('カウンセリング')
      expect(html).toContain('<h3')
    })

    it('説明文が表示される', () => {
      const html = render(StepItem({
        step: 1,
        title: 'カウンセリング',
        description: '理想のカールをお伺いします。'
      }))

      expect(html).toContain('理想のカールをお伺いします。')
    })
  })

  describe('ステップ番号の色をカスタマイズできる', () => {
    it('指定された背景色が適用される', () => {
      const html = render(StepItem({
        step: 1,
        title: 'テスト',
        description: '説明',
        bgColor: 'bg-blue-600'
      }))

      expect(html).toContain('bg-blue-600')
    })

    it('指定がなければデフォルトの背景色が適用される', () => {
      const html = render(StepItem({
        step: 1,
        title: 'テスト',
        description: '説明'
      }))

      expect(html).toContain('bg-pink-600')
    })
  })

  describe('レイアウトが統一される', () => {
    it('ステップ番号が丸い背景で表示される', () => {
      const html = render(StepItem({
        step: 1,
        title: 'テスト',
        description: '説明'
      }))

      expect(html).toContain('rounded-full')
    })

    it('横並びのレイアウトになる', () => {
      const html = render(StepItem({
        step: 1,
        title: 'テスト',
        description: '説明'
      }))

      expect(html).toContain('flex')
      expect(html).toContain('items-start')
    })
  })
})
