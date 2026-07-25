import { describe, expect, it } from 'vitest'
import { render } from '../../test-utils'
import { Button, PhoneButton } from './Button'

describe('Button', () => {
  it('renders link with children', () => {
    const html = render(Button({ href: '/test', children: 'Click me' }))
    expect(html).toContain('href="/test"')
    expect(html).toContain('Click me')
  })

  it('distinguishes variants', () => {
    const primary = render(Button({ href: '/test', children: 'P' }))
    const secondary = render(Button({ href: '/test', variant: 'secondary', children: 'S' }))
    const line = render(Button({ href: '/test', variant: 'line', children: 'L' }))

    expect(primary).toContain('from-brand-from')
    expect(secondary).toContain('border-brand')
    expect(line).toContain('from-green-500')
  })

  it('distinguishes sizes', () => {
    const sm = render(Button({ href: '/test', size: 'sm', children: 'S' }))
    const lg = render(Button({ href: '/test', size: 'lg', children: 'L' }))

    expect(sm).toContain('text-sm')
    expect(lg).toContain('text-lg')
  })

  it('renders with target blank and rel for security', () => {
    const html = render(Button({ href: 'https://example.com', target: '_blank', children: 'External' }))
    expect(html).toContain('target="_blank"')
    expect(html).toContain('rel="noopener noreferrer"')
  })

  it('does not add rel for internal links', () => {
    const html = render(Button({ href: '/test', children: 'Internal' }))
    expect(html).not.toContain('rel=')
  })
})

describe('PhoneButton', () => {
  it('renders with rounded-xl instead of rounded-full', () => {
    const html = render(PhoneButton({ href: 'tel:000', children: '電話' }))
    expect(html).toContain('rounded-xl')
    expect(html).not.toContain('rounded-full')
  })

  it('adds rel when opening in a new tab', () => {
    const html = render(PhoneButton({ href: 'https://example.com', target: '_blank', children: 'LINE' }))
    expect(html).toContain('rel="noopener noreferrer"')
  })
})
