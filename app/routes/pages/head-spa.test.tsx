import { describe, expect, it } from 'vitest'
import { renderRoute } from '../../test-utils'
import headSpaRoute from './head-spa'

describe('ドライヘッドスパページ', () => {
  it('ページタイトルと主要コンテンツが表示される', async () => {
    const html = await renderRoute(headSpaRoute)

    expect(html).toContain('ドライヘッドスパ')
    expect(html).toContain('ヘッドマイスター')
    expect(html).toContain('水のヘッドスパ')
    expect(html).toContain('お客様の声')
  })

  it('料金が表示される', async () => {
    const html = await renderRoute(headSpaRoute)

    expect(html).toContain('ドライヘッドスパ（30分）')
    expect(html).toContain('¥3,000')
    expect(html).toContain('ドライヘッドスパ（60分）')
    expect(html).toContain('¥6,000')
    expect(html).toContain('¥2,750（税込）')
    expect(html).toContain('※女性限定・完全個室')
  })

  it('施術写真と資格証が表示される', async () => {
    const html = await renderRoute(headSpaRoute)

    expect(html).toContain('dry-head-spa-1.avif')
    expect(html).toContain('dry-head-license.avif')
    expect(html).toContain('body-mobility-7-straight-neck.avif')
  })

  it('予約導線（電話・LINE）がある', async () => {
    const html = await renderRoute(headSpaRoute)

    expect(html).toContain('href="tel:0299697700"')
    expect(html).toContain('https://lin.ee/uZbY0uQ')
    expect(html).toContain('※ご予約の際は「ドライヘッドスパ希望」とお伝えください')
  })
})
