import { describe, it, expect } from 'vitest'
import { Header } from './Header'

const render = (component: any): string => component.toString()

describe('ヘッダーナビゲーション', () => {
  describe('訪問者がトップページを閲覧している場合', () => {
    it('ページ内セクションへ移動できる', () => {
      const html = render(Header({}))

      expect(html).toContain('href="#concept"')
      expect(html).toContain('私たちについて')
      expect(html).toContain('href="#menu"')
      expect(html).toContain('メニュー')
    })

    it('すでにトップページにいるので「トップ」リンクは表示されない', () => {
      const html = render(Header({}))

      expect(html).not.toContain('>トップ<')
    })

    it('予約セクションへ移動できる', () => {
      const html = render(Header({}))

      expect(html).toContain('href="#contact"')
      expect(html).toContain('ご予約')
    })
  })

  describe('訪問者がサービスページを閲覧している場合', () => {
    it('トップページへ戻れる', () => {
      const html = render(Header({ currentPage: 'sins' }))

      expect(html).toContain('href="/"')
      expect(html).toContain('>トップ<')
    })

    it('ページ内セクションリンクは表示されない', () => {
      const html = render(Header({ currentPage: 'perm' }))

      expect(html).not.toContain('href="#concept"')
      expect(html).not.toContain('href="#menu"')
    })

    it('予約リンクはトップページの予約セクションへ誘導する', () => {
      const html = render(Header({ currentPage: 'eyelash' }))

      expect(html).toContain('href="/#contact"')
    })
  })

  describe('訪問者が各サービスページへアクセスできる', () => {
    it('全サービスへのリンクが表示される', () => {
      const html = render(Header({}))

      expect(html).toContain('href="/pages/perm"')
      expect(html).toContain('パーマ')
      expect(html).toContain('href="/pages/sins"')
      expect(html).toContain('sins酸性ストレート')
      expect(html).toContain('href="/pages/eyelash"')
      expect(html).toContain('まつ毛')
      expect(html).toContain('href="/pages/kimono"')
      expect(html).toContain('着付け')
    })

    it('スタッフページへアクセスできる', () => {
      const html = render(Header({}))

      expect(html).toContain('href="/pages/staff"')
      expect(html).toContain('スタッフ')
    })
  })

  describe('訪問者が現在地を把握できる', () => {
    it('sinsページでは該当リンクが強調される', () => {
      const html = render(Header({ currentPage: 'sins' }))

      expect(html).toContain('text-blue-800 font-bold border-b-2 border-blue-800')
    })

    it('permページでは該当リンクが強調される', () => {
      const html = render(Header({ currentPage: 'perm' }))

      const permLinkMatch = html.match(/href="\/pages\/perm"[^>]*class="([^"]*)"/)
      expect(permLinkMatch).toBeTruthy()
      expect(permLinkMatch![1]).toContain('font-bold')
      expect(permLinkMatch![1]).toContain('border-b-2')
    })

    it('staffページでは該当リンクが強調される', () => {
      const html = render(Header({ currentPage: 'staff' }))

      const staffLinkMatch = html.match(/href="\/pages\/staff"[^>]*class="([^"]*)"/)
      expect(staffLinkMatch).toBeTruthy()
      expect(staffLinkMatch![1]).toContain('font-bold')
      expect(staffLinkMatch![1]).toContain('border-b-2')
    })
  })

  describe('モバイル端末でもナビゲーションを利用できる', () => {
    it('メニュー開閉ボタンが表示される', () => {
      const html = render(Header({}))

      expect(html).toContain('id="menuToggle"')
      expect(html).toContain('<button')
    })

    it('モバイルメニューが用意されている', () => {
      const html = render(Header({}))

      expect(html).toContain('id="mobileMenu"')
    })
  })

  describe('訪問者がロゴからトップページへ戻れる', () => {
    it('店名ロゴをクリックするとトップページへ移動する', () => {
      const html = render(Header({}))

      expect(html).toContain('美容室success')
      expect(html).toContain('href="/"')
    })
  })
})
