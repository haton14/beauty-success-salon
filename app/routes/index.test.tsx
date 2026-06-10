import { describe, it, expect } from 'vitest'
import { HeroButtons } from '../components/pages/home/HeroButtons'
import indexRoute from './index'

const render = (component: any): string => component.toString()

const renderHomePage = (): string => {
  let rendered: any
  const mockContext = {
    render: (content: any) => {
      rendered = content
      return content
    },
  }
  indexRoute[0](mockContext as any, async () => {})
  return rendered.toString()
}

describe('トップページのヒーローボタン', () => {
  describe('訪問者がメインサービスと予約へ誘導される', () => {
    it('sinsサービスの詳細へ移動できる', () => {
      const html = render(HeroButtons({}))

      expect(html).toContain('href="#sins"')
      expect(html).toContain('sins 酸性ストレートについて')
    })

    it('予約セクションへ移動できる', () => {
      const html = render(HeroButtons({}))

      expect(html).toContain('href="#contact"')
      expect(html).toContain('ご予約はこちら')
    })
  })

  describe('ボタンのテキストが見切れない', () => {
    it('sinsボタンのテキストは改行されない', () => {
      const html = render(HeroButtons({}))

      const sinsButtonMatch = html.match(/<a[^>]*href="#sins"[^>]*class="([^"]*)"[^>]*>/)
      expect(sinsButtonMatch).toBeTruthy()
      expect(sinsButtonMatch![1]).toContain('whitespace-nowrap')
    })

    it('予約ボタンのテキストは改行されない', () => {
      const html = render(HeroButtons({}))

      const contactButtonMatch = html.match(/<a[^>]*href="#contact"[^>]*class="([^"]*)"[^>]*>/)
      expect(contactButtonMatch).toBeTruthy()
      expect(contactButtonMatch![1]).toContain('whitespace-nowrap')
    })
  })

  describe('スマートフォンでも操作しやすい', () => {
    it('画面幅に応じてボタンの並びが変わる', () => {
      const html = render(HeroButtons({}))

      expect(html).toContain('flex flex-col sm:flex-row')
    })

    it('ボタンはタップしやすい丸みのある形状になっている', () => {
      const html = render(HeroButtons({}))

      const sinsButtonMatch = html.match(/<a[^>]*href="#sins"[^>]*class="([^"]*)"[^>]*>/)
      const contactButtonMatch = html.match(/<a[^>]*href="#contact"[^>]*class="([^"]*)"[^>]*>/)

      expect(sinsButtonMatch![1]).toContain('rounded-full')
      expect(contactButtonMatch![1]).toContain('rounded-full')
    })
  })

  describe('ボタンの視覚的な区別ができる', () => {
    it('sinsボタンは目立つ青色で表示される', () => {
      const html = render(HeroButtons({}))

      const sinsButtonMatch = html.match(/<a[^>]*href="#sins"[^>]*class="([^"]*)"[^>]*>/)
      expect(sinsButtonMatch).toBeTruthy()
      expect(sinsButtonMatch![1]).toContain('from-blue-700')
      expect(sinsButtonMatch![1]).toContain('to-blue-800')
    })

    it('予約ボタンは白背景で控えめに表示される', () => {
      const html = render(HeroButtons({}))

      const contactButtonMatch = html.match(/<a[^>]*href="#contact"[^>]*class="([^"]*)"[^>]*>/)
      expect(contactButtonMatch).toBeTruthy()
      expect(contactButtonMatch![1]).toContain('bg-white')
      expect(contactButtonMatch![1]).toContain('border-blue-800')
    })
  })
})

describe('トップページのコンセプト', () => {
  describe('スタッフ紹介ページへ誘導される', () => {
    it('スタッフ紹介へのリンクボタンが表示される', () => {
      const html = renderHomePage()

      expect(html).toContain('href="/pages/staff"')
      expect(html).toContain('スタッフ紹介を見る')
    })
  })
})

describe('トップページの Menu & Price', () => {
  describe('料金についての注記が表示される', () => {
    it('税込み・現金のみの注記が確認できる', () => {
      const html = renderHomePage()

      expect(html).toContain('価格は全て税込みです')
      expect(html).toContain('お支払い方法は現金のみとなっております')
    })
  })

  describe('カットの料金が確認できる', () => {
    it('小中高校生の料金が改定されている', () => {
      const html = renderHomePage()

      expect(html).toContain('¥3,960')
      expect(html).not.toContain('¥3,310')
    })

    it('眉カットがカットセクションに含まれる', () => {
      const html = renderHomePage()

      expect(html).toContain('眉カット')
      expect(html).toContain('¥550')
    })
  })

  describe('カラーの料金が確認できる', () => {
    it('カラー・マニキア・ヘナの各メニューが表示される', () => {
      const html = renderHomePage()

      expect(html).toContain('カラー＋カット')
      expect(html).toContain('¥8,800〜')
      expect(html).toContain('カラーのみ（全体）')
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
    it('sins酸性ストレートの料金に「〜」が付いている', () => {
      const html = renderHomePage()

      expect(html).toContain('¥19,800〜')
      expect(html).toContain('¥22,000〜')
      expect(html).toContain('¥24,200〜')
    })

    it('ヒーローのsins料金表示にも「〜」が付いている', () => {
      const html = renderHomePage()

      expect(html).toContain('ショート ¥19,800〜 / ミディアム ¥22,000〜 / ロング ¥24,200〜')
    })

    it('縮毛矯正・ストレートパーマのメニューは表示されない', () => {
      const html = renderHomePage()

      expect(html).not.toContain('¥16,500')
      expect(html).not.toContain('縮毛矯正(メンズ)')
      expect(html).not.toContain('ストレートパーマ')
    })

    it('sins酸性ストレートの詳細リンクは残っている', () => {
      const html = renderHomePage()

      expect(html).toContain('href="/pages/sins"')
      expect(html).toContain('sins酸性ストレートを詳しく見る')
    })
  })

  describe('パーマの料金が確認できる', () => {
    it('新しいパーマメニューが表示される', () => {
      const html = renderHomePage()

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

    it('「パーマを詳しく見る」ボタンは表示されない', () => {
      const html = renderHomePage()

      expect(html).not.toContain('>パーマを詳しく見る<')
    })
  })

  describe('ヘッドスパの料金が確認できる', () => {
    it('セクション見出しは「ヘッドスパ」になっている', () => {
      const html = renderHomePage()

      expect(html).toContain('ヘッドスパ')
      expect(html).not.toContain('ヘッドスパ・トリートメント')
    })

    it('ヘッドスパの料金メニューが表示される', () => {
      const html = renderHomePage()

      expect(html).toContain('ドライヘッドスパ (30分)')
      expect(html).toContain('¥3,000')
      expect(html).toContain('ドライヘッドスパ (60分)')
      expect(html).toContain('¥6,000')
      expect(html).toContain('水のヘッドスパ (15分)')
      expect(html).toContain('¥2,750〜')
    })

    it('トリートメントとシャンプーの行は表示されない', () => {
      const html = renderHomePage()

      expect(html).not.toContain('¥1,320')
      expect(html).not.toContain('シャンプー</span>')
    })

    it('注記と詳細リンクは残っている', () => {
      const html = renderHomePage()

      expect(html).toContain('※ドライヘッドスパは女性限定・完全個室')
      expect(html).toContain('href="/pages/head-spa"')
      expect(html).toContain('ヘッドスパを詳しく見る')
    })
  })

  describe('ヘアセット・着付けの料金が確認できる', () => {
    it('新しい料金表が表示される', () => {
      const html = renderHomePage()

      expect(html).toContain('ヘアセット')
      expect(html).toContain('¥4,400')
      expect(html).toContain('メイク')
      expect(html).toContain('¥2,200')
      expect(html).toContain('着付け（振袖）')
      expect(html).toContain('¥11,000')
      expect(html).toContain('着付け（留袖、訪問着、袴）')
      expect(html).toContain('¥8,800')
      expect(html).toContain('成人式(振袖着付け、ヘアアップ、メイク)')
      expect(html).toContain('¥22,000')
      expect(html).toContain('七五三着付け(ヘアセット、着付け、メイク)')
      expect(html).toContain('¥12,100')
    })

    it('夏の浴衣着付けの行は表示されない', () => {
      const html = renderHomePage()

      expect(html).not.toContain('夏の浴衣着付け')
    })

    it('着物ページへの詳細リンクが表示される', () => {
      const html = renderHomePage()

      expect(html).toContain('href="/pages/kimono"')
      expect(html).toContain('ヘアセット・着付けを詳しく見る')
    })
  })

  describe('まつ毛パーマのメニューが確認できる', () => {
    it('セクション名が「まつ毛パーマ」になっている', () => {
      const html = renderHomePage()

      expect(html).toContain('まつ毛パーマ')
      expect(html).not.toContain('その他メニュー')
      expect(html).not.toContain('※学生は眉カット無料')
    })

    it('まつ毛パーマの料金と写真が表示される', () => {
      const html = renderHomePage()

      expect(html).toContain('¥2,200')
      expect(html).toContain('https://images.success-salon.haton14.com/eyelash-main.avif')
    })

    it('まつ毛ページへの詳細リンクが表示される', () => {
      const html = renderHomePage()

      expect(html).toContain('href="/pages/eyelash"')
      expect(html).toContain('まつ毛パーマを詳しく見る')
    })
  })
})

describe('トップページの営業時間・アクセス', () => {
  it('郵便番号が修正されている', () => {
    const html = renderHomePage()

    expect(html).toContain('〒311-2222')
    expect(html).not.toContain('〒314-0042')
  })

  it('定休日に第一月曜日が含まれる', () => {
    const html = renderHomePage()

    expect(html).toContain('火曜日・第一月曜日')
  })
})
