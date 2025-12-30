import type { FC } from 'hono/jsx'
import type { LayoutProps } from '../../types'
import { Header } from './Header'
import { Footer } from './Footer'
import MobileMenu from '../../islands/MobileMenu'

export const Layout: FC<LayoutProps> = ({ children, currentPage, showFullFooter = false }) => {
  return (
    <>
      <MobileMenu />
      <Header currentPage={currentPage} />
      {children}
      <Footer showFullInfo={showFullFooter} />
    </>
  )
}
