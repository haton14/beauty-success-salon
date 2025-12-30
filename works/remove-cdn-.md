### 追加タスク: HonoXでのCSS処理設定

#### 現状
- `style.css`: `@tailwind` ディレクティブ（v3構文）
- `_renderer.tsx`: `<link href="/app/style.css">` で直接参照
- Tailwind CSS v4 + PostCSS は設定済みだがビルドに組み込まれていない

#### タスク

- [ ] 1. `style.css` を Tailwind v4 構文に更新
  ```css
  @import "tailwindcss";
  ```

- [ ] 2. `_renderer.tsx` で HonoX の `Style` コンポーネントを使用
  ```tsx
  import { Style } from 'honox/server'
  // <Style /> を head 内に追加
  ```

- [ ] 3. Tailwind CDN を削除
