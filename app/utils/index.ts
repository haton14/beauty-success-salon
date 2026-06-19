import { FOUNDED_YEAR, IMAGE_BASE_URL } from '../constants'

/**
 * 画像URLを生成する
 * @param filename - 画像ファイル名 (例: 'top.avif')
 * @returns 完全な画像URL
 */
export const getImageUrl = (filename: string): string => {
  return `${IMAGE_BASE_URL}/${filename}`
}

/**
 * 創業からの満年数を返す（例: 1998年創業で2026年なら28）
 * 「◯年目」と表示する場合は +1 する
 */
export const getYearsInBusiness = (): number => {
  return new Date().getFullYear() - FOUNDED_YEAR
}

/**
 * コピーライト表記の年期間を返す（例: '1998-2026'）
 * ※必ずレンダリング時(リクエスト内)に呼ぶこと。Cloudflare Workers では
 *   モジュール最上位で new Date() を評価すると 1970 に固定されるため。
 */
export const getCopyrightYears = (): string => {
  return `${FOUNDED_YEAR}-${new Date().getFullYear()}`
}
