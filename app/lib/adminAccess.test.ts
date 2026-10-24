import { describe, expect, it } from 'vitest'
import { SITE_URL } from '../constants'
import { isAdminAccessAllowed } from './adminAccess'

const productionUrl = `${SITE_URL}/admin`

describe('isAdminAccessAllowed', () => {
  it('本番ホスト + Access認証ヘッダーありなら許可', () => {
    expect(
      isAdminAccessAllowed({
        url: productionUrl,
        dev: false,
        accessEmail: 'owner@example.com',
      })
    ).toBe(true)
  })

  it('本番ホストでも Access認証ヘッダーが無ければ拒否', () => {
    expect(isAdminAccessAllowed({ url: productionUrl, dev: false, accessEmail: undefined })).toBe(false)
  })

  it('本番ホストでも Access認証ヘッダーが空なら拒否', () => {
    expect(isAdminAccessAllowed({ url: productionUrl, dev: false, accessEmail: '   ' })).toBe(false)
  })

  it('想定外ホストは Access認証ヘッダーがあっても拒否', () => {
    expect(
      isAdminAccessAllowed({
        url: 'https://beauty-salon-success-preview.example.workers.dev/admin',
        dev: false,
        accessEmail: 'owner@example.com',
      })
    ).toBe(false)
  })

  it('ローカル開発は許可', () => {
    expect(
      isAdminAccessAllowed({
        url: 'http://localhost:5173/admin',
        dev: false,
        accessEmail: undefined,
      })
    ).toBe(true)
  })

  it('dev フラグが立っていれば任意ホストで許可', () => {
    expect(
      isAdminAccessAllowed({
        url: 'https://anything.example.com/admin',
        dev: true,
        accessEmail: undefined,
      })
    ).toBe(true)
  })
})
