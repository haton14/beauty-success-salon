import { useEffect } from 'hono/jsx'

export default function MobileMenu() {
  useEffect(() => {
    const menuToggle = document.getElementById('menuToggle')
    const mobileMenu = document.getElementById('mobileMenu')

    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden')
      })
    }

    // スムーズスクロール
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const href = link.getAttribute('href')
        if (!href) return
        const targetId = href.substring(1)
        const target = document.getElementById(targetId)

        if (target) {
          const headerHeight = 80
          const targetPosition = target.offsetTop - headerHeight

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          })

          if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden')
          }
        }
      })
    })

    // ヘッダーのシャドウ効果
    const header = document.querySelector('header')
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      if (header) {
        if (scrollTop > 100) {
          header.classList.add('shadow-md')
        } else {
          header.classList.remove('shadow-md')
        }
      }
    })

    // フェードインアニメーション
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement
          target.style.opacity = '1'
          target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll('section')
    sections.forEach(section => {
      section.style.opacity = '0.3'
      section.style.transform = 'translateY(20px)'
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      fadeInObserver.observe(section)
    })
  }, [])

  return null
}
