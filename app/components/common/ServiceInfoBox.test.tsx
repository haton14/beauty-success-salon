import { describe, it, expect } from 'vitest'
import { ServiceInfoBox } from './ServiceInfoBox'

const render = (component: any): string => component.toString()

describe('施術情報ボックス', () => {
  describe('訪問者が施術情報を確認できる', () => {
    it('施術時間が表示される', () => {
      const html = render(ServiceInfoBox({
        duration: '約2〜2.5時間'
      }))

      expect(html).toContain('施術時間')
      expect(html).toContain('約2〜2.5時間')
    })

    it('持続期間が表示される', () => {
      const html = render(ServiceInfoBox({
        duration: '約2時間',
        retention: '2〜3ヶ月'
      }))

      expect(html).toContain('持続期間')
      expect(html).toContain('2〜3ヶ月')
    })

    it('持続期間が指定されなければ表示されない', () => {
      const html = render(ServiceInfoBox({
        duration: '約2時間'
      }))

      expect(html).not.toContain('持続期間')
    })
  })

  describe('色をカスタマイズできる', () => {
    it('指定された背景色が適用される', () => {
      const html = render(ServiceInfoBox({
        duration: '約2時間',
        bgColor: 'bg-purple-50'
      }))

      expect(html).toContain('bg-purple-50')
    })

    it('指定されたテキスト色が適用される', () => {
      const html = render(ServiceInfoBox({
        duration: '約2時間',
        textColor: 'text-purple-800'
      }))

      expect(html).toContain('text-purple-800')
    })

    it('指定がなければデフォルトの色が適用される', () => {
      const html = render(ServiceInfoBox({
        duration: '約2時間'
      }))

      expect(html).toContain('bg-blue-50')
      expect(html).toContain('text-blue-800')
    })
  })

  describe('レイアウトが統一される', () => {
    it('角丸のボックスで表示される', () => {
      const html = render(ServiceInfoBox({
        duration: '約2時間'
      }))

      expect(html).toContain('rounded-xl')
    })

    it('適切なパディングが設定される', () => {
      const html = render(ServiceInfoBox({
        duration: '約2時間'
      }))

      expect(html).toContain('p-4')
    })
  })
})
