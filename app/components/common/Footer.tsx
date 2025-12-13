import type { FC } from 'hono/jsx'

type Props = {
  showFullInfo?: boolean
}

export const Footer: FC<Props> = ({ showFullInfo = false }) => {
  if (showFullInfo) {
    return (
      <footer class="bg-gray-900 text-white py-8">
        <div class="container mx-auto px-4">
          <div class="text-center">
            <h2 class="text-2xl font-bold mb-4">美容室SUCCESS</h2>
            <p class="text-gray-400 mb-4">〒314-0042 茨城県鹿嶋市小山1072-88</p>
            <p class="text-gray-400 mb-4">TEL: 0299-69-7700</p>
            <div class="border-t border-gray-800 mt-8 pt-8">
              <p class="text-sm text-gray-400">Copyright &copy; 1098-2025 美容室success</p>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer class="bg-gray-900 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <p class="text-sm text-gray-400">Copyright &copy; 1098-2025 美容室success</p>
        </div>
      </div>
    </footer>
  )
}
