import type { Child } from 'hono/jsx'

// ナビゲーション関連
export type NavLink = {
  href: string
  label: string
  key: string
}

// ページキー
export type PageKey = 'perm' | 'sins' | 'eyelash' | 'kimono' | 'staff' | 'dry-head'

// 店舗情報
export type ShopInfo = {
  name: string
  postalCode: string
  address: string
  tel: string
  telHref: string
}

// SNSリンク
export type SocialLink = {
  name: string
  url: string
  icon: 'blog' | 'instagram'
}

// 営業時間
export type BusinessHour = {
  label: string
  time: string
}

// メニュー料金
export type PriceItemType = {
  name: string
  price: string
  note?: string
}

// メニューカテゴリ
export type MenuCategory = {
  title: string
  note?: string
  linkHref?: string
  linkText?: string
  items: PriceItemType[]
}

// FAQ
export type FAQItemType = {
  question: string
  answer: string
}

// コンポーネント共通Props
export type LayoutProps = {
  children: Child
  currentPage?: PageKey
  showFullFooter?: boolean
}

export type HeaderProps = {
  currentPage?: PageKey
}

export type FooterProps = {
  showFullInfo?: boolean
}
