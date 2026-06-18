import type { FC } from 'hono/jsx'
import { SHOP_INFO, SOCIAL_LINKS } from '../../constants'
import type { FooterProps, SocialLink } from '../../types'
import { getCopyrightYears } from '../../utils'

const iconPaths: Record<SocialLink['icon'], string> = {
  blog: 'M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z',
  instagram:
    'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
}

const iconStyles: Record<SocialLink['icon'], string> = {
  blog: 'bg-green-700 hover:bg-green-800 transition-colors duration-200',
  instagram:
    'bg-linear-to-r from-amber-700 via-pink-700 to-purple-700 hover:opacity-90 transition-opacity duration-200',
}

export const Footer: FC<FooterProps> = ({ showFullInfo = false }) => {
  // レンダリング時(リクエスト内)に評価する。モジュール最上位だと Workers で1970になる
  const copyrightYears = getCopyrightYears()
  return (
    <footer class="bg-gray-100 text-gray-700 py-12">
      <div class="container mx-auto px-4">
        <div class="text-center">
          {showFullInfo && (
            <>
              <h2 class="text-2xl font-bold mb-4 text-gray-800">{SHOP_INFO.name}</h2>
              <address class="not-italic">
                <p class="text-gray-600 mb-1">
                  {SHOP_INFO.postalCode} {SHOP_INFO.address}
                </p>
                <p class="text-gray-600 mb-8">TEL: {SHOP_INFO.tel}</p>
              </address>

              {/* SNSリンク */}
              <div class="mb-8">
                <p class="text-sm text-gray-500 mb-4">Follow Us</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      class={`flex items-center gap-2 text-white px-5 py-2.5 rounded-lg ${iconStyles[link.icon]}`}
                    >
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d={iconPaths[link.icon]} />
                      </svg>
                      <span>{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div class="border-t border-gray-300 pt-6">
                <p class="text-sm text-gray-500">
                  Copyright &copy; {copyrightYears} {SHOP_INFO.name}
                </p>
              </div>
            </>
          )}
          {!showFullInfo && (
            <p class="text-sm text-gray-500">
              Copyright &copy; {copyrightYears} {SHOP_INFO.name}
            </p>
          )}
        </div>
      </div>
    </footer>
  )
}
