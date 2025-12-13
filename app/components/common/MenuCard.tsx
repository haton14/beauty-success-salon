import type { FC, Child } from 'hono/jsx'

type Props = {
  title: string
  children: Child
  note?: string
  linkHref?: string
  linkText?: string
}

export const MenuCard: FC<Props> = ({ title, children, note, linkHref, linkText }) => {
  return (
    <div class="bg-white rounded-2xl shadow-lg p-8">
      <h4 class="text-2xl font-bold mb-6 text-blue-900 border-b-2 border-blue-200 pb-3">{title}</h4>
      <div class="grid md:grid-cols-2 gap-x-8 gap-y-4">
        {children}
      </div>
      {note && <p class="text-sm text-gray-500 mt-3">{note}</p>}
      {linkHref && linkText && (
        <a href={linkHref} class="mt-4 inline-block bg-blue-800 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition">
          {linkText}
        </a>
      )}
    </div>
  )
}
