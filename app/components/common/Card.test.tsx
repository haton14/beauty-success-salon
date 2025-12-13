import { describe, it, expect } from 'vitest'
import { Card, Section } from './Card'

const render = (component: any): string => component.toString()

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

describe('Section', () => {
  it('renders section with container', () => {
    const html = render(Section({ children: 'Section content' }))
    expect(html).toContain('<section')
    expect(html).toContain('container mx-auto')
    expect(html).toContain('Section content')
  })

  it('renders with id', () => {
    const html = render(Section({ id: 'my-section', children: 'Content' }))
    expect(html).toContain('id="my-section"')
  })

  it('renders white background by default', () => {
    const html = render(Section({ children: 'Content' }))
    expect(html).toContain('bg-white')
  })

  it('renders gray background', () => {
    const html = render(Section({ bgColor: 'gray', children: 'Content' }))
    expect(html).toContain('bg-gray-50')
  })

  it('renders default padding', () => {
    const html = render(Section({ children: 'Content' }))
    expect(html).toContain('py-section')
  })

  it('renders small padding', () => {
    const html = render(Section({ padding: 'small', children: 'Content' }))
    expect(html).toContain('py-section-sm')
  })
})
