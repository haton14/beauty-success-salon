import { describe, it, expect } from 'vitest'
import { Button, PhoneButton } from './Button'

const render = (component: any): string => component.toString()

describe('Button', () => {
  it('renders primary button by default', () => {
    const html = render(Button({ href: '/test', children: 'Click me' }))
    expect(html).toContain('href="/test"')
    expect(html).toContain('Click me')
    expect(html).toContain('from-blue-600')
    expect(html).toContain('to-blue-700')
    expect(html).toContain('rounded-full')
  })

  it('renders secondary button', () => {
    const html = render(Button({ href: '/test', variant: 'secondary', children: 'Secondary' }))
    expect(html).toContain('bg-white')
    expect(html).toContain('text-blue-800')
    expect(html).toContain('border-2')
  })

  it('renders line button', () => {
    const html = render(Button({ href: '/test', variant: 'line', children: 'LINE' }))
    expect(html).toContain('from-green-500')
    expect(html).toContain('to-green-600')
  })

  it('renders small size', () => {
    const html = render(Button({ href: '/test', size: 'sm', children: 'Small' }))
    expect(html).toContain('px-6 py-2')
    expect(html).toContain('text-sm')
  })

  it('renders medium size', () => {
    const html = render(Button({ href: '/test', size: 'md', children: 'Medium' }))
    expect(html).toContain('px-6 py-3')
    expect(html).toContain('text-base')
  })

  it('renders large size', () => {
    const html = render(Button({ href: '/test', size: 'lg', children: 'Large' }))
    expect(html).toContain('px-8 py-4')
    expect(html).toContain('text-lg')
  })

  it('renders with target blank', () => {
    const html = render(Button({ href: '/test', target: '_blank', children: 'External' }))
    expect(html).toContain('target="_blank"')
  })

  it('includes hover effects', () => {
    const html = render(Button({ href: '/test', children: 'Hover' }))
    expect(html).toContain('transition-all')
    expect(html).toContain('duration-200')
    expect(html).toContain('hover:-translate-y-0.5')
  })
})

describe('PhoneButton', () => {
  it('renders with rounded-xl instead of rounded-full', () => {
    const html = render(PhoneButton({ href: 'tel:000', children: '電話' }))
    expect(html).toContain('rounded-xl')
    expect(html).not.toContain('rounded-full')
  })

  it('renders large size by default', () => {
    const html = render(PhoneButton({ href: 'tel:000', children: '電話' }))
    expect(html).toContain('px-8 py-4')
    expect(html).toContain('text-lg')
  })
})
