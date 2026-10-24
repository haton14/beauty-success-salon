import type { FC } from 'hono/jsx'
import { useContext } from 'hono/jsx'
import { RequestContext } from 'hono/jsx-renderer'
import MobileMenu from '../../islands/MobileMenu'
import type { LayoutProps } from '../../types'
import { Button } from './Button'
import { Footer } from './Footer'
import { Header } from './Header'
import { NoticeBanner } from './NoticeBanner'

const BackToHome: FC<{ position: 'top' | 'bottom' }> = ({ position }) => (
  <div class={`container mx-auto px-4 ${position === 'top' ? 'py-4 text-left' : 'py-12 text-center'}`}>
    <Button href="/" variant="secondary" size="lg">
      ← トップページに戻る
    </Button>
  </div>
)

export const Layout: FC<LayoutProps> = ({ children, currentPage, showFullFooter = false }) => {
  // _middleware.ts でリクエストごとに取得したお知らせを描画する（SSR）。
  // テストなどRequestContextが無い場合はお知らせ無しとして扱う。
  const c = useContext(RequestContext)
  const notice = c?.get('activeNotice') ?? null

  return (
    <>
      <MobileMenu />
      <NoticeBanner notice={notice} />
      <Header currentPage={currentPage} />
      {currentPage && <BackToHome position="top" />}
      {children}
      {currentPage && <BackToHome position="bottom" />}
      <Footer showFullInfo={showFullFooter} />
    </>
  )
}
