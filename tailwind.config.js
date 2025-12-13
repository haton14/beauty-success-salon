/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary (Blue) - メインのブランドカラー
        primary: {
          50: '#eff6ff',   // bg-blue-50
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',  // from-blue-600
          700: '#1d4ed8',  // to-blue-700
          800: '#1e40af',  // border-blue-800, bg-blue-800
          900: '#1e3a8a',  // text-blue-900
          DEFAULT: '#1d4ed8',
        },
        // Secondary (Green/LINE) - LINEボタン用
        secondary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',  // from-green-500
          600: '#16a34a',  // to-green-600
          700: '#15803d',  // border-green-700
          800: '#166534',
          900: '#14532d',
          DEFAULT: '#22c55e',
        },
        // Accent (Teal) - パーマページなどのアクセント
        accent: {
          50: '#f0fdfa',   // bg-teal-50
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',  // from-teal-600
          700: '#0f766e',  // to-teal-700
          800: '#115e59',  // text-teal-800
          900: '#134e4a',  // text-teal-900
          DEFAULT: '#0d9488',
        },
        // Highlight (Purple) - 特別なセクション用
        highlight: {
          50: '#faf5ff',   // bg-purple-50
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',  // from-purple-600
          700: '#7e22ce',  // to-purple-700
          800: '#6b21a8',  // text-purple-800
          900: '#581c87',
          DEFAULT: '#9333ea',
        },
      },
      // Typography - 見出しサイズの統一
      fontSize: {
        'heading-1': ['2.25rem', { lineHeight: '2.5rem', fontWeight: '700' }],   // 36px - ページタイトル
        'heading-2': ['1.875rem', { lineHeight: '2.25rem', fontWeight: '700' }], // 30px - セクションタイトル
        'heading-3': ['1.5rem', { lineHeight: '2rem', fontWeight: '700' }],      // 24px - カードタイトル
        'heading-4': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '600' }],  // 20px - サブセクション
      },
      // Border Radius - 統一された角丸
      borderRadius: {
        'button': '9999px',  // rounded-full - ボタン用
        'card': '1rem',      // rounded-2xl (16px) - カード用
        'section': '1.5rem', // rounded-3xl (24px) - 大きなセクション用
      },
      // Spacing - セクションパディングの統一
      spacing: {
        'section': '5rem',      // py-20 (80px) - メインセクション
        'section-sm': '4rem',   // py-16 (64px) - 小さいセクション
      },
    },
  },
  plugins: [],
}