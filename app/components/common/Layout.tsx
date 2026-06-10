import type { FC } from 'hono/jsx'
import type { LayoutProps } from '../../types'
import { Header } from './Header'
import { Footer } from './Footer'
import { Button } from './Button'
import MobileMenu from '../../islands/MobileMenu'

const BackToHome: FC<{ position: 'top' | 'bottom' }> = ({ position }) => (
  <div class={`container mx-auto px-4 text-left ${position === 'top' ? 'py-4' : 'pb-12'}`}>
    <Button href="/" variant="secondary" size="lg">
      ← トップページに戻る
    </Button>
  </div>
)

export const Layout: FC<LayoutProps> = ({ children, currentPage, showFullFooter = false }) => {
  return (
    <>
      <MobileMenu />
      <Header currentPage={currentPage} />
      {currentPage && <BackToHome position="top" />}
      {children}
      {currentPage && <BackToHome position="bottom" />}
      <Footer showFullInfo={showFullFooter} />
    </>
  )
}
