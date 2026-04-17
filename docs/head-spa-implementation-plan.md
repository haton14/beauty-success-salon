# ドライヘッドスパページ実装方針

`app/features/head-spa.feature` を満たすための実装方針。

---

## セクション順序

```
1. メインビジュアル        ← ページタイトル + 説明文
2. 施術写真               ← 施術例2枚
3. 感想写真               ← お客様感想3枚
4. 担当者・資格           ← 資格写真1枚 + 施術個室写真1枚 + 担当者説明
5. プレゼント説明          ← 可動域を広げる施術の紹介テキスト
6. 可動域施術写真          ← 5枚グリッド
7. 補足説明・注意事項      ← 補足テキスト + 注意事項ボックス
8. 可動域施術の資格        ← 資格写真1枚
9. 料金                   ← 30分 ¥3,000 / 60分 ¥6,000
10. CTA                   ← 予約誘導
```

---

## トップページ修正

`app/routes/index.tsx` の `MenuCard` 内にドライヘッドスパの詳細リンクを追加する。

---

## 画像ファイル名

| ファイル名 | 用途 |
|-----------|------|
| `dry-head-spa-1.avif` | 施術写真① |
| `dry-head-spa-2.avif` | 施術写真② |
| `dry-head-review-1.avif` | お客様感想① |
| `dry-head-review-2.avif` | お客様感想② |
| `dry-head-review-3.avif` | お客様感想③ |
| `dry-head-license.avif` | ヘッドマイスター資格証 |
| `dry-head-room.avif` | 施術個室 |
| `dry-head-present-1.avif` | プレゼント施術① |
| `dry-head-present-2.avif` | プレゼント施術② |
| `arm-mobility-1.avif` | 腕の可動域施術① |
| `arm-mobility-2.avif` | 腕の可動域施術② |
| `arm-mobility-3.avif` | 腕の可動域施術③ |
| `arm-mobility-4.avif` | 腕の可動域施術④ |
| `arm-mobility-5.avif` | 腕の可動域施術⑤ |
| `arm-mobility-license.avif` | 腕の可動域施術資格証 |

---

## ステータス

- [x] 画像素材のアップロード
- [x] `app/routes/pages/head-spa.tsx` の作成
- [x] トップページにヘッドスパ詳細リンクを追加
- [ ] 水のヘッドスパセクションの追加
- [ ] テスト `app/routes/pages/head-spa.test.tsx` の作成
