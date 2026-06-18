import { describe, expect, it } from 'vitest'
import { renderRoute } from '../test-utils'
import indexRoute from './index'

const renderHomePage = (): Promise<string> => renderRoute(indexRoute)

describe('トップページの文書構造', () => {
  it('店名と地域を含むh1がある', async () => {
    const html = await renderHomePage()

    expect(html).toContain('<h1')
    expect(html).toContain('美容室success | 茨城県鹿嶋市の美容室')
  })
})

describe('トップページのコンセプト', () => {
  describe('スタッフ紹介ページへ誘導される', () => {
    it('スタッフ紹介へのリンクボタンが表示される', async () => {
      const html = await renderHomePage()

      expect(html).toContain('href="/pages/staff"')
      expect(html).toContain('スタッフ紹介を見る')
    })
  })
})

describe('トップページの Menu & Price', () => {
  describe('料金についての注記が表示される', () => {
    it('税込み・現金のみの注記が確認できる', async () => {
      const html = await renderHomePage()

      expect(html).toContain('価格は全て税込みです')
      expect(html).toContain('お支払い方法は現金のみとなっております')
    })
  })

  describe('カットの料金が確認できる', () => {
    it('小中高校生の料金が改定されている', async () => {
      const html = await renderHomePage()

      expect(html).toContain('¥3,960')
      expect(html).not.toContain('¥3,310')
    })

    it('眉カットがカットセクションに含まれる', async () => {
      const html = await renderHomePage()

      expect(html).toContain('眉カット')
      expect(html).toContain('¥550')
    })
  })

  describe('カラーの料金が確認できる', () => {
    it('カラー・マニキア・ヘナの各メニューが表示される', async () => {
      const html = await renderHomePage()

      expect(html).toContain('カラー＋カット')
      expect(html).toContain('¥8,800〜')
      expect(html).toContain('カラーのみ')
      expect(html).toContain('（全体）')
      expect(html).toContain('¥6,600〜')
      expect(html).toContain('マニキア＋カット')
      expect(html).toContain('マニキアのみ')
      expect(html).toContain('¥7,700')
      expect(html).toContain('ヘナ＋カット')
      expect(html).toContain('¥9,900〜')
      expect(html).toContain('ヘナのみ')
      expect(html).toContain('¥7,700〜')
    })
  })

  describe('ストレートの料金が確認できる', () => {
    it('sins酸性ストレートの料金に「〜」が付いている', async () => {
      const html = await renderHomePage()

      expect(html).toContain('¥19,800〜')
      expect(html).toContain('¥22,000〜')
      expect(html).toContain('¥24,200〜')
    })

    it('ヒーローのsins料金表示にも「〜」が付いている', async () => {
      const html = await renderHomePage()

      expect(html).toContain('ショート ¥19,800〜 / ミディアム ¥22,000〜 / ロング ¥24,200〜')
    })

    it('縮毛矯正・ストレートパーマのメニューは表示されない', async () => {
      const html = await renderHomePage()

      expect(html).not.toContain('¥16,500')
      expect(html).not.toContain('縮毛矯正(メンズ)')
      expect(html).not.toContain('ストレートパーマ')
    })

    it('sins酸性ストレートの詳細リンクは残っている', async () => {
      const html = await renderHomePage()

      expect(html).toContain('href="/pages/sins"')
      expect(html).toContain('sins酸性ストレートを詳しく見る')
    })
  })

  describe('パーマの料金が確認できる', () => {
    it('新しいパーマメニューが表示される', async () => {
      const html = await renderHomePage()

      expect(html).toContain('パーマ')
      expect(html).toContain('¥9,900〜')
      expect(html).toContain('酸性デジタルパーマ')
      expect(html).toContain('¥17,600')
      expect(html).toContain('エアパーマ')
      expect(html).toContain('¥13,200')
      expect(html).toContain('ツイストパーマ')
      expect(html).toContain('スパイラルパーマ')
      expect(html).toContain('ツイストスパイラルパーマ')
      expect(html).toContain('¥11,000')
    })

    it('「パーマを詳しく見る」ボタンは表示されない', async () => {
      const html = await renderHomePage()

      expect(html).not.toContain('>パーマを詳しく見る<')
    })
  })

  describe('ヘッドスパの料金が確認できる', () => {
    it('セクション見出しは「ヘッドスパ」になっている', async () => {
      const html = await renderHomePage()

      expect(html).toContain('ヘッドスパ')
      expect(html).not.toContain('ヘッドスパ・トリートメント')
    })

    it('ヘッドスパの料金メニューが表示される', async () => {
      const html = await renderHomePage()

      expect(html).toContain('ドライヘッドスパ')
      expect(html).toContain('(30分)')
      expect(html).toContain('¥3,000')
      expect(html).toContain('(60分)')
      expect(html).toContain('¥6,000')
      expect(html).toContain('水のヘッドスパ')
      expect(html).toContain('(15分)')
      expect(html).toContain('¥2,750〜')
    })

    it('トリートメントとシャンプーの行は表示されない', async () => {
      const html = await renderHomePage()

      expect(html).not.toContain('¥1,320')
      expect(html).not.toContain('シャンプー</span>')
    })

    it('注記と詳細リンクは残っている', async () => {
      const html = await renderHomePage()

      expect(html).toContain('※ドライヘッドスパは女性限定・完全個室')
      expect(html).toContain('href="/pages/head-spa"')
      expect(html).toContain('ヘッドスパを詳しく見る')
    })
  })

  describe('ヘアセット・着付けの料金が確認できる', () => {
    it('新しい料金表が表示される', async () => {
      const html = await renderHomePage()

      expect(html).toContain('ヘアセット')
      expect(html).toContain('¥4,400')
      expect(html).toContain('メイク')
      expect(html).toContain('¥2,200')
      expect(html).toContain('着付け')
      expect(html).toContain('（振袖）')
      expect(html).toContain('¥11,000')
      expect(html).toContain('（留袖、訪問着、袴）')
      expect(html).toContain('¥8,800')
      expect(html).toContain('成人式')
      expect(html).toContain('(振袖着付け、ヘアアップ、メイク)')
      expect(html).toContain('¥22,000')
      expect(html).toContain('七五三着付け')
      expect(html).toContain('(ヘアセット、着付け、メイク)')
      expect(html).toContain('¥12,100')
    })

    it('夏の浴衣着付けの行は表示されない', async () => {
      const html = await renderHomePage()

      expect(html).not.toContain('夏の浴衣着付け')
    })

    it('着物ページへの詳細リンクが表示される', async () => {
      const html = await renderHomePage()

      expect(html).toContain('href="/pages/kimono"')
      expect(html).toContain('ヘアセット・着付けを詳しく見る')
    })
  })

  describe('まつ毛パーマのメニューが確認できる', () => {
    it('セクション名が「まつ毛パーマ」になっている', async () => {
      const html = await renderHomePage()

      expect(html).toContain('まつ毛パーマ')
      expect(html).not.toContain('その他メニュー')
      expect(html).not.toContain('※学生は眉カット無料')
    })

    it('まつ毛パーマの料金と写真が表示される', async () => {
      const html = await renderHomePage()

      expect(html).toContain('¥2,200')
      expect(html).toContain('https://images.success-salon.haton14.com/eyelash-main.avif')
    })

    it('まつ毛ページへの詳細リンクが表示される', async () => {
      const html = await renderHomePage()

      expect(html).toContain('href="/pages/eyelash"')
      expect(html).toContain('まつ毛パーマを詳しく見る')
    })
  })
})

describe('トップページの予約セクション', () => {
  it('電話とLINEの予約リンクが表示される', async () => {
    const html = await renderHomePage()

    expect(html).toContain('href="tel:0299697700"')
    expect(html).toContain('0299-69-7700')
    expect(html).toContain('https://lin.ee/uZbY0uQ')
    expect(html).toContain('LINEから予約する')
  })
})

describe('トップページの営業時間・アクセス', () => {
  it('郵便番号が修正されている', async () => {
    const html = await renderHomePage()

    expect(html).toContain('〒311-2222')
    expect(html).not.toContain('〒314-0042')
  })

  it('定休日に第一月曜日が含まれる', async () => {
    const html = await renderHomePage()

    expect(html).toContain('火曜日・第一月曜日')
  })

  it('Googleマップが表示される', async () => {
    const html = await renderHomePage()

    expect(html).toContain('https://www.google.com/maps/embed')
    expect(html).toContain('title="美容室successの地図（Googleマップ）"')
  })
})
