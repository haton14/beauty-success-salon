import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

type IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => void

describe('スクロール時のフェードインアニメーション', () => {
  let mockObserverCallback: IntersectionObserverCallback
  let observedElements: Element[] = []

  beforeEach(() => {
    document.body.innerHTML = ''
    observedElements = []

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

  const setupFadeInAnimation = () => {
    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement
          target.style.opacity = '1'
          target.style.transform = 'translateY(0)'
        }
      })
    }, { root: null, rootMargin: '0px', threshold: 0.1 })

    const sections = document.querySelectorAll('section')
    sections.forEach((section) => {
      section.style.opacity = '0.3'
      section.style.transform = 'translateY(20px)'
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      fadeInObserver.observe(section)
    })

    return fadeInObserver
  }

  describe('ページ読み込み時にセクションが薄く表示される', () => {
    it('全セクションがアニメーション対象として登録される', () => {
      document.body.innerHTML = `
        <section id="section1">Section 1</section>
        <section id="section2">Section 2</section>
        <section id="section3">Section 3</section>
      `

      setupFadeInAnimation()

      expect(observedElements).toHaveLength(3)
    })

    it('セクションは最初薄く表示される', () => {
      document.body.innerHTML = `<section id="section1">Section 1</section>`

      setupFadeInAnimation()

      const section = document.getElementById('section1')
      expect(section?.style.opacity).toBe('0.3')
    })

    it('セクションは最初少し下にずれて表示される', () => {
      document.body.innerHTML = `<section id="section1">Section 1</section>`

      setupFadeInAnimation()

      const section = document.getElementById('section1')
      expect(section?.style.transform).toBe('translateY(20px)')
    })
  })

  describe('スクロールしてセクションが画面に入ると滑らかに表示される', () => {
    it('画面に入ったセクションがくっきり表示される', () => {
      document.body.innerHTML = `<section id="section1">Section 1</section>`

      setupFadeInAnimation()
      const section = document.getElementById('section1')!

      mockObserverCallback([{
        target: section,
        isIntersecting: true,
        intersectionRatio: 0.15,
      } as unknown as IntersectionObserverEntry])

      expect(section.style.opacity).toBe('1')
    })

    it('画面に入ったセクションが正しい位置に移動する', () => {
      document.body.innerHTML = `<section id="section1">Section 1</section>`

      setupFadeInAnimation()
      const section = document.getElementById('section1')!

      mockObserverCallback([{
        target: section,
        isIntersecting: true,
        intersectionRatio: 0.15,
      } as unknown as IntersectionObserverEntry])

      expect(section.style.transform).toBe('translateY(0)')
    })

    it('画面外のセクションは薄いまま', () => {
      document.body.innerHTML = `<section id="section1">Section 1</section>`

      setupFadeInAnimation()
      const section = document.getElementById('section1')!

      mockObserverCallback([{
        target: section,
        isIntersecting: false,
        intersectionRatio: 0,
      } as unknown as IntersectionObserverEntry])

      expect(section.style.opacity).toBe('0.3')
    })
  })

  describe('各セクションが順番にフェードインする', () => {
    it('スクロールに応じて上から順に表示される', () => {
      document.body.innerHTML = `
        <section id="section1">Section 1</section>
        <section id="section2">Section 2</section>
        <section id="section3">Section 3</section>
      `

      setupFadeInAnimation()
      const section1 = document.getElementById('section1')!
      const section2 = document.getElementById('section2')!
      const section3 = document.getElementById('section3')!

      mockObserverCallback([{
        target: section1,
        isIntersecting: true,
        intersectionRatio: 0.15,
      } as unknown as IntersectionObserverEntry])

      expect(section1.style.opacity).toBe('1')
      expect(section2.style.opacity).toBe('0.3')
      expect(section3.style.opacity).toBe('0.3')

      mockObserverCallback([{
        target: section2,
        isIntersecting: true,
        intersectionRatio: 0.15,
      } as unknown as IntersectionObserverEntry])

      expect(section1.style.opacity).toBe('1')
      expect(section2.style.opacity).toBe('1')
      expect(section3.style.opacity).toBe('0.3')
    })

    it('一度表示されたセクションはスクロールバックしても表示されたまま', () => {
      document.body.innerHTML = `<section id="section1">Section 1</section>`

      setupFadeInAnimation()
      const section = document.getElementById('section1')!

      mockObserverCallback([{
        target: section,
        isIntersecting: true,
        intersectionRatio: 0.15,
      } as unknown as IntersectionObserverEntry])

      expect(section.style.opacity).toBe('1')

      mockObserverCallback([{
        target: section,
        isIntersecting: false,
        intersectionRatio: 0,
      } as unknown as IntersectionObserverEntry])

      expect(section.style.opacity).toBe('1')
    })
  })
})
