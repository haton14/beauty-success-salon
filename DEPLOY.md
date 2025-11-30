# Cloudflare Workers デプロイ手順

## 前提条件
1. Cloudflareアカウントを持っている
2. Wranglerがインストールされている

## セットアップ

### 1. Wranglerのインストール（まだの場合）
```bash
npm install -g wrangler
```

### 2. Cloudflareにログイン
```bash
wrangler login
```

### 3. 必要な依存関係のインストール
```bash
npm install --save-dev wrangler @cloudflare/kv-asset-handler
```

### 4. wrangler.tomlの設定を更新
`wrangler.toml`ファイルの以下の部分を編集：
- `route = "your-domain.com/*"` を実際のドメインに変更
- または `workers_dev = true` を追加して workers.dev ドメインを使用

## デプロイ

### 本番環境へのデプロイ
```bash
npm run deploy
```

### プレビュー環境へのデプロイ
```bash
npm run deploy:preview
```

## デプロイ後の確認

1. デプロイが成功すると、URLが表示されます
2. ブラウザでアクセスして動作確認
3. 画像が表示されない場合は、画像URLを確認してください

## トラブルシューティング

### 画像が表示されない場合
- `images.success-salon.haton14.com` のDNS設定を確認
- 画像URLが正しいことを確認

### 404エラーが出る場合
- `dist`フォルダにファイルが正しくビルドされているか確認
- `npm run build` を実行してからデプロイ

### スタイルが適用されない場合
- Tailwind CSSのビルドが正しく行われているか確認
- `style.css`が`dist`フォルダに存在するか確認

## カスタムドメインの設定

1. Cloudflareダッシュボードにログイン
2. Workers & Pages → あなたのWorker を選択
3. Settings → Triggers → Custom Domains
4. Add Custom Domain でドメインを追加

## 注意事項
- 初回デプロイ時はKV namespaceの作成が必要な場合があります
- 画像は別ドメイン（images.success-salon.haton14.com）でホストされています
- 変更後は必ず `npm run build` してからデプロイしてください