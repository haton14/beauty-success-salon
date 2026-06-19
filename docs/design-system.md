# 美容室success デザインシステム

既存コードから抽出・統一したデザイン規約。新規ページ・コンポーネントを作る際はこのドキュメントに沿うこと。

## 1. デザイントークン

トークンの実体は `tailwind.config.js`（v3互換 `@config` で読み込み）。

### 1.1 カラー

| トークン | 役割 | スケール例 |
| --- | --- | --- |
| `primary-*` | メインのブランドカラー（ブルー） | `primary-50` 背景 〜 `primary-900` テキスト |
| `secondary-*` | LINE / アクションのサブカラー（グリーン） | `secondary-500/600` ボタン |
| `accent-*` | パーマ等のアクセント（ティール） | `accent-600/700` |
| `highlight-*` | 着付け等のハイライト（パープル） | `highlight-600/700` |

**規約**:
- 下線・アクセントの `bg-blue-800` 系は `bg-primary-800` を優先する（同じ値の意味づけ違い）
- ページ固有の彩色（pink/emerald/purple）はページヘッダーの `bgGradient` で表現する
- 見出しの色は **`text-gray-800` を標準** とする（ページ毎に `text-blue-900`/`text-emerald-900` を使い分けない）

### 1.2 タイポグラフィ

| トークン | サイズ | 用途 |
| --- | --- | --- |
| `text-heading-1` | 36px / 700 | （PageHeader 内では `text-4xl md:text-5xl` を使用するためほぼ未使用） |
| `text-heading-2` | 30px / 700 | セクションタイトル（`<h2>`） |
| `text-heading-3` | 24px / 700 | カード／グループタイトル（`<h3>`） |
| `text-heading-4` | 20px / 600 | サブセクション（`<h4>`） |

**規約**:
- セクション見出しでは `text-3xl font-bold` を直接書かず、`text-heading-2` を使う
- ページタイトルは `PageHeader` コンポーネントを使う（直接書かない）

### 1.3 スペーシング

| トークン | px | 用途 |
| --- | --- | --- |
| `py-section` | 80 | 重要セクション・特集 |
| `py-section-sm` | 64 | デフォルトの本文セクション |
| **`py-16` 標準** | 64 | 全ページの本文セクション余白の標準値 |
| ページヘッダー上下 | 80 / 48 | `pt-20 pb-12`（PageHeader が固定） |

**規約**:
- 本文セクション間は `py-16` で揃える（`py-12`/`py-10`/`py-8` は使わない）
- ページヘッダーは PageHeader コンポーネントに任せる（自前で `pt-XX pb-XX` を書かない）

### 1.4 角丸

| トークン | px | 用途 |
| --- | --- | --- |
| `rounded-button` | 9999 | ボタン（pill）|
| `rounded-card` | 16 | 標準カード（= `rounded-2xl`）|
| `rounded-section` | 24 | 特集カード・大きなブロック（= `rounded-3xl`）|
| `rounded-xl` | 12 | 画像・小コンテナ |
| `rounded-lg` | 8 | 最小要素 |

### 1.5 ブレークポイント

- `md:` 768px〜（グリッド列数変更・レスポンシブフォントサイズ）
- `lg:` 1024px〜（デスクトップナビ・スペーシング調整）
- `sm:` 640px〜（フレックス方向の切替などごく一部）

## 2. コンポーネント

### 2.1 共通コンポーネント (`app/components/common/`)

| コンポーネント | 役割 |
| --- | --- |
| `Layout` | Header + main + Footer のラッパー。全ルートで使う |
| `PageHeader` | ページタイトル + サブタイトル + 任意の本文 children を載せる導入セクション |
| `Heading` / `SectionHeader` | セマンティック見出し / セクション見出し（タイトル + サブタイトル + 下線） |
| `Section` | 内側に container を含むセクションラッパー（任意。手書きしてもよい） |
| `CTA` | 電話・LINE 予約のCTAブロック（全サブページの末尾で使用） |
| `Button` / `PhoneButton` | プライマリ/セカンダリ/LINE のCTAボタン |
| `Card` | 汎用カード。`variant: default | featured`、`padding: sm | md | lg` |
| `CheckListItem` | チェックリストの1行 |
| `StepItem` | 番号付きステップ |
| `PriceRow` | 料金表の1行 |
| `ServiceInfoBox` | 施術時間・持続期間の小箱 |
| `GalleryCard` | アスペクト比固定の画像カード |

### 2.2 ページ固有 (`app/components/pages/<page>/`)

| コンポーネント | ページ |
| --- | --- |
| `MenuCard` / `PriceItem` / `FAQItem` | home |
| `ServiceCard` / `TipCard` | perm |
| `FeatureCard` | eyelash |

## 3. ページの作り方（テンプレート）

```tsx
import { createRoute } from 'honox/factory'
import { Layout } from '../../components/common/Layout'
import { PageHeader } from '../../components/common/PageHeader'
import { CTA } from '../../components/common/CTA'

export default createRoute((c) => {
  return c.render(
    <Layout currentPage="<key>" showFullFooter>
      <PageHeader
        title="ページタイトル"
        subtitle="任意のサブタイトル"
        bgGradient="from-pink-50 to-white" // 任意。テーマ色に応じて
      >
        {/* 任意の追加コンテンツ（画像・説明など） */}
      </PageHeader>

      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-heading-2 text-gray-800 mb-8 text-center">セクション見出し</h2>
            {/* 本文 */}
          </div>
        </div>
      </section>

      <CTA />
    </Layout>,
    { title: 'ページ名 | 美容室success' }
  )
})
```

## 4. ページごとの背景グラデーション割当

ブランド差別化のため、ページ毎の `bgGradient` は固定する:

| ページ | bgGradient |
| --- | --- |
| perm | `from-gray-50 to-white`（デフォルト） |
| sins | `from-blue-50 to-white` |
| head-spa | `from-emerald-50 to-white` |
| eyelash | `from-pink-50 to-white` |
| kimono | `from-purple-50 to-white` |
| staff | `from-blue-50 to-white` |

## 5. 統一前後の主な変更履歴（参考）

- ページタイトル: `text-4xl(/md:text-5xl) font-bold text-{blue,emerald,gray}-{800,900}` のばらつき → `PageHeader` で統一
- セクション見出し: `text-3xl font-bold text-gray-800` → `text-heading-2 text-gray-800`
- セクション余白: `py-12 / py-10 / py-8` → `py-16`
- SectionHeader 重複（`pages/home/SectionHeader.tsx`）を削除し `common/Heading` の `SectionHeader` に集約
- PageHeader の `showUnderline` プロップを廃止（下線は SectionHeader 専用に）
- PageHeader のグラデーション方向を `bg-linear-to-br` → `bg-linear-to-b` に統一
