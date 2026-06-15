import { describe, expect, it } from 'vitest'
import { render } from '../../test-utils'
import { Card } from './Card'

describe('Card', () => {
  it('renders default card with children', () => {
    const html = render(Card({ children: 'Card content' }))
    expect(html).toContain('Card content')
    expect(html).toContain('bg-white')
    expect(html).toContain('rounded-2xl')
    expect(html).toContain('shadow-lg')
  })

  it('renders featured variant', () => {
    const html = render(Card({ variant: 'featured', children: 'Featured' }))
    expect(html).toContain('rounded-3xl')
    expect(html).toContain('shadow-xl')
  })

  it('renders small padding', () => {
    const html = render(Card({ padding: 'sm', children: 'Small' }))
    expect(html).toContain('p-4')
  })

  it('renders medium padding (default)', () => {
    const html = render(Card({ children: 'Medium' }))
    expect(html).toContain('p-6')
  })

  it('renders large padding', () => {
    const html = render(Card({ padding: 'lg', children: 'Large' }))
    expect(html).toContain('p-8')
  })

  it('accepts custom className', () => {
    const html = render(Card({ className: 'custom-class', children: 'Custom' }))
    expect(html).toContain('custom-class')
  })
})
