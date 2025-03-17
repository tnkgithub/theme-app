# 2024年度 修論用システム

## 仕様
* 構築環境：Docker compose
* フロントエンド：Next.js，tailwindcss
* バックエンド：Next.js，prisma(ORM)
* データベース：PostgreSQL
* その他：storybook，nginx(サーバー)

  
##### 画像やメタデータなどの保管場所（サイズが大きいので注意）
* public/posters: 全ポスター画像
* public/tmp/data: メタデータや画像内物体名などのデータベース保存用csvファイル


## 環境構築
Docker環境なので、自力で頑張って

## データベース構築
#### prismaによるマイグレーション

※ スキーマ設定は prisma/schema.prisma に記述

マイグレーションファイルの生成（テーブルを更新した場合はファイル名を変更してね）
```bash
// docker内で実行
// --name *** でファイル名指定
npx prisma migrate dev --name init
```

#### データベースへのデータの追加

以下の順番でコマンドを実行

※ データ追加用ソースコードは src/lib/prisma/

1. node src/lib/prisma/

