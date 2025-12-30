import type { FC } from 'hono/jsx'
import type { HeaderProps } from '../../types'
import { NAV_LINKS, SHOP_INFO } from '../../constants'

export const Header: FC<HeaderProps> = ({ currentPage }) => {

  return (
    <header class="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <a href="/" class="text-2xl font-bold text-blue-900">{SHOP_INFO.name}</a>
          </div>
          <div class="desktop-nav items-center space-x-3 xl:space-x-6" style="display: none;">
            {currentPage ? (
              <a href="/" class="text-gray-700 hover:text-blue-800 transition text-sm lg:text-base">トップ</a>
            ) : (
              <>
                <a href="#concept" class="text-gray-700 hover:text-blue-800 transition text-sm lg:text-base">私たちについて</a>
                <a href="#menu" class="text-gray-700 hover:text-blue-800 transition text-sm lg:text-base">メニュー</a>
              </>
            )}
            <span class="text-gray-400 hidden lg:inline">|</span>
            {NAV_LINKS.map(link => (
              <a
                key={link.key}
                href={link.href}
                class={currentPage === link.key
                  ? 'text-blue-800 font-bold border-b-2 border-blue-800 text-sm lg:text-base'
                  : 'text-gray-700 hover:text-blue-800 transition text-sm lg:text-base'}
              >
                {link.label}
              </a>
            ))}
            <span class="text-gray-400 hidden lg:inline">|</span>
            <a
              href="/pages/staff"
              class={currentPage === 'staff'
                ? 'text-blue-800 font-bold border-b-2 border-blue-800 text-sm lg:text-base'
                : 'text-gray-700 hover:text-blue-800 transition text-sm lg:text-base'}
            >
              スタッフ
            </a>
            <a
              href={currentPage ? '/#contact' : '#contact'}
              class="bg-gradient-to-b from-blue-600 to-blue-700 text-white px-3 lg:px-4 py-2 rounded-full font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 border border-blue-800 text-sm lg:text-base"
            >
              ご予約
            </a>
          </div>
          <button class="lg:hidden" id="menuToggle">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
      {/* モバイルメニュー */}
      <div class="hidden lg:hidden bg-white border-t" id="mobileMenu">
        <div class="px-4 py-4 space-y-3">
          <div class="pb-2 border-b border-gray-200">
            {currentPage ? (
              <a href="/" class="block text-gray-700 hover:text-blue-800">トップ</a>
            ) : (
              <>
                <a href="#concept" class="block text-gray-700 hover:text-blue-800">私たちについて</a>
                <a href="#menu" class="block text-gray-700 hover:text-blue-800 mt-2">メニュー</a>
              </>
            )}
          </div>
          <div class="pb-2 border-b border-gray-200">
            <p class="text-xs text-gray-500 mb-2">サービス</p>
            {NAV_LINKS.map(link => (
              <a
                key={link.key}
                href={link.href}
                class={`block mt-2 ${currentPage === link.key ? 'text-blue-800 font-bold' : 'text-gray-700 hover:text-blue-800'}`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div>
            <a
              href="/pages/staff"
              class={`block ${currentPage === 'staff' ? 'text-blue-800 font-bold' : 'text-gray-700 hover:text-blue-800'}`}
            >
              スタッフ
            </a>
          </div>
          <a
            href={currentPage ? '/#contact' : '#contact'}
            class="block bg-gradient-to-b from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full font-bold text-center shadow-md border border-blue-800"
          >
            ご予約
          </a>
        </div>
      </div>
    </header>
  )
}
