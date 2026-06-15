import { describe, expect, it } from 'vitest'
import { render } from '../../test-utils'
import { PageHeader } from './PageHeader'

describe('ページヘッダー', () => {
  describe('訪問者がページタイトルを確認できる', () => {
    it('タイトルが表示される', () => {
      const html = render(
        PageHeader({
          title: 'パーマ',
        })
      )

      expect(html).toContain('パーマ')
      expect(html).toContain('<h1')
    })

    it('サブタイトルが表示される', () => {
      const html = render(
        PageHeader({
          title: 'パーマ',
          subtitle: '理想のカールやウェーブを実現',
        })
      )

      expect(html).toContain('理想のカールやウェーブを実現')
    })

    it('サブタイトルが指定されなければ表示されない', () => {
      const html = render(
        PageHeader({
          title: 'パーマ',
        })
      )

      expect(html).not.toContain('<p')
    })
  })

  describe('追加コンテンツを差し込める', () => {
    it('children が指定されると本文として表示される', () => {
      const html = render(
        PageHeader({
          title: 'sins 酸性ストレート',
          children: '<img alt="施術例" />',
        })
      )

      expect(html).toContain('施術例')
    })

    it('children がなければ本文ラッパーは表示されない', () => {
      const html = render(
        PageHeader({
          title: 'パーマ',
        })
      )

      expect(html).not.toContain('mt-8')
    })
  })

  describe('背景グラデーションをカスタマイズできる', () => {
    it('指定されたグラデーションが適用される', () => {
      const html = render(
        PageHeader({
          title: 'パーマ',
          bgGradient: 'from-pink-50 to-white',
        })
      )

      expect(html).toContain('from-pink-50')
      expect(html).toContain('to-white')
    })

    it('指定がなければデフォルトのグラデーションが適用される', () => {
      const html = render(
        PageHeader({
          title: 'パーマ',
        })
      )

      expect(html).toContain('from-gray-50')
      expect(html).toContain('to-white')
    })
  })

  describe('レイアウトが統一される', () => {
    it('中央寄せで表示される', () => {
      const html = render(
        PageHeader({
          title: 'パーマ',
        })
      )

      expect(html).toContain('text-center')
    })

    it('Tailwind v4 の linear グラデーション背景が適用される', () => {
      const html = render(
        PageHeader({
          title: 'パーマ',
        })
      )

      expect(html).toContain('bg-linear-to-b')
    })

    it('セクションとして表示される', () => {
      const html = render(
        PageHeader({
          title: 'パーマ',
        })
      )

      expect(html).toContain('<section')
    })

    it('統一された上下余白が適用される', () => {
      const html = render(
        PageHeader({
          title: 'パーマ',
        })
      )

      expect(html).toContain('pt-20')
      expect(html).toContain('pb-12')
    })

    it('タイトルが統一されたサイズと色で表示される', () => {
      const html = render(
        PageHeader({
          title: 'パーマ',
        })
      )

      expect(html).toContain('text-4xl')
      expect(html).toContain('md:text-5xl')
      expect(html).toContain('text-gray-800')
    })
  })
})
