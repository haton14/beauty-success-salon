import { describe, expect, it } from 'vitest'
import { render } from '../../test-utils'
import type { Notice } from '../../types'
import { NoticeBanner } from './NoticeBanner'

const notice: Notice = { message: '本日は臨時休業します', startAt: '', endAt: '', enabled: true }

describe('お知らせバナー', () => {
  it('お知らせがあれば本文を表示する', () => {
    const html = render(<NoticeBanner notice={notice} />)

    expect(html).toContain('本日は臨時休業します')
    expect(html).toContain('role="alert"')
  })

  it('改行を保持して表示する', () => {
    const html = render(<NoticeBanner notice={{ ...notice, message: '1行目\n2行目' }} />)

    expect(html).toContain('whitespace-pre-line')
    expect(html).toContain('1行目\n2行目')
  })

  it('お知らせが無ければ何も描画しない', () => {
    const html = render(<NoticeBanner notice={null} />)

    expect(html).toBe('')
  })

  it('本文のHTMLをエスケープする', () => {
    const html = render(<NoticeBanner notice={{ ...notice, message: '<script>alert(1)</script>' }} />)

    expect(html).not.toContain('<script>')
    expect(html).toContain('&lt;script&gt;')
  })
})
