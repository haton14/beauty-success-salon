import type { FC } from 'hono/jsx'

export const HeroButtons: FC = () => {
  return (
    <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
      <a
        href="#sins"
        class="bg-gradient-to-b from-blue-700 to-blue-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-800 hover:to-blue-900 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-blue-900 whitespace-nowrap"
      >
        sins 酸性ストレートについて
      </a>
      <a
        href="#contact"
        class="bg-white text-blue-800 border-2 border-blue-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 whitespace-nowrap"
      >
        ご予約はこちら
      </a>
    </div>
  )
}
