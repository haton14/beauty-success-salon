# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A beauty salon website for "美容室success" (Beauty Salon Success) in Ibaraki, Japan. Built with HonoX framework and deployed to Cloudflare Workers.

## Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production (server + client)
npm run test         # Run all tests
npm run test:watch   # Run tests in watch mode
npm run deploy       # Build and deploy to Cloudflare Workers (production)
npm run deploy:preview  # Deploy to preview environment
```

## Architecture

### Tech Stack
- **Framework**: HonoX (Hono-based full-stack framework with file-based routing)
- **JSX Runtime**: Hono JSX (`jsxImportSource: "hono/jsx"`)
- **Styling**: Tailwind CSS v4
- **Testing**: Vitest with jsdom environment
- **Deployment**: Cloudflare Workers

### Directory Structure

```
app/
├── server.ts          # Server entry point (creates HonoX app)
├── client.ts          # Client entry point (hydration)
├── routes/            # File-based routing
│   ├── _renderer.tsx  # Root HTML layout wrapper
│   ├── index.tsx      # Homepage (/)
│   └── pages/         # Subpages (/pages/*)
├── components/        # Server-side components
│   ├── common/        # Shared components (Header, Footer, Layout, CTA, etc.)
│   └── pages/         # Page-specific components
└── islands/           # Client-side interactive components (hydrated)
```

### Key Patterns

**Routes**: Use `createRoute` from `honox/factory`. Routes render JSX via `c.render()`.

**Components**: Standard Hono JSX functional components with `FC<Props>` types.

**Islands**: Components in `app/islands/` are hydrated on the client. They use Hono's `useEffect` for client-side behavior. The MobileMenu island handles mobile navigation, smooth scrolling, and scroll animations.

**Layout**: All pages use the `Layout` component which wraps content with Header, Footer, and MobileMenu.

### Testing

Tests are co-located with components (`*.test.tsx`). Tests render components to HTML strings and use string assertions:

```tsx
const render = (component: any): string => component.toString()
const html = render(MyComponent({ prop: 'value' }))
expect(html).toContain('expected content')
```

### Build Output

- Server builds to `dist/_worker.js` (Cloudflare Workers entry)
- Client assets build to `dist/static/`
- Images are hosted externally at `images.success-salon.haton14.com`
