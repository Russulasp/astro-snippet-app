# Astro Snippet App

CSV で管理するスニペットを Astro で一覧・検索できるシンプルなライブラリアプリです。カテゴリ / タイプ / キーワードのフィルタや、詳細モーダル、テーブル表示を備えています。

## 主な機能
- CSV (`src/data/snippets.csv`) からスニペットを読み込み
- キーワード・カテゴリ・タイプでのフィルタ検索
- カード / テーブル表示の切り替え
- モーダルでスニペット詳細とコードコピー

## セットアップ
### ローカルで起動
1. 依存関係をインストールします。
   ```bash
   pnpm install
   ```
2. 開発サーバーを起動します。
   ```bash
   pnpm dev --host
   ```
3. `http://localhost:4321` にアクセスします。

### Docker で起動 (任意)
1. イメージをビルドし、コンテナを起動します。
   ```bash
   docker compose up -d --build
   ```
2. VS Code から Remote - Containers 拡張の「Attach to Running Container」で `astro-snippet-app-app-1` に接続します。
3. コンテナ内で依存関係をインストールし、開発サーバーを起動します。
   ```bash
   pnpm install
   pnpm dev --host
   ```

### ポート
Astro のデフォルトポート 4321 をコンテナからホストへフォワードしています。必要に応じて `docker-compose.yml` の `ports` を変更してください。

## スクリプト
| コマンド | 内容 |
| --- | --- |
| `pnpm dev` | 開発サーバー起動 |
| `pnpm build` | 本番ビルド |
| `pnpm preview` | ビルド結果のプレビュー |

## データの編集
スニペットは `src/data/snippets.csv` で管理しています。項目は以下の通りです。

| カラム | 内容 |
| --- | --- |
| `slug` | 詳細ページ用の識別子 |
| `title` | タイトル |
| `description` | 説明 |
| `category` | カテゴリ |
| `type` | タイプ |
| `tags` | `;` 区切りのタグ |
| `code` | コード本文 |
| `created_at` | 作成日 |
| `updated_at` | 更新日 |

CSV を更新すると、`src/lib/csv.ts` のローダー経由で一覧・詳細に反映されます。

## ディレクトリ構成
```
src/
  components/   # UI コンポーネント
  data/         # CSV データ
  layouts/      # レイアウト
  lib/          # CSV ローダー等のユーティリティ
  pages/        # 画面ルーティング
  styles/       # グローバルスタイル
```

## クリーンアップ
Docker を使った開発を終了する場合は、次のコマンドでコンテナとネットワークを停止・削除できます。
```bash
docker compose down
```
