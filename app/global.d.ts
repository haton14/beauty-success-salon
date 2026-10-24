import {} from 'hono'
import type { Notice } from './types'

declare module 'hono' {
  interface ContextRenderer {
    (
      content: string | Promise<string>,
      props?: { title?: string; description?: string; noindex?: boolean }
    ): Response | Promise<Response>
  }

  interface ContextVariableMap {
    activeNotice: Notice | null
  }
}
