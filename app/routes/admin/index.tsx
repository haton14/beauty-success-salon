import type { FC } from 'hono/jsx'
import { createRoute } from 'honox/factory'
import { getStoredNotice, saveStoredNotice, toInputValue, toStoredIso } from '../../lib/notice'
import type { Bindings, Notice } from '../../types'

type AdminViewProps = {
  notice: Notice | null
  saved: boolean
  kvAvailable: boolean
  userEmail: string | null
}

export const AdminView: FC<AdminViewProps> = ({ notice, saved, kvAvailable, userEmail }) => (
  <main class="min-h-screen bg-gray-50 py-10">
    <div class="container mx-auto px-4 max-w-2xl">
      <div class="flex items-center justify-between mb-6 gap-4">
        <div class="flex items-baseline gap-4">
          <h1 class="text-2xl font-bold text-gray-800">お知らせ管理</h1>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm text-blue-700 hover:text-blue-900 underline whitespace-nowrap"
          >
            トップページを見る ↗
          </a>
        </div>
        {userEmail && <span class="text-sm text-gray-500">{userEmail}</span>}
      </div>

      {saved && (
        <p role="status" class="mb-6 rounded-lg bg-green-50 border border-green-300 text-green-800 px-4 py-3">
          保存しました。
        </p>
      )}

      {!kvAvailable && (
        <p role="alert" class="mb-6 rounded-lg bg-amber-50 border border-amber-300 text-amber-900 px-4 py-3 text-sm">
          KV が接続されていません。ローカルの <code>pnpm dev</code> では保存できません。
          <code>pnpm preview</code>（wrangler dev）またはデプロイ環境で操作してください。
        </p>
      )}

      <form method="post" action="/admin" class="space-y-6 bg-white rounded-2xl shadow p-6">
        <label class="flex items-center gap-3">
          <input
            type="checkbox"
            name="enabled"
            checked={notice?.enabled ?? false}
            class="h-5 w-5 rounded border-gray-300"
          />
          <span class="font-medium text-gray-800">このお知らせを表示する</span>
        </label>

        <div>
          <label for="message" class="block font-medium text-gray-800 mb-1">
            本文
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="例: 都合により本日は臨時休業いたします。ご迷惑をおかけいたします。"
            class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {notice?.message ?? ''}
          </textarea>
          <p class="text-sm text-gray-500 mt-1">改行はそのまま表示されます。</p>
        </div>

        <div class="grid sm:grid-cols-2 gap-4">
          <div>
            <label for="startAt" class="block font-medium text-gray-800 mb-1">
              表示開始
            </label>
            <input
              type="datetime-local"
              id="startAt"
              name="startAt"
              value={toInputValue(notice?.startAt ?? '')}
              class="w-full rounded-lg border border-gray-300 px-3 py-2"
            />
            <p class="text-sm text-gray-500 mt-1">空欄なら即時に表示。</p>
          </div>
          <div>
            <label for="endAt" class="block font-medium text-gray-800 mb-1">
              表示終了
            </label>
            <input
              type="datetime-local"
              id="endAt"
              name="endAt"
              value={toInputValue(notice?.endAt ?? '')}
              class="w-full rounded-lg border border-gray-300 px-3 py-2"
            />
            <p class="text-sm text-gray-500 mt-1">空欄なら手動でOFFにするまで表示。</p>
          </div>
        </div>

        <button
          type="submit"
          class="w-full rounded-lg bg-blue-800 text-white font-bold py-3 hover:bg-blue-900 transition-colors"
        >
          保存する
        </button>
      </form>

      <p class="text-sm text-gray-500 mt-4">
        時刻は日本時間（JST）で指定してください。チェックを外すと即座に非表示になります。
      </p>
    </div>
  </main>
)

// 管理画面（Cloudflare Access で特定の Google アカウントのみアクセス可）。
export default createRoute(async (c) => {
  const kv = (c.env as Bindings | undefined)?.NOTICE
  const notice = await getStoredNotice(kv)
  const userEmail = c.req.header('Cf-Access-Authenticated-User-Email') ?? null
  return c.render(
    <AdminView notice={notice} saved={c.req.query('saved') === '1'} kvAvailable={Boolean(kv)} userEmail={userEmail} />,
    { title: 'お知らせ管理', noindex: true }
  )
})

// お知らせの保存。
export const POST = createRoute(async (c) => {
  const kv = (c.env as Bindings | undefined)?.NOTICE
  if (!kv) {
    return c.text('KV が接続されていません。wrangler dev かデプロイ環境で操作してください。', 503)
  }
  const form = await c.req.formData()
  const notice: Notice = {
    message: String(form.get('message') ?? '').trim(),
    startAt: toStoredIso(String(form.get('startAt') ?? '')),
    endAt: toStoredIso(String(form.get('endAt') ?? '')),
    enabled: form.get('enabled') === 'on',
  }
  await saveStoredNotice(kv, notice)
  return c.redirect('/admin?saved=1')
})
