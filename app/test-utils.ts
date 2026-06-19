import type { Context } from 'hono'

/**
 * Hono JSXコンポーネントをHTML文字列にレンダリングする
 */
export const render = (component: unknown): string => {
  return String(component)
}

type RouteHandlers = ReadonlyArray<(c: Context, next: () => Promise<void>) => unknown>

/**
 * ルートハンドラを実行し、c.render() に渡されたJSXをHTML文字列として返す
 */
export const renderRoute = async (route: RouteHandlers): Promise<string> => {
  const handler = route[0]
  if (!handler) {
    throw new Error('ルートハンドラが見つかりません')
  }

  let rendered: unknown
  const mockContext = {
    render: (content: unknown) => {
      rendered = content
      return content
    },
  } as unknown as Context

  await handler(mockContext, async () => {})
  return String(rendered)
}
