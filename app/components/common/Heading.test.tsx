import { describe, it, expect } from 'vitest'
import { Heading, SectionHeader } from './Heading'

const render = (component: any): string => component.toString()

describe('Heading', () => {
  it('renders h2 by default', () => {
    const html = render(Heading({ children: 'Title' }))
    expect(html).toContain('<h2')
    expect(html).toContain('Title')
    expect(html).toContain('text-heading-2')
  })

  it('renders h1', () => {
    const html = render(Heading({ level: 1, children: 'Page Title' }))
    expect(html).toContain('<h1')
    expect(html).toContain('text-heading-1')
  })

  it('renders h3', () => {
    const html = render(Heading({ level: 3, children: 'Card Title' }))
    expect(html).toContain('<h3')
    expect(html).toContain('text-heading-3')
  })

  it('renders h4', () => {
    const html = render(Heading({ level: 4, children: 'Subsection' }))
    expect(html).toContain('<h4')
    expect(html).toContain('text-heading-4')
  })

  it('renders centered', () => {
    const html = render(Heading({ centered: true, children: 'Centered' }))
    expect(html).toContain('text-center')
  })

  it('accepts custom className', () => {
    const html = render(Heading({ className: 'custom', children: 'Custom' }))
    expect(html).toContain('custom')
  })
})

describe('SectionHeader', () => {
  it('renders title with underline', () => {
    const html = render(SectionHeader({ title: 'Section Title' }))
    expect(html).toContain('Section Title')
    expect(html).toContain('text-heading-2')
    expect(html).toContain('bg-primary-800')
    expect(html).toContain('text-center')
  })

  it('renders subtitle when provided', () => {
    const html = render(SectionHeader({ title: 'Title', subtitle: 'Subtitle text' }))
    expect(html).toContain('Subtitle text')
    expect(html).toContain('text-lg')
  })

  it('does not render subtitle when not provided', () => {
    const html = render(SectionHeader({ title: 'Title Only' }))
    expect(html).not.toContain('text-lg text-gray-600')
  })
})
