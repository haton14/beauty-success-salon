import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['app/**/*.test.{ts,tsx}'],
  },
  resolve: {
    alias: {
      '@': '/Users/haton14/beauty-salon-success/app',
    },
  },
})
