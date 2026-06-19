import type { FC } from 'hono/jsx'
import MobileMenu from '../../islands/MobileMenu'
import NoticeBanner from '../../islands/NoticeBanner'
import type { LayoutProps } from '../../types'
import { Button } from './Button'
import { Footer } from './Footer'
import { Header } from './Header'

const BackToHome: FC<{ position: 'top' | 'bottom' }> = ({ position }) => (
  <div class={`container mx-auto px-4 ${position === 'top' ? 'py-4 text-left' : 'py-12 text-center'}`}>
    <Button href="/" variant="secondary" size="lg">
      ← トップページに戻る
    </Button>
  </div>
)

export const Layout: FC<LayoutProps> = ({ children, currentPage, showFullFooter = false }) => {
  return (
    <>
      <MobileMenu />
      <NoticeBanner />
      <Header currentPage={currentPage} />
      {currentPage && <BackToHome position="top" />}
      {children}
      {currentPage && <BackToHome position="bottom" />}
      <Footer showFullInfo={showFullFooter} />
    </>
  )
}
