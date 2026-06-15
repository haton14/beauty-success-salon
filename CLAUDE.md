# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A beauty salon website for "美容室success" (Beauty Salon Success) in Ibaraki, Japan. Built with HonoX framework and deployed to Cloudflare Workers.

## Commands

This project uses **pnpm** (see `packageManager` in package.json). Do not use npm/yarn — they would create a second lockfile.

```bash
pnpm dev            # Start development server
pnpm build          # Build for production (server + client)
pnpm test           # Run all tests
pnpm test:watch     # Run tests in watch mode
pnpm test:coverage  # Run tests with coverage report
pnpm typecheck      # TypeScript type check (tsc --noEmit)
pnpm lint           # Biome lint + format check
pnpm lint:fix       # Biome auto-fix
pnpm deploy         # Build and deploy to Cloudflare Workers (production)
pnpm deploy:preview # Deploy to preview environment
```

CI (GitHub Actions, `.github/workflows/ci.yml`) runs lint → typecheck → test → build on every PR.

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

**Islands**: Components in `app/islands/` are hydrated on the client. They use Hono's `useEffect` for client-side behavior. The MobileMenu island handles mobile navigation toggling and scroll animations (smooth scrolling is pure CSS in `app/style.css`).

**Layout**: All pages use the `Layout` component which wraps content with Header, Footer, and MobileMenu.

**Images**: Use the `SalonImage` component (`app/components/common/SalonImage.tsx`) for content images. It applies width/height (CLS prevention), `loading="lazy"`, and `decoding="async"`. Pass `eager` for above-the-fold images. Site-wide data (shop info, prices, URLs) lives in `app/constants/index.ts` — reference constants instead of hardcoding.

### Testing

Tests are co-located with components (`*.test.tsx`). The default Vitest environment is `node`; DOM-dependent tests opt into jsdom with a `// @vitest-environment jsdom` comment (see `MobileMenu.test.tsx`). Use the helpers in `app/test-utils.ts`:

```tsx
import { render, renderRoute } from '../test-utils'

const html = render(MyComponent({ prop: 'value' }))   // component → HTML string
const html = await renderRoute(myRoute)               // route handler → HTML string
expect(html).toContain('expected content')
```

### Build Output

- Server builds to `dist/_worker.js` (Cloudflare Workers entry)
- Client assets build to `dist/static/`
- Images are hosted externally at `images.success-salon.haton14.com`
