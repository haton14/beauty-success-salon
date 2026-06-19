# フロントエンド / HonoX プラクティスレビュー

実施日: 2026-06-11
対象: `feature/local-work` ブランチ時点の全コード

3つの観点(HonoX/Honoフレームワーク、フロントエンド品質、ビルド・テスト・リポジトリ衛生)でレビューを実施した。テストは18ファイル184件すべてパス、`tsc --noEmit` もエラーなしで基礎的な健全性は良好。以下は改善余地のある点を優先度順にまとめたもの。

## 総評

- **良い点**: コンポーネント分割とテストの同居、`strict: true` でプロダクションコードに `any` ゼロ、AVIF画像の採用、Tailwind v4 への移行、依存関係の最新追従、`vite.config.ts` の丁寧なコメント。
- **主要な課題**: ① SEOメタ情報がほぼ皆無(description / OGP / JSON-LD / sitemap なし)、② 画像の CLS・遅延読み込み対策なし、③ 定数ファイルが定義だけされて使われておらずデータが二重管理、④ lint / CI の欠如、⑤ docs/ 配下の個人情報ファイルが gitignore されていない。

---

## 優先度: 高

### 1. コピーライト年の誤記「1098」

- `app/constants/index.ts:93` — `COPYRIGHT_YEAR = '1098-2025'`。フッター(`Footer.tsx:44,49`)に「Copyright © 1098-2025」と表示されている。創業1998年の誤記と思われる。また終了年 2025 がハードコードで、現在(2026年)すでに古い。

```ts
export const COPYRIGHT_YEAR = `1998-${new Date().getFullYear()}`
```

### 2. SEOメタ情報の欠如(description / OGP / canonical)

- `app/routes/_renderer.tsx:4-13` — レンダラーが `title` しか受け取れず、`meta description`・OGP・Twitter Card・canonical を出力する手段がない。検索結果のスニペットもSNSシェア時の表示も制御できない。
- 対応: `app/global.d.ts` の `ContextRenderer` 型を拡張し、`description` 等を各ルートから渡せるようにする。

```tsx
// _renderer.tsx
export default jsxRenderer(({ children, title, description }) => (
  <html lang="ja">
    <head>
      ...
      <meta name="description" content={description ?? '茨城県鹿嶋市の美容室success。sins酸性ストレート、ドライヘッドスパ、着付けなど。'} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://images.success-salon.haton14.com/exterior.avif" />
      <meta name="twitter:card" content="summary_large_image" />
      ...
```

### 3. LocalBusiness(HairSalon)構造化データの欠如

- 店名・住所・電話・営業時間・地図と情報は揃っているのに JSON-LD が未実装。「鹿嶋市 美容室」等のローカル検索で機会損失。`SHOP_INFO`・`BUSINESS_HOURS`(constants に定義済み・未使用)から生成できる。

```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: '美容室success',
  telephone: '+81-299-69-7700',
  address: { '@type': 'PostalAddress', addressRegion: '茨城県', addressLocality: '鹿嶋市', streetAddress: '小山1072-88' },
  openingHoursSpecification: [/* BUSINESS_HOURS から生成 */],
}) }} />
```

### 4. 画像の CLS 対策・遅延読み込みがほぼない

- 全ページ約40枚の `<img>` に `width` / `height` がなく、読み込み時にレイアウトシフト(CLS)が発生する。`index.tsx:39` の外観・内観だけ `aspect-video` で保護されているが他は無防備。sins / head-spa ページは画像が十数枚連続するため影響大。
- `loading="lazy"` は `index.tsx:177` と iframe の2箇所のみ。ファーストビュー外の画像がすべて即時読み込みされている。
- 対応: 共通の画像コンポーネントを1つ作って一括適用するのが確実。

```tsx
export const SalonImage: FC<{ file: string; alt: string; width: number; height: number; eager?: boolean }> =
  ({ file, alt, width, height, eager }) => (
    <img src={getImageUrl(file)} alt={alt} width={width} height={height}
      loading={eager ? undefined : 'lazy'} decoding="async" class="w-full object-cover" />
  )
```

- あわせて `_renderer.tsx` の head に画像ホストへの preconnect を追加: `<link rel="preconnect" href="https://images.success-salon.haton14.com" crossorigin />`

### 5. トップページに h1 がなく、見出し階層が h3 から始まる

- `app/components/common/Heading.tsx:54` — `SectionHeader` が `<h3>` を出力。トップページには h1 / h2 が一つもない。サブページは `PageHeader` の h1 → h2 で正しいのに、トップだけ文書アウトラインが崩れている。
- 対応: トップに店名+地域を含む h1 を置き、`SectionHeader` を h2 に変更、配下の h4 を h3 に繰り上げる。

### 6. ハンバーガーメニューボタンのアクセシビリティ

- `app/components/common/Header.tsx:51-55` — `<button id="menuToggle">` はSVGアイコンのみでアクセシブルネームがなく、`aria-expanded` / `aria-controls` / `type="button"` もない。スクリーンリーダーには「ボタン」としか読まれず、開閉状態も伝わらない。

```tsx
<button type="button" id="menuToggle" class="lg:hidden"
  aria-label="メニューを開く" aria-expanded="false" aria-controls="mobileMenu">
  <svg aria-hidden="true" ...>
```

```ts
// MobileMenu.tsx 側
menuToggle.addEventListener('click', () => {
  const open = !mobileMenu.classList.toggle('hidden')
  menuToggle.setAttribute('aria-expanded', String(open))
})
```

### 7. docs/ 配下の個人情報ファイルが gitignore されていない

- `docs/ママ4:10.MP4`、`docs/ライントーク履歴.txt` など計約84MBの動画・**顧客とのLINEトーク履歴**が untracked のまま放置されている。`.gitignore` に除外ルールがなく、`git add .` 一発でリモートに上がるリスクがある。
- 対応: `.gitignore` に `docs/*.MP4`・`docs/*ライントーク*` 等を追加するか、要件抽出が済んだ素材はリポジトリ外へ移動。
- 関連: `.claude/settings.local.json` が git 管理されている。名前のとおり個人設定なので `.gitignore` 追加 + `git rm --cached` を推奨。

### 8. MobileMenu.test.tsx が実装をテストしていない

- `app/islands/MobileMenu.test.tsx:30-50` — `MobileMenu` を **import しておらず**、テストファイル内にロジックのコピー(`setupFadeInAnimation`)を定義してそのコピー自身を検証している。実装をどう壊しても11件のテストは全部パスする。
- 対応: jsdom 上で実際にマウントして `useEffect` を発火させ、`menuToggle` クリック → `mobileMenu` の `hidden` トグル等の実挙動を検証する形に書き直す(または削除する)。

### 9. lint / CI / typecheck の仕組みがない

- ESLint / Biome / Prettier いずれも未導入。`.github/workflows` も存在しない。`noEmit: true` は設定されているのに `tsc --noEmit` を実行する script すらない。
- 対応:
  1. `package.json` に `"typecheck": "tsc --noEmit"` を追加
  2. Biome(lint + format 一体、Hono 系と相性良)を導入
  3. GitHub Actions で PR ごとに `pnpm install --frozen-lockfile && pnpm typecheck && pnpm test && pnpm build` を実行

---

## 優先度: 中

### 10. 定数・ユーティリティの定義と実装の二重管理

grep で確認済み。`app/constants/index.ts` / `app/utils/index.ts` に定義があるのに使われず、同じデータが各所にハードコードされている:

| 未使用の定義 | ハードコード箇所 |
|---|---|
| `SINS_FAQ` | `index.tsx:190-205` |
| `BUSINESS_HOURS` | `index.tsx:246-261` |
| `GOOGLE_MAPS_EMBED_URL` | `index.tsx:279` |
| `SOCIAL_LINKS` | `Footer.tsx:20-39` |
| `LINE_URL` | `index.tsx:226`、`CTA.tsx:25` |
| `SHOP_INFO.telHref` | `index.tsx:219`、`CTA.tsx:22` |
| `getImageUrl` / `IMAGE_BASE_URL` | 5ルート全てが `const BASE = '...'` を各自定義(`sins.tsx:8` ほか) |
| `formatPrice` / `formatTelHref` / `cn` | 完全未使用 |

価格も `index.tsx:89-94,141-143` と `sins.tsx:205-207` で重複しており、料金改定時に修正漏れのリスクが高い。**ルート側を constants 参照に統一するか、使わない定数を削除するか、どちらかに寄せる**ことが重要。

### 11. 未使用コンポーネントの残存

- `HeroButtons.tsx`、`GalleryCard.tsx`、`ServiceInfoBox.tsx`、`StepItem.tsx`、`Card.tsx` 内の `Section` は、どのルートからも import されていない(テストのみ存在)。
- 特に `Section` は「section + `container mx-auto px-4`」の定型を抽象化したものなのに、全ページがその定型を約30回手書きしている。`Section` は活用に切り替え、他は削除を推奨。

### 12. セキュリティヘッダー・キャッシュ戦略の欠如

- `app/server.ts` にミドルウェアがなく、`X-Frame-Options` / `X-Content-Type-Options` / `Referrer-Policy` 等のセキュリティヘッダーも `Cache-Control` もない。Hono の `secureHeaders` ミドルウェアで一括対応できる。

```ts
import { secureHeaders } from 'hono/secure-headers'
app.use('*', secureHeaders())
```

### 13. 404 が 301 でトップへリダイレクトされる

- `app/server.ts:6` — 意図的な実装(コミット `44128b8`)だが、SEO観点では存在しないURLが恒久リダイレクト扱いとなり soft-404 と判定されうる。タイポURLでも 301 がブラウザにキャッシュされる。
- 対応: HonoX の `_404.tsx` で正しく 404 ページ(ステータス404)を返すのが理想。リダイレクトを維持するなら最低でも 302 に変更。

### 14. sitemap.xml / robots.txt がない

- 集客目的のローカルビジネスサイトなのに `public/` に存在しない。静的6ページなので手書きで `public/sitemap.xml` と `public/robots.txt`(`Sitemap:` 行付き)を追加するだけで十分。
- ついでに `public/vite.svg`(テンプレート残骸、デプロイ成果物にも含まれている)と空の `public/images/` を削除。

### 15. MobileMenu island の実装改善

`app/islands/MobileMenu.tsx` はメニュー開閉以外に、スムーズスクロール・ヘッダーシャドウ・フェードインを全部抱えている。

- **スムーズスクロール**(15-38行): 全 `a[href^="#"]` で `preventDefault()` するため、URLにハッシュが付かず履歴・共有不可、フォーカスも移動しない、`prefers-reduced-motion` 無視。CSS の `scroll-behavior: smooth` + `scroll-margin-top: 80px`(固定ヘッダー分)でJS自体をほぼ削除できる。
- **フェードイン**(70-76行): hydration 時に全 section を `opacity: 0.3` に落とすため表示済みコンテンツが一瞬薄くなる。表示後の `unobserve` もない。
- **スクロールリスナー**(42行): `{ passive: true }` 未指定。

### 16. デプロイ設定の問題

- **`deploy:preview` が機能しない**: `wrangler.toml` に `[env.preview]` セクションが存在せず、`wrangler deploy --env preview` は警告付きのレガシーフォールバック動作になる(dry-run で確認済み)。`[env.preview]` を明示定義する。
- **ビルドが2回走る**: `package.json` の deploy script が `pnpm run build && wrangler deploy`、さらに `wrangler.toml` の `[build] command = "pnpm run build"` で wrangler がもう一度フルビルドする。どちらかに一本化する。
- **`compatibility_date` が `2024-01-01`** のまま約2.5年更新されていない。動作確認の上で近い日付へ更新。

### 17. パッケージマネージャの不整合

- lockfile は pnpm、scripts 内部も `pnpm run build` を呼ぶのに、CLAUDE.md は `npm run dev` 等と案内している。`npm install` すると `package-lock.json` が生成され lockfile が分裂する。
- 対応: CLAUDE.md を pnpm に統一し、`package.json` に `"packageManager": "pnpm@<version>"` を追加。

### 18. テスト戦略の偏り

- ルート6本中、テストがあるのは `index.test.tsx` のみ。`sins` / `head-spa` / `eyelash` / `kimono` / `staff` は料金・電話番号・リンク切れが起きても検知できない。`index.test.tsx` の料金アサーション群は価値が高いので、同等のスモークテスト(重要コンテンツ・telリンク・title)を各ページに追加したい。
- 逆に `Button.test.tsx` 等は `from-blue-600`、`px-6 py-2` といったTailwindクラス文字列を逐一検証しており、デザイン調整のたびに壊れる割にリグレッション検出力が低い。variant判別に必要な最小限へ削減を推奨。
- `index.test.tsx:7-17` はルートハンドラを await しておらず、ハンドラが async 化した瞬間に分かりにくく全滅する。`await indexRoute[0](...)` に修正。
- テスト20箇所超の `const render = (component: any)` 定型句は、型付きヘルパーを `app/test-utils.ts` に1箇所定義して解消できる。

### 19. `target="_blank"` リンクの rel 属性

- `Footer.tsx:20-34`(ブログ・Instagram)、`CTA.tsx:25`、`index.tsx:226`(LINE)に `rel="noopener noreferrer"` がない。`Button.tsx` の Props に `rel` 自体が存在しないので、`target === '_blank'` のとき自動付与する実装にする。

### 20. desktop-nav の inline style + `!important` ハック

- `Header.tsx:14` の `style="display: none;"` と `style.css:70-74` の `display: flex !important`。コメントは「IslandsがJSで切り替えるため」とあるが、実際には `MobileMenu.tsx` は `.desktop-nav` に一切触れていない。純粋にCSSだけの表示制御なので Tailwind の `hidden lg:flex` で完結し、両方削除できる。

### 21. Tailwind カスタムトークンの形骸化

- `tailwind.config.js` で `primary` / `secondary` / `accent` / `highlight` の4パレットや `rounded-card`・`py-section` を定義しているのに、実際の使用は数箇所のみで、大半は `text-blue-900`・`py-16` 等の直書き。ブランドカラー変更時に全置換が必要になる。
- 対応: トークンに統一するか、定義を削除して直書きに割り切るか方針を決める。Tailwind v4 なら `@theme { --color-primary-800: ...; }` 形式(CSS内定義)が本来の作法。`tailwind.config.js` の `content` と `style.css` の `@source` の重複も解消できる。

### 22. Google Maps iframe に title がない

- `index.tsx:278-288` — `title="美容室successの地図(Googleマップ)"` を追加(WCAG 4.1.2)。

---

## 優先度: 低

- **Gherkin .feature ファイルに実行基盤がない** (`app/features/*.feature`): `@cucumber/cucumber` 等の依存がなく実行されないドキュメント。仕様記述として割り切るなら `docs/` へ移動、実行したいなら `@amiceli/vitest-cucumber` で既存Vitest基盤に載せられる。`app/` 配下に置くとテスト資産に見えるのが問題。
- **営業年数表記の不整合**: `index.tsx:10` は `new Date()` から動的算出(2026年現在「29年目」)、`staff.tsx:14,101` は「28年」ハードコード。算出を utils に移して共用する。
- **tsconfig の厳格化余地**: `noUncheckedIndexedAccess`、`noUnusedLocals`、`noUnusedParameters` 等が未設定。現状の規模なら導入コストは小さい。`include` に `vitest.config.ts` が入っておらず型チェック対象外。
- **vitest 設定の無駄**: `globals: true` は全テストが明示 import しているため不要。`@` エイリアスは使用箇所ゼロかつ `vite.config.ts` に定義がなく、使い始めると本番ビルドだけ壊れる罠。全テストに jsdom 環境が適用されているが DOM が必要なのは MobileMenu.test のみ — デフォルトを `node` にしてファイル先頭の `// @vitest-environment jsdom` で個別指定すると高速化できる。
- **カバレッジ計測がない**: `@vitest/coverage-v8` を導入し `test:coverage` script を追加。
- **装飾要素の aria-hidden**: `Header.tsx:23,35` の `|` 区切り、`Footer.tsx` のSNS用SVGに `aria-hidden="true"`。
- **全角スペースによる字下げ** (`index.tsx:273`): スクリーンリーダーが余計な空白を読む可能性。リスト化かCSSで字下げ。
- **住所のセマンティクス**: `index.tsx:266-268`、`Footer.tsx:13-14` を `<address class="not-italic">` で囲む。
- **料金のモバイル/デスクトップ二重マークアップ** (`index.tsx:88-95`): `md:hidden` と `hidden md:block` で同じ価格を二重記述。定数から map 生成すれば改定時の修正箇所が1つになる。
- **favicon が16x16のみ**: `apple-touch-icon` や 32px 版の追加を検討。

---

## 推奨対応順

1. **即時(数分)**: コピーライト誤記修正(#1)、`.gitignore` 整備と個人情報ファイルの退避(#7)
2. **短期(SEO効果大)**: meta description / OGP(#2)、JSON-LD(#3)、sitemap / robots.txt(#14)、h1と見出し階層(#5)
3. **短期(品質基盤)**: typecheck script + CI(#9)、MobileMenu テスト書き直し(#8)、CLAUDE.md の pnpm 統一(#17)
4. **中期(リファクタリング)**: `SalonImage` 共通化で width/height + lazy 一括適用(#4)、定数の単一ソース化(#10)、未使用コンポーネント整理(#11)、MobileMenu island のスリム化(#15)
5. **随時**: セキュリティヘッダー(#12)、デプロイ設定修正(#16)、Tailwind トークン方針決め(#21)
