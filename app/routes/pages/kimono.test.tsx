import { describe, expect, it } from 'vitest'
import { renderRoute } from '../../test-utils'
import kimonoRoute from './kimono'

describe('ヘアセット・着付けページ', () => {
  it('ページタイトルと主要コンテンツが表示される', async () => {
    const html = await renderRoute(kimonoRoute)

    expect(html).toContain('ヘアセット・着付け')
    expect(html).toContain('◇成人式◇')
    expect(html).toContain('◇訪問着 留袖◇')
    expect(html).toContain('◇七五三◇')
  })

  it('料金が表示される', async () => {
    const html = await renderRoute(kimonoRoute)

    expect(html).toContain('3点セット: 22,000円')
    expect(html).toContain('8,800円')
    expect(html).toContain('¥4,400')
    expect(html).toContain('¥5,500')
    expect(html).toContain('¥2,200')
  })

  it('着付けの写真が表示される', async () => {
    const html = await renderRoute(kimonoRoute)

    expect(html).toContain('seijinshiki-main.avif')
    expect(html).toContain('houmongi-1.avif')
    expect(html).toContain('shichigosan-4-red-pair.avif')
  })

  it('予約導線（電話・LINE）がある', async () => {
    const html = await renderRoute(kimonoRoute)

    expect(html).toContain('href="tel:0299697700"')
    expect(html).toContain('https://lin.ee/uZbY0uQ')
  })
})
