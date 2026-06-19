import { describe, expect, it } from 'vitest'
import { render } from '../../test-utils'
import { AdminView } from './index'

describe('お知らせ管理画面', () => {
  it('保存フォームの主要な入力欄が表示される', () => {
    const html = render(AdminView({ notice: null, saved: false, kvAvailable: true, userEmail: null }))

    expect(html).toContain('お知らせ管理')
    expect(html).toContain('method="post"')
    expect(html).toContain('name="message"')
    expect(html).toContain('name="startAt"')
    expect(html).toContain('name="endAt"')
    expect(html).toContain('name="enabled"')
  })

  it('トップページへのリンクがある', () => {
    const html = render(AdminView({ notice: null, saved: false, kvAvailable: true, userEmail: null }))

    expect(html).toContain('href="/"')
    expect(html).toContain('トップページを見る')
  })

  it('既存のお知らせが初期値として埋め込まれる', () => {
    const html = render(
      AdminView({
        notice: { message: 'こんにちは', startAt: '2026-06-19T13:00:00+09:00', endAt: '', enabled: true },
        saved: false,
        kvAvailable: true,
        userEmail: 'owner@example.com',
      })
    )

    expect(html).toContain('こんにちは')
    expect(html).toContain('2026-06-19T13:00')
    expect(html).toContain('owner@example.com')
    expect(html).toContain('checked')
  })

  it('KV未接続なら警告が表示される', () => {
    const html = render(AdminView({ notice: null, saved: false, kvAvailable: false, userEmail: null }))

    expect(html).toContain('KV が接続されていません')
  })

  it('保存後はステータスメッセージが表示される', () => {
    const html = render(AdminView({ notice: null, saved: true, kvAvailable: true, userEmail: null }))

    expect(html).toContain('保存しました')
  })
})
