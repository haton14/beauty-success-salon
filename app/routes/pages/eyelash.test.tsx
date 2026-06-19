import { describe, expect, it } from 'vitest'
import { renderRoute } from '../../test-utils'
import eyelashRoute from './eyelash'

describe('まつ毛パーマページ', () => {
  it('ページタイトルと主要コンテンツが表示される', async () => {
    const html = await renderRoute(eyelashRoute)

    expect(html).toContain('まつ毛パーマ')
    expect(html).toContain('施術全体のお時間は1時間ほどです')
    expect(html).toContain('施術例')
  })

  it('料金が表示される', async () => {
    const html = await renderRoute(eyelashRoute)

    expect(html).toContain('¥2,200')
  })

  it('施術例の写真が表示される', async () => {
    const html = await renderRoute(eyelashRoute)

    expect(html).toContain('eyelash-main.avif')
    expect(html).toContain('eyelash-4.avif')
  })

  it('予約導線（電話・LINE）がある', async () => {
    const html = await renderRoute(eyelashRoute)

    expect(html).toContain('href="tel:0299697700"')
    expect(html).toContain('https://lin.ee/uZbY0uQ')
  })
})
