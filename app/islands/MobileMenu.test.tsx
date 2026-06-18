/** @jsxImportSource hono/jsx/dom */
// @vitest-environment jsdom

import { render } from 'hono/jsx/dom'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import MobileMenu from './MobileMenu'

type IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => void

let mockObserverCallback: IntersectionObserverCallback
let observedElements: Element[] = []
let unobservedElements: Element[] = []

class MockIntersectionObserver {
  constructor(callback: IntersectionObserverCallback) {
    mockObserverCallback = callback
  }
  observe(element: Element) {
    observedElements.push(element)
  }
  unobserve(element: Element) {
    unobservedElements.push(element)
  }
  disconnect() {}
}

// MobileMenu islandを実際にマウントしてuseEffectを発火させる
const mountMobileMenu = async () => {
  const container = document.createElement('div')
  document.body.appendChild(container)
  render(<MobileMenu />, container)
  // hono/jsx/dom は useEffect を requestAnimationFrame 経由で実行するため、その完了を待つ
  await new Promise((resolve) => requestAnimationFrame(() => setTimeout(resolve, 0)))
}

const setupHeaderDom = () => {
  document.body.innerHTML = `
    <header>
      <button type="button" id="menuToggle" aria-label="メニューを開く" aria-expanded="false" aria-controls="mobileMenu"></button>
      <div class="hidden" id="mobileMenu">
        <a href="#concept">私たちについて</a>
        <a href="#contact">ご予約</a>
      </div>
    </header>
  `
}

beforeEach(() => {
  document.body.innerHTML = ''
  observedElements = []
  unobservedElements = []
  vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
  vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: false }))
})

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('モバイルメニューの開閉', () => {
  it('ボタンをクリックするとメニューが開きaria-expandedが更新される', async () => {
    setupHeaderDom()
    await mountMobileMenu()

    const menuToggle = document.getElementById('menuToggle')!
    const mobileMenu = document.getElementById('mobileMenu')!

    menuToggle.click()

    expect(mobileMenu.classList.contains('hidden')).toBe(false)
    expect(menuToggle.getAttribute('aria-expanded')).toBe('true')
    expect(menuToggle.getAttribute('aria-label')).toBe('メニューを閉じる')
  })

  it('もう一度クリックするとメニューが閉じる', async () => {
    setupHeaderDom()
    await mountMobileMenu()

    const menuToggle = document.getElementById('menuToggle')!
    const mobileMenu = document.getElementById('mobileMenu')!

    menuToggle.click()
    menuToggle.click()

    expect(mobileMenu.classList.contains('hidden')).toBe(true)
    expect(menuToggle.getAttribute('aria-expanded')).toBe('false')
    expect(menuToggle.getAttribute('aria-label')).toBe('メニューを開く')
  })

  it('メニュー内のページ内リンクをクリックするとメニューが閉じる', async () => {
    setupHeaderDom()
    await mountMobileMenu()

    const menuToggle = document.getElementById('menuToggle')!
    const mobileMenu = document.getElementById('mobileMenu')!

    menuToggle.click()
    expect(mobileMenu.classList.contains('hidden')).toBe(false)

    mobileMenu.querySelector<HTMLAnchorElement>('a[href="#contact"]')!.click()

    expect(mobileMenu.classList.contains('hidden')).toBe(true)
    expect(menuToggle.getAttribute('aria-expanded')).toBe('false')
  })
})

describe('スクロール時のフェードインアニメーション', () => {
  // jsdomではgetBoundingClientRectが常に0を返すため、ビューポート下のセクションを擬似的に作る
  const createOffscreenSection = (id: string): HTMLElement => {
    const section = document.createElement('section')
    section.id = id
    section.getBoundingClientRect = () => ({ top: 2000 }) as DOMRect
    document.body.appendChild(section)
    return section
  }

  it('ビューポートより下のセクションは薄く表示され監視対象になる', async () => {
    setupHeaderDom()
    const section = createOffscreenSection('section1')

    await mountMobileMenu()

    expect(section.style.opacity).toBe('0.3')
    expect(section.style.transform).toBe('translateY(20px)')
    expect(observedElements).toContain(section)
  })

  it('表示済み（ビューポート内）のセクションは薄くならない', async () => {
    setupHeaderDom()
    const visibleSection = document.createElement('section')
    visibleSection.id = 'visible'
    document.body.appendChild(visibleSection)

    await mountMobileMenu()

    expect(visibleSection.style.opacity).toBe('')
    expect(observedElements).not.toContain(visibleSection)
  })

  it('画面に入ったセクションはくっきり表示され監視解除される', async () => {
    setupHeaderDom()
    const section = createOffscreenSection('section1')

    await mountMobileMenu()

    mockObserverCallback([
      { target: section, isIntersecting: true, intersectionRatio: 0.15 } as unknown as IntersectionObserverEntry,
    ])

    expect(section.style.opacity).toBe('1')
    expect(section.style.transform).toBe('translateY(0)')
    expect(unobservedElements).toContain(section)
  })

  it('画面外のセクションは薄いまま', async () => {
    setupHeaderDom()
    const section = createOffscreenSection('section1')

    await mountMobileMenu()

    mockObserverCallback([
      { target: section, isIntersecting: false, intersectionRatio: 0 } as unknown as IntersectionObserverEntry,
    ])

    expect(section.style.opacity).toBe('0.3')
  })

  it('reduced-motion設定時はフェードインを行わない', async () => {
    setupHeaderDom()
    const section = createOffscreenSection('section1')
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: true }))

    await mountMobileMenu()

    expect(section.style.opacity).toBe('')
    expect(observedElements).toHaveLength(0)
  })
})
