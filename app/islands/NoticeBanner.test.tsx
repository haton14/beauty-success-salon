/** @jsxImportSource hono/jsx/dom */
// @vitest-environment jsdom

import { render } from 'hono/jsx/dom'
import { afterEach, describe, expect, it, vi } from 'vitest'
import type { Notice } from '../types'
import NoticeBanner from './NoticeBanner'

const activeNotice: Notice = { message: '本日は臨時休業します', startAt: '', endAt: '', enabled: true }

const mockFetchNotice = (notice: Notice | null) => {
  globalThis.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => ({ notice }),
  }) as unknown as typeof fetch
}

const mountBanner = () => {
  const container = document.createElement('div')
  document.body.appendChild(container)
  render(<NoticeBanner />, container)
  return container
}

afterEach(() => {
  vi.restoreAllMocks()
  document.body.innerHTML = ''
})

describe('NoticeBanner', () => {
  it('お知らせがあればバナーを表示する', async () => {
    mockFetchNotice(activeNotice)
    const container = mountBanner()

    await vi.waitFor(() => {
      expect(container.textContent).toContain('本日は臨時休業します')
    })
    expect(container.querySelector('[role="alert"]')).not.toBeNull()
  })

  it('お知らせが無ければ何も描画しない', async () => {
    mockFetchNotice(null)
    const container = mountBanner()

    await vi.waitFor(() => {
      expect(globalThis.fetch).toHaveBeenCalled()
    })
    expect(container.querySelector('[role="alert"]')).toBeNull()
  })
})
