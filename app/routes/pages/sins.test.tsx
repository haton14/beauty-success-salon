import { describe, expect, it } from 'vitest'
import { renderRoute } from '../../test-utils'
import sinsRoute from './sins'

describe('sins酸性ストレートページ', () => {
  it('ページタイトルと主要コンテンツが表示される', async () => {
    const html = await renderRoute(sinsRoute)

    expect(html).toContain('sins 酸性ストレート')
    expect(html).toContain('このようなお悩みの方へ')
    expect(html).toContain('当店のsins酸性ストレートの特徴')
    expect(html).toContain('茨城県で一番最初に導入')
  })

  it('料金が表示される', async () => {
    const html = await renderRoute(sinsRoute)

    expect(html).toContain('ショート')
    expect(html).toContain('¥19,800〜')
    expect(html).toContain('ミディアム')
    expect(html).toContain('¥22,000〜')
    expect(html).toContain('ロング')
    expect(html).toContain('¥24,200〜')
    expect(html).toContain('※シャンプー・ブロー・カット込み')
  })

  it('施術例の写真が表示される', async () => {
    const html = await renderRoute(sinsRoute)

    expect(html).toContain('sins-top.avif')
    expect(html).toContain('sins-medium-5.avif')
    expect(html).toContain('sins-long-4.avif')
  })

  it('予約導線（電話・LINE）がある', async () => {
    const html = await renderRoute(sinsRoute)

    expect(html).toContain('href="tel:0299697700"')
    expect(html).toContain('https://lin.ee/uZbY0uQ')
  })

  it('トップページに戻れる', async () => {
    const html = await renderRoute(sinsRoute)

    expect(html).toContain('トップページに戻る')
  })
})
