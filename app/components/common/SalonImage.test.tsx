import { describe, expect, it } from 'vitest'
import { render } from '../../test-utils'
import { SalonImage } from './SalonImage'

describe('SalonImage', () => {
  it('画像URL・alt・サイズ属性が出力される（CLS対策）', () => {
    const html = render(SalonImage({ file: 'exterior.avif', alt: '外観', width: 1282, height: 961 }))

    expect(html).toContain('src="https://images.success-salon.haton14.com/exterior.avif"')
    expect(html).toContain('alt="外観"')
    expect(html).toContain('width="1282"')
    expect(html).toContain('height="961"')
  })

  it('デフォルトで遅延読み込みされる', () => {
    const html = render(SalonImage({ file: 'a.avif', alt: 'a', width: 100, height: 100 }))

    expect(html).toContain('loading="lazy"')
    expect(html).toContain('decoding="async"')
  })

  it('eager指定でloading属性が付かない（ファーストビュー用）', () => {
    const html = render(SalonImage({ file: 'a.avif', alt: 'a', width: 100, height: 100, eager: true }))

    expect(html).not.toContain('loading=')
  })

  it('classNameを上書きできる', () => {
    const html = render(SalonImage({ file: 'a.avif', alt: 'a', width: 100, height: 100, className: 'custom' }))

    expect(html).toContain('class="custom"')
  })
})
