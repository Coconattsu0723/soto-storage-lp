# soto Image Assets

## 0. 文書の役割

正式採用済みの元素材、Web配信用最適化素材、公開用素材を管理する正本。正式元素材26点のファイル名、格納先、形式、透過状態は2026-08-31に実ファイルと照合済み。Web配信用WebP 25点と公開用OGP / faviconは2026-09-03に生成・照合済み。

### ステータス

- **正式採用済み**：ビジュアルとして採用決定済み。
- **Web配信用**：正式元素材から内容を変えずに生成し、LPが参照する軽量化済み派生ファイル。
- **公開用**：SNS共有、ブラウザーUI、ホーム画面等で使用する公開時の派生ファイル。
- **実ファイル確認済み**：正式名で格納済みで、形式・透過状態まで確認済み。

### ファイル名ルール

- 用途が分かる英小文字を使い、素材種別の接頭辞と名称をunderscore、名称内の語をhyphenで区切る形式を基本とする。
- 正式元素材はPNGのまま維持し、透過素材のアルファチャンネルを保持する。
- Web配信用派生は元素材と同じbasenameのWebPとする。
- 元素材を削除・上書きせず、Web配信用派生ファイルを同じ分類フォルダへ併置する。

## 1. Logo

| Asset ID | 正式用途 | 正式英字ファイル名 | 種別 | 背景透過 | 使用セクション | 備考 | 正式採用状況 |
|---|---|---|---|---|---|---|---|
| LOGO-01 | Primary Logo | `soto_logo-primary.png` | ワードマーク | あり | Header / Footerほか | 小文字`soto`、Cocoa Brown系、キャッチコピーなし。単体利用可能 | 正式採用済み / 実ファイル確認済み |

## 2. Photos

| Asset ID | 正式用途 | 正式英字ファイル名 | 種別 | 背景透過 | 使用セクション | 備考 | 正式採用状況 |
|---|---|---|---|---|---|---|---|
| PHOTO-01 | Hero Main Photo | `hero_main-living-space.png` | 生活写真 | なし | Hero | 写真の主役。Before / Afterと同じ住まい・ブランド世界 | 正式採用済み / 実ファイル確認済み |
| PHOTO-02 | Problem Photo | `problem_limited-living-space.png` | 生活写真 | なし | Problem | 収納が生活空間を圧迫している状態。汚部屋にしない | 正式採用済み / 実ファイル確認済み |
| PHOTO-03 | Before Living Photo | `living-before_limited-space.png` | 生活写真 | なし | Before / After Living | Heroと同じ部屋。最終修正版。棚、スーツケース、季節家電、収納ケース等は可 | 正式採用済み / 実ファイル確認済み |
| PHOTO-04 | After Living Photo | `living-after_more-space.png` | 生活写真 | なし | Before / After Living | Heroと同じ部屋。最終修正版。大型クローゼットなし。床・壁際の余白を見せる | 正式採用済み / 実ファイル確認済み |
| PHOTO-05 | Storage Facility Photo | `storage-facility_clean-managed-space.png` | 施設写真 | なし | Storage & Security | 清潔・静か・管理された保管施設 | 正式採用済み / 実ファイル確認済み |
| PHOTO-06 | Final CTA Photo | `final-cta_relaxed-home.png` | 生活写真 | なし | Final CTA | Heroと同じブランド世界に見えるトーン | 正式採用済み / 実ファイル確認済み |

> 写真6点は正式採用元をPNG / RGBで維持し、LPでは同名のWebP派生を使用する。

## 3. Characters

| Asset ID | 正式用途 | 正式英字ファイル名 | 種別 | 背景透過 | 使用セクション | 備考 | 正式採用状況 |
|---|---|---|---|---|---|---|---|
| CHAR-01 | Character Master / Brand Philosophy | `character_philosophy-guide.png` | キャラクターイラスト | あり | Brand Philosophy | 顔、口元、目、ほっぺ、耳、頭身、手足、色、塗り、手描き感のマスター | 正式採用済み / 実ファイル確認済み |
| CHAR-02 | Packing | `character_how-it-works_packing-box.png` | キャラクターイラスト | あり | How It Works | 開いたBOXへマフラーを詰めるキャラクター。カメラ、本、植物、タオル、テープを含む | 正式採用済み / 実ファイル確認済み |
| CHAR-03 | Receive Items | `character_how-it-works_receive-items.png` | キャラクターイラスト | あり | How It Works | 必要な物を取り出す説明補助。現在の正式ファイルを維持 | 正式採用済み / 実ファイル確認済み |
| CHAR-04 | Simulator Result | `character_simulator-result_box-guide.png` | キャラクターイラスト | あり | Storage Simulator | 結果表示の親しみ・理解補助 | 正式採用済み / 実ファイル確認済み |
| CHAR-05 | FAQ | `character_faq-checking-note.png` | キャラクターイラスト | あり | FAQ | FAQの補助。可読性を妨げない | 正式採用済み / 実ファイル確認済み |
| CHAR-06 | Problem Support | `character_problem-storage-question.png` | キャラクターイラスト | あり | Problem | 共感補助。Problem Photoより主張させない | 正式採用済み / 実ファイル確認済み |

> 全キャラクターはCHAR-01の正式採用1案目の顔・口元へ統一する。別案の口元は使用しない。CHAR-02とCHAR-03は別画像・別ハッシュの正式素材として管理する。

## 4. What You Can Store Icons

| Asset ID | 正式用途 | 正式英字ファイル名 | 種別 | 背景透過 | 使用セクション | 備考 | 正式採用状況 |
|---|---|---|---|---|---|---|---|
| STORE-ICON-01 | SEASON | `icon_store-seasonal-items.png` | カテゴリーアイコン | あり | What You Can Store | 衣類、コート、毛布等 | 正式採用済み / 実ファイル確認済み |
| STORE-ICON-02 | TRAVEL | `icon_store-travel-items.png` | カテゴリーアイコン | あり | What You Can Store | BOXに収まるスーツケース、旅行用品等 | 正式採用済み / 実ファイル確認済み |
| STORE-ICON-03 | HOBBY | `icon_store-hobby-items.png` | カテゴリーアイコン | あり | What You Can Store | キャンプ、スポーツ、趣味用品等 | 正式採用済み / 実ファイル確認済み |
| STORE-ICON-04 | HOME | `icon_store-home-items.png` | カテゴリーアイコン | あり | What You Can Store | 季節家電、来客用品等 | 正式採用済み / 実ファイル確認済み |

## 5. Storage & Security Icons

| Asset ID | 正式用途 | 正式英字ファイル名 | 種別 | 背景透過 | 使用セクション | 備考 | 正式採用状況 |
|---|---|---|---|---|---|---|---|
| SECURITY-ICON-01 | 安心保管 | `icon_security-safe-storage.png` | 機能アイコン | あり | Storage & Security | 保管環境・管理の安心を補助 | 正式採用済み / 実ファイル確認済み |
| SECURITY-ICON-02 | 荷物確認 / 管理 | `icon_security-item-check.png` | 機能アイコン | あり | Storage & Security | スマートフォン + BOX + チェックを中心にしたシンプルな正式案 | 正式採用済み / 実ファイル確認済み |
| SECURITY-ICON-03 | 取り出し依頼 | `icon_security-easy-return-request.png` | 機能アイコン | あり | Storage & Security | スマートフォン + BOX + 戻る矢印の正式専用画像 | 正式採用済み / 実ファイル確認済み |
| SECURITY-ICON-04 | 自宅集荷 | `icon_security-home-pickup.png` | 機能アイコン | あり | Storage & Security | 自宅から集荷されることを補助 | 正式採用済み / 実ファイル確認済み |

> Securityアイコンは意味を保ちながら情報量を抑える。初期の複雑なIcon 02は使用しない。

## 6. BOX Visuals

| Asset ID | 正式用途 | 正式英字ファイル名 | 種別 | 背景透過 | 使用セクション | 備考 | 正式採用状況 |
|---|---|---|---|---|---|---|---|
| BOX-01 | SMALL BOX | `soto_box-small.png` | プロダクトビジュアル | あり | Box / Price | W38 × D38 × H32cm / 約45L / 月額440円 | 正式採用済み / 実ファイル確認済み |
| BOX-02 | STANDARD BOX | `soto_box-standard.png` | プロダクトビジュアル | あり | Box / Price / Simulator | W45 × D45 × H40cm / 約80L / 月額660円 | 正式採用済み / 実ファイル確認済み |
| BOX-03 | LARGE BOX | `soto_box-large.png` | プロダクトビジュアル | あり | Box / Price | W60 × D45 × H40cm / 約108L / 月額880円。旧寸法は使用しない | 正式採用済み / 実ファイル確認済み |
| BOX-04 | BOX Size Comparison | `soto_box-size-comparison.png` | 比較ビジュアル | あり | Box / Price | 3サイズの比較。最新寸法と矛盾しないこと | 正式採用済み / 実ファイル確認済み |

### BOXデザイン共通ルール

- Natural cardboard brown
- Warm Ivory tape
- Cocoa / Taupe detail
- Soft Terracotta / Warm Ivory abstract graphic
- 少しイラスト寄りのプロダクトビジュアル
- 背景透過

`STORAGE FOR BETTER LIVING`は正式コピーとして採用していない。`soto_box-standard.png`、`soto_box-size-comparison.png`、`storage-facility_clean-managed-space.png`内に残っているが、Web上の正式コピーとして使用しない。画像加工は別工程で明示的に決定された場合のみ行う。

## 7. Diagram

| Asset ID | 正式用途 | 正式英字ファイル名 | 種別 | 背景透過 | 使用セクション | 備考 | 正式採用状況 |
|---|---|---|---|---|---|---|---|
| DIAGRAM-01 | How It Works Flow Diagram | `soto_how-it-works_flow-diagram.png` | 4ステップ図解 | あり | How It Works | STEP 1 BOXを選ぶ / STEP 2 荷物を詰める / STEP 3 自宅から集荷 / STEP 4 確認・取り出し | 正式採用済み / 実ファイル確認済み |

## 8. Web配信用最適化素材

正式元素材は上記のPNG 26点とし、LPの`index.html`では使用中25点の同名WebP派生を参照する。未使用の`BOX-04`は変換せず、正式元PNGのみを維持する。

| 分類 | Web配信用数 | 対象 | 変換方針 | LP参照 |
|---|---:|---|---|---|
| Photos | 6 | PHOTO-01〜06 | 元解像度維持 / WebP quality 85 / RGB | WebP |
| Logo | 1 | LOGO-01 | 元解像度維持 / lossless WebP / alpha維持 | WebP |
| Characters | 6 | CHAR-01〜06 | 長辺512px以内 / WebP quality 88 / alpha維持 | WebP |
| Icons | 8 | STORE-ICON-01〜04、SECURITY-ICON-01〜04 | 長辺512px以内 / WebP quality 88 / alpha維持 | WebP |
| Boxes | 3 | BOX-01〜03 | 長辺960px以内 / WebP quality 88 / alpha維持 | WebP |
| Diagrams | 1 | DIAGRAM-01 | 元解像度維持 / WebP quality 90 / alpha維持 | WebP |
| **Total** | **25** | 使用中の正式素材 | 元PNGを保持した派生運用 | **WebP** |

### Web配信用ファイルの対応ルール

- Web配信用ファイル名は各正式元PNGの拡張子だけを`.webp`へ変更する。
- 写真、キャラクター、アイコン、BOX、図解、ロゴの内容・構図・色は変更しない。
- 透過が必要なWebPはアルファチャンネルを維持する。
- `soto_box-size-comparison.png`は現行LPで未使用のため、WebP派生を作成しない。
- OGP / faviconはLP本文画像の最適化対象とは分け、下記「公開用素材」で管理する。

## 9. 公開用素材

| Asset ID | 正式用途 | 正式英字ファイル名 | サイズ | 形式 | 背景透過 | 使用箇所 | 備考 | 正式採用状況 |
|---|---|---|---:|---|---|---|---|---|
| OGP-01 | Social Share Image | `soto_ogp.png` | 1200 × 630px | PNG | なし | Metadata / SNS共有 | PHOTO-01とLOGO-01を使用。正式カテゴリーとHero Main Copyを安全領域内に配置 | 正式採用済み / 実ファイル確認済み |
| FAVICON-01 | Browser Favicon | `favicon-32.png` | 32 × 32px | PNG | なし | Browser UI | LOGO-01先頭の正式な小文字`s`字形。Oat Beige背景 + Cocoa Brownマーク | 正式採用済み / 実ファイル確認済み |
| FAVICON-02 | Browser Favicon | `favicon-48.png` | 48 × 48px | PNG | なし | Browser UI | LOGO-01先頭の正式な小文字`s`字形。Oat Beige背景 + Cocoa Brownマーク | 正式採用済み / 実ファイル確認済み |
| FAVICON-03 | Apple Touch Icon | `apple-touch-icon.png` | 180 × 180px | PNG | なし | Home Screen | LOGO-01先頭の正式な小文字`s`字形。Oat Beige背景 + Cocoa Brownマーク | 正式採用済み / 実ファイル確認済み |

### HTML組み込み状況

- favicon 32px / 48pxとApple Touch Iconは`index.html`へ組み込み済み。
- OGPのタイトル、説明、サイト名、言語とX / Twitter CardのURL非依存項目は`index.html`へ組み込み済み。
- 正式公開URL`https://coconattsu0723.github.io/soto-storage-lp/`を`canonical`と`og:url`へ設定済み。
- OGP画像とX / Twitter画像は`https://coconattsu0723.github.io/soto-storage-lp/assets/images/ogp/soto_ogp.png`の絶対URLを設定済み。

## 10. 採用・制作上の重要ルール

- 実装前に必要な正式素材26点はすべて正式名で格納済み。
- 新しい写真、キャラクター、アイコン、図解を勝手に追加しない。
- Voice用の人物写真は追加しない。
- OGP / faviconは公開用派生素材として正式制作済み。faviconと公開用MetadataはHTMLへ組み込み済み。
- 不足を感じる場合は新規制作せず、「要確認」としてユーザーへ提示する。
- LP使用中25点のWeb配信用WebP化と、公開用OGP / favicon制作は完了済み。

## 11. 正式元素材の最終確認結果

| 分類 | 正式素材数 | 格納先 | 確認結果 |
|---|---:|---|---|
| Photos | 6 | `assets/images/photos/` | 全点存在。PNG / RGB。Before / Afterは最終修正版 |
| Logo | 1 | `assets/images/logo/` | `soto_logo-primary.png`を確認。PNG / RGBA |
| Characters | 6 | `assets/images/characters/` | 全点存在。PNG / RGBA。CHAR-02 / 03は別画像・別ハッシュ |
| Icons | 8 | `assets/images/icons/` | 全点存在。PNG / RGBA。Security Icon 02はシンプル正式版 |
| Boxes | 4 | `assets/images/boxes/` | 全点存在。PNG / RGBA。LARGEは108L表記の正式版 |
| Diagrams | 1 | `assets/images/diagrams/` | 正式4ステップ図解を確認。PNG / RGBA |
| **Total** | **26** | － | **不足なし** |

### 照合結果

- 正式素材26点の存在、正式ファイル名、格納先フォルダが本台帳と一致する。
- 正式元PNG 26点を保持したまま、LP使用中25点の同名WebP派生が存在する。
- 現行LPの画像参照はWebPへ更新済みで、未使用のBOX Size ComparisonだけはPNGのみを維持している。
- 不採用画像や修正前画像は正式素材フォルダに含まれていない。
- Before / AfterはHeroと同じ住まいへ統一した最終修正版で、大型クローゼットを含まない。
- How It Works Character 02 / Receive Itemsが存在する。
- `icon_security-easy-return-request.png`が存在する。
- Security Icon 02はスマートフォン + BOX + チェックを中心としたシンプル正式版である。
- 正式ロゴ`soto_logo-primary.png`が存在し、透過状態を維持している。
- 透過PNGのアルファチャンネルは全点で維持されている。
- CHAR-02 / CHAR-03は別ハッシュであることを確認し、正式素材内に同一ハッシュの重複はない。
- OGPは1200 × 630pxのPNG 1点、faviconは32px / 48px / 180pxのPNG 3点を正式名で格納済み。
- `assets/images/.DS_Store`はmacOSの管理ファイルであり、正式素材数には含めない。

### 要確認事項

- `STORAGE FOR BETTER LIVING`が一部画像内に残っているが、正式コピーではない。実装ではコピーとして使用しない。
- 公開用MetadataのHTML設定は完了済み。公開環境への反映確認はcommit / push後に行う。
