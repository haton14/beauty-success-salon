import { describe, it, expect } from 'vitest'
import { GalleryCard } from './GalleryCard'

const render = (component: any): string => component.toString()

describe('ギャラリーカード', () => {
  describe('訪問者がスタイル例を確認できる', () => {
    it('タイトルが表示される', () => {
      const html = render(GalleryCard({
        title: 'ナチュラルカール',
        description: '自然な上向きカール'
      }))

      expect(html).toContain('ナチュラルカール')
    })

    it('説明文が表示される', () => {
      const html = render(GalleryCard({
        title: 'ナチュラルカール',
        description: '自然な上向きカール'
      }))

      expect(html).toContain('自然な上向きカール')
    })

    it('プレースホルダーテキストが表示される', () => {
      const html = render(GalleryCard({
        title: 'ナチュラルカール',
        description: '自然な上向きカール',
        placeholder: '画像準備中'
      }))

      expect(html).toContain('画像準備中')
    })
  })

  describe('アスペクト比を切り替えられる', () => {
    it('videoアスペクト比を指定できる', () => {
      const html = render(GalleryCard({
        title: 'テスト',
        description: '説明',
        aspectRatio: 'video'
      }))

      expect(html).toContain('aspect-video')
    })

    it('3/4アスペクト比を指定できる', () => {
      const html = render(GalleryCard({
        title: 'テスト',
        description: '説明',
        aspectRatio: '3/4'
      }))

      expect(html).toContain('aspect-[3/4]')
    })

    it('squareアスペクト比を指定できる', () => {
      const html = render(GalleryCard({
        title: 'テスト',
        description: '説明',
        aspectRatio: 'square'
      }))

      expect(html).toContain('aspect-square')
    })

    it('指定がなければvideoアスペクト比になる', () => {
      const html = render(GalleryCard({
        title: 'テスト',
        description: '説明'
      }))

      expect(html).toContain('aspect-video')
    })
  })

  describe('レイアウトが統一される', () => {
    it('カードがシャドウ付きで表示される', () => {
      const html = render(GalleryCard({
        title: 'テスト',
        description: '説明'
      }))

      expect(html).toContain('shadow-lg')
    })

    it('カードが角丸で表示される', () => {
      const html = render(GalleryCard({
        title: 'テスト',
        description: '説明'
      }))

      expect(html).toContain('rounded-2xl')
    })

    it('プレースホルダー領域が表示される', () => {
      const html = render(GalleryCard({
        title: 'テスト',
        description: '説明'
      }))

      expect(html).toContain('bg-gray-100')
    })
  })
})
