import type { FC } from 'hono/jsx'

type Props = {
  title: string
  description: string
  placeholder?: string
  aspectRatio?: 'video' | '3/4' | 'square'
}

export const GalleryCard: FC<Props> = ({
  title,
  description,
  placeholder,
  aspectRatio = 'video'
}) => {
  const aspectClass = aspectRatio === 'video'
    ? 'aspect-video'
    : aspectRatio === '3/4'
      ? 'aspect-[3/4]'
      : 'aspect-square'

  return (
    <div class="bg-white rounded-2xl shadow-lg p-6">
      <div class={`bg-gray-100 rounded-xl ${aspectClass} mb-4 flex items-center justify-center`}>
        {placeholder && <p class="text-gray-500">{placeholder}</p>}
      </div>
      <h3 class="text-xl font-bold mb-2">{title}</h3>
      <p class="text-gray-600">{description}</p>
    </div>
  )
}
