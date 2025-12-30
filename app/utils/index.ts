import { IMAGE_BASE_URL } from '../constants'

/**
 * 画像URLを生成する
 * @param filename - 画像ファイル名 (例: 'top.avif')
 * @returns 完全な画像URL
 */
export const getImageUrl = (filename: string): string => {
  return `${IMAGE_BASE_URL}/${filename}`
}

/**
 * 電話番号をtel:リンク用にフォーマットする
 * @param tel - 電話番号 (例: '0299-69-7700')
 * @returns tel:リンク用の電話番号 (例: 'tel:0299697700')
 */
export const formatTelHref = (tel: string): string => {
  return `tel:${tel.replace(/-/g, '')}`
}

/**
 * 価格を表示用にフォーマットする
 * @param price - 価格（数値）
 * @returns フォーマットされた価格文字列
 */
export const formatPrice = (price: number): string => {
  return `¥${price.toLocaleString()}`
}

/**
 * CSSクラスを結合する
 * @param classes - クラス名の配列（falsy値は無視される）
 * @returns 結合されたクラス文字列
 */
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ')
}
