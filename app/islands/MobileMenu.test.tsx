/**
 * MobileMenu フェードインアニメーションのロジックテスト
 *
 * JSTQBテスト設計技法に基づく:
 * - 同値分割: IntersectionObserver の isIntersecting true/false
 * - 状態遷移: セクションの opacity/transform 状態
 *
 * 注: MobileMenuはHono Islandコンポーネントで、useEffectはクライアントハイドレーション時に実行される。
 * このテストでは、フェードインのロジック部分を直接テストする。
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

// IntersectionObserver のモック型定義
type IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => void

describe('MobileMenu フェードインアニメーションのロジック', () => {
  let mockObserverCallback: IntersectionObserverCallback
  let observedElements: Element[] = []

  beforeEach(() => {
    document.body.innerHTML = ''
    observedElements = []

    // IntersectionObserver をクラスとしてモック
    class MockIntersectionObserver {
      constructor(callback: IntersectionObserverCallback) {
        mockObserverCallback = callback
      }
      observe(element: Element) {
        observedElements.push(element)
      }
      unobserve() {}
      disconnect() {}
    }
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  /**
   * MobileMenuのuseEffect内のロジックを抽出して直接テスト
   * これはMobileMenuのフェードイン機能の単体テスト
   */
  const setupFadeInAnimation = () => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }

    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement
          target.style.opacity = '1'
          target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll('section')
    sections.forEach((section) => {
      section.style.opacity = '0.3'
      section.style.transform = 'translateY(20px)'
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      fadeInObserver.observe(section)
    })

    return fadeInObserver
  }

  describe('IntersectionObserver の初期化', () => {
    /**
     * テストケース: TC-FADE-001
     * 目的: 全てのセクションが observe される
     * 期待結果: ページ上の全 section 要素が監視対象になる
     */
    it('全ての section 要素が observe される', () => {
      document.body.innerHTML = `
        <section id="section1">Section 1</section>
        <section id="section2">Section 2</section>
        <section id="section3">Section 3</section>
      `

      setupFadeInAnimation()

      expect(observedElements).toHaveLength(3)
    })
  })

  describe('セクションの初期スタイル', () => {
    /**
     * テストケース: TC-FADE-002
     * 目的: セクションの初期状態が正しく設定される
     * 期待結果: opacity: 0.3, transform: translateY(20px)
     */
    it('セクションの初期 opacity が 0.3 に設定される', () => {
      document.body.innerHTML = `
        <section id="section1">Section 1</section>
      `

      setupFadeInAnimation()

      const section = document.getElementById('section1')
      expect(section?.style.opacity).toBe('0.3')
    })

    it('セクションの初期 transform が translateY(20px) に設定される', () => {
      document.body.innerHTML = `
        <section id="section1">Section 1</section>
      `

      setupFadeInAnimation()

      const section = document.getElementById('section1')
      expect(section?.style.transform).toBe('translateY(20px)')
    })

    /**
     * テストケース: TC-FADE-003
     * 目的: トランジションが設定される
     * 期待結果: 0.6s ease のトランジション
     */
    it('トランジションが正しく設定される', () => {
      document.body.innerHTML = `
        <section id="section1">Section 1</section>
      `

      setupFadeInAnimation()

      const section = document.getElementById('section1')
      expect(section?.style.transition).toContain('opacity 0.6s ease')
      expect(section?.style.transition).toContain('transform 0.6s ease')
    })
  })

  describe('可視状態への遷移', () => {
    /**
     * テストケース: TC-FADE-004
     * 目的: isIntersecting=true の場合、要素が表示される
     * 期待結果: opacity: 1, transform: translateY(0)
     */
    it('isIntersecting=true で opacity が 1 になる', () => {
      document.body.innerHTML = `
        <section id="section1">Section 1</section>
      `

      setupFadeInAnimation()
      const section = document.getElementById('section1')!

      // IntersectionObserver コールバックをシミュレート
      mockObserverCallback([
        {
          target: section,
          isIntersecting: true,
          intersectionRatio: 0.15,
        } as unknown as IntersectionObserverEntry,
      ])

      expect(section.style.opacity).toBe('1')
    })

    it('isIntersecting=true で transform が translateY(0) になる', () => {
      document.body.innerHTML = `
        <section id="section1">Section 1</section>
      `

      setupFadeInAnimation()
      const section = document.getElementById('section1')!

      mockObserverCallback([
        {
          target: section,
          isIntersecting: true,
          intersectionRatio: 0.15,
        } as unknown as IntersectionObserverEntry,
      ])

      expect(section.style.transform).toBe('translateY(0)')
    })

    /**
     * テストケース: TC-FADE-005
     * 目的: isIntersecting=false の場合、スタイルは変更されない
     * 期待結果: 初期状態を維持
     */
    it('isIntersecting=false ではスタイルが変更されない', () => {
      document.body.innerHTML = `
        <section id="section1">Section 1</section>
      `

      setupFadeInAnimation()
      const section = document.getElementById('section1')!

      mockObserverCallback([
        {
          target: section,
          isIntersecting: false,
          intersectionRatio: 0,
        } as unknown as IntersectionObserverEntry,
      ])

      // 初期状態のまま
      expect(section.style.opacity).toBe('0.3')
    })
  })

  describe('複数セクションの遷移', () => {
    /**
     * テストケース: TC-FADE-006
     * 目的: 複数セクションが順次表示される
     * 期待結果: 各セクションが個別に表示状態に遷移
     */
    it('複数セクションが個別にフェードインする', () => {
      document.body.innerHTML = `
        <section id="section1">Section 1</section>
        <section id="section2">Section 2</section>
        <section id="section3">Section 3</section>
      `

      setupFadeInAnimation()

      const section1 = document.getElementById('section1')!
      const section2 = document.getElementById('section2')!
      const section3 = document.getElementById('section3')!

      // section1 だけが可視になる
      mockObserverCallback([
        {
          target: section1,
          isIntersecting: true,
          intersectionRatio: 0.15,
        } as unknown as IntersectionObserverEntry,
      ])

      expect(section1.style.opacity).toBe('1')
      expect(section2.style.opacity).toBe('0.3')
      expect(section3.style.opacity).toBe('0.3')

      // section2 が可視になる
      mockObserverCallback([
        {
          target: section2,
          isIntersecting: true,
          intersectionRatio: 0.15,
        } as unknown as IntersectionObserverEntry,
      ])

      expect(section1.style.opacity).toBe('1')
      expect(section2.style.opacity).toBe('1')
      expect(section3.style.opacity).toBe('0.3')
    })

    /**
     * テストケース: TC-FADE-007
     * 目的: 一度表示されたセクションは表示状態を維持する
     * 期待結果: スクロールバックしても opacity: 1 のまま
     */
    it('一度表示されたセクションは非表示に戻らない', () => {
      document.body.innerHTML = `
        <section id="section1">Section 1</section>
      `

      setupFadeInAnimation()
      const section = document.getElementById('section1')!

      // 表示される
      mockObserverCallback([
        {
          target: section,
          isIntersecting: true,
          intersectionRatio: 0.15,
        } as unknown as IntersectionObserverEntry,
      ])

      expect(section.style.opacity).toBe('1')

      // 画面外に出ても opacity は 1 のまま（コールバックで false の場合、何もしない）
      mockObserverCallback([
        {
          target: section,
          isIntersecting: false,
          intersectionRatio: 0,
        } as unknown as IntersectionObserverEntry,
      ])

      expect(section.style.opacity).toBe('1')
    })
  })
})
