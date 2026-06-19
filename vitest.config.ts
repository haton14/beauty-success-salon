import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // DOMが必要なテスト（MobileMenu.test.tsx）はファイル先頭の
    // `// @vitest-environment jsdom` で個別に指定する
    environment: 'node',
    include: ['app/**/*.test.{ts,tsx}'],
  },
})
