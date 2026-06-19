import { describe, expect, it } from 'vitest'
import { renderRoute } from '../../test-utils'
import { getYearsInBusiness } from '../../utils'
import staffRoute from './staff'

describe('スタッフ紹介ページ', () => {
  it('ページタイトルとスタッフ情報が表示される', async () => {
    const html = await renderRoute(staffRoute)

    expect(html).toContain('スタッフ紹介')
    expect(html).toContain('オーナースタイリスト')
    expect(html).toContain('スタイリスト')
    expect(html).toContain('私たちの想い')
  })

  it('スタッフの紹介文が表示される', async () => {
    const html = await renderRoute(staffRoute)

    expect(html).toContain('再現性のあるカットに仕上げます')
    expect(html).toContain('オールハンドで、頭皮を柔らかくしたり')
  })

  it('「得意な技術」リストと経験年数表記は表示されない', async () => {
    const html = await renderRoute(staffRoute)

    expect(html).not.toContain('得意な技術')
    expect(html).not.toContain('経験年数')
    expect(html).not.toContain('年の経験を持つ')
  })

  it('メッセージの営業年数は動的に算出されて表示される', async () => {
    const html = await renderRoute(staffRoute)
    const years = getYearsInBusiness()

    expect(html).toContain(`夫婦で営んで${years}年`)
  })

  it('スタッフの写真が表示される', async () => {
    const html = await renderRoute(staffRoute)

    expect(html).toContain('staff-1-male.avif')
    expect(html).toContain('staff-2-female.avif')
  })

  it('予約導線（電話・LINE）がある', async () => {
    const html = await renderRoute(staffRoute)

    expect(html).toContain('href="tel:0299697700"')
    expect(html).toContain('https://lin.ee/uZbY0uQ')
  })
})
