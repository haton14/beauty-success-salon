import { describe, expect, it } from 'vitest'
import { render } from '../../test-utils'
import { CheckListItem } from './CheckListItem'

describe('チェックリスト項目', () => {
  describe('訪問者がリスト項目を確認できる', () => {
    it('テキストが表示される', () => {
      const html = render(
        CheckListItem({
          children: 'ボリュームが欲しい方',
        })
      )

      expect(html).toContain('ボリュームが欲しい方')
    })

    it('デフォルトのチェックマークが表示される', () => {
      const html = render(
        CheckListItem({
          children: 'テスト項目',
        })
      )

      expect(html).toContain('✓')
    })
  })

  describe('アイコンをカスタマイズできる', () => {
    it('ダイヤマークを表示できる', () => {
      const html = render(
        CheckListItem({
          icon: '◆',
          children: 'テスト項目',
        })
      )

      expect(html).toContain('◆')
    })

    it('ビュレットを表示できる', () => {
      const html = render(
        CheckListItem({
          icon: '•',
          children: 'テスト項目',
        })
      )

      expect(html).toContain('•')
    })
  })

  describe('アイコンの色をカスタマイズできる', () => {
    it('指定された色が適用される', () => {
      const html = render(
        CheckListItem({
          iconColor: 'text-blue-500',
          children: 'テスト項目',
        })
      )

      expect(html).toContain('text-blue-500')
    })

    it('指定がなければデフォルトの色が適用される', () => {
      const html = render(
        CheckListItem({
          children: 'テスト項目',
        })
      )

      expect(html).toContain('text-green-500')
    })
  })

  describe('レイアウトが統一される', () => {
    it('横並びのレイアウトになる', () => {
      const html = render(
        CheckListItem({
          children: 'テスト項目',
        })
      )

      expect(html).toContain('flex')
      expect(html).toContain('items-start')
    })

    it('リスト項目として表示される', () => {
      const html = render(
        CheckListItem({
          children: 'テスト項目',
        })
      )

      expect(html).toContain('<li')
    })
  })
})
