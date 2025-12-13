import type { FC, Child } from 'hono/jsx'
import { Header } from './Header'
import { Footer } from './Footer'
import MobileMenu from '../../islands/MobileMenu'

type Props = {
  children: Child
  currentPage?: string
  showFullFooter?: boolean
}

export const Layout: FC<Props> = ({ children, currentPage, showFullFooter = false }) => {
  return (
    <>
      <MobileMenu />
      <Header currentPage={currentPage} />
      {children}
      <Footer showFullInfo={showFullFooter} />
    </>
  )
}
