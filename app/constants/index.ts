import type { NavLink, ShopInfo, SocialLink, BusinessHour, FAQItemType } from '../types'

// ナビゲーションリンク
export const NAV_LINKS: NavLink[] = [
  { href: '/pages/head-spa', label: 'ドライヘッドスパ', key: 'head-spa' },
  { href: '/pages/sins', label: 'sins 酸性ストレート', key: 'sins' },
  { href: '/pages/eyelash', label: 'まつ毛パーマ', key: 'eyelash' },
  { href: '/pages/kimono', label: 'ヘアセット・着付け', key: 'kimono' },
]

// 店舗情報
export const SHOP_INFO: ShopInfo = {
  name: '美容室success',
  postalCode: '〒311-2222',
  address: '茨城県鹿嶋市小山1072-88',
  tel: '0299-69-7700',
  telHref: 'tel:0299697700',
}

// LINE予約URL
export const LINE_URL = 'https://lin.ee/uZbY0uQ'

// SNSリンク
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: '店舗ブログ',
    url: 'https://ameblo.jp/success7700/',
    icon: 'blog',
  },
  {
    name: '@7700success',
    url: 'https://www.instagram.com/7700success/',
    icon: 'instagram',
  },
]

// 営業時間
export const BUSINESS_HOURS: BusinessHour[] = [
  { label: '営業時間', time: '9:00 - 19:00' },
  { label: '受付(カット)', time: '9:00 - 18:00' },
  { label: '受付(カラー・パーマ)', time: '9:00 - 17:00' },
  { label: '定休日', time: '火曜日・第一月曜日' },
]

// アクセス情報
export const ACCESS_INFO = {
  parking: '駐車場あり',
  stations: [
    '最寄り駅：荒野台駅から車で約5分',
    '鹿島神宮駅から車で約10分',
  ],
}

// Google Maps埋め込みURL
export const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6454.854729781947!2d140.626995!3d36.009856!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x602254687abc2475%3A0xeca6e6bd9141c2e3!2z576O5a655a6kc3VjY2Vzcy_jg5jjg4Pjg4njgrnjg5E!5e0!3m2!1sja!2sjp!4v1679374360791!5m2!1sja!2sjp'

// 画像ベースURL
export const IMAGE_BASE_URL = 'https://images.success-salon.haton14.com'

// FAQ (sins酸性ストレート)
export const SINS_FAQ: FAQItemType[] = [
  {
    question: '従来の縮毛矯正とは何が違うのですか？',
    answer:
      'sins酸性ストレートは髪に優しい酸性薬剤を使用します。アルカリを使わないため、キューティクルを開かずに施術でき、髪へのダメージを最小限に抑えながら自然なストレートヘアを実現します。',
  },
  {
    question: 'どのくらいの頻度で施術が必要ですか？',
    answer:
      'sins酸性ストレートは約4〜6ヶ月効果が持続します。個人差はありますが、通常は4〜6ヶ月に1回の施術で美しいストレートヘアを保つことができます。',
  },
  {
    question: 'カラーリングとの同時施術は可能ですか？',
    answer:
      'はい、可能です。sins酸性ストレートは髪へのダメージが少ないため、カラーリングと同時施術でも髪への負担を最小限に抑えられます。詳しくはご相談ください。',
  },
  {
    question: '痛んだ髪でも施術できますか？',
    answer:
      '痛んだ髪にもおすすめです。sins酸性ストレートにはトリートメント効果があり、施術により髪質改善が期待できます。縮毛矯正で傷んだ髪にも艶を取り戻します。',
  },
]

// sins酸性ストレート料金
export const SINS_PRICES = {
  short: '¥19,800',
  medium: '¥22,000',
  long: '¥24,200',
}

// Copyright
export const COPYRIGHT_YEAR = '1098-2025'
