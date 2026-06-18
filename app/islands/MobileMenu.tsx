import { useEffect } from 'hono/jsx'

export default function MobileMenu() {
  useEffect(() => {
    const menuToggle = document.getElementById('menuToggle')
    const mobileMenu = document.getElementById('mobileMenu')

    if (menuToggle && mobileMenu) {
      const setMenuState = (open: boolean) => {
        mobileMenu.classList.toggle('hidden', !open)
        menuToggle.setAttribute('aria-expanded', String(open))
        menuToggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く')
      }

      menuToggle.addEventListener('click', () => {
        setMenuState(mobileMenu.classList.contains('hidden'))
      })

      // ページ内リンクをタップしたらメニューを閉じる
      // （スクロール自体は style.css の scroll-behavior: smooth が行う）
      mobileMenu.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', () => setMenuState(false))
      })
    }

    // スクロール時のセクションフェードイン
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const fadeInObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            target.style.opacity = '1'
            target.style.transform = 'translateY(0)'
            fadeInObserver.unobserve(target)
          }
        })
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    )

    document.querySelectorAll('section').forEach((section) => {
      // hydration時に表示済みのコンテンツが薄くなるのを防ぐため、ビューポートより下のセクションのみ対象
      if (section.getBoundingClientRect().top < window.innerHeight) {
        return
      }
      section.style.opacity = '0.3'
      section.style.transform = 'translateY(20px)'
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      fadeInObserver.observe(section)
    })
  }, [])

  return null
}
