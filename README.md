# 2024年度 修論用システム

## 仕様
構築環境：Docker compose  
フロントエンド：Next.js，tailwindcss  
バックエンド：Next.js，prisma(ORM)  
データベース：PostgreSQL  
その他：storybook，nginx(サーバー) 


### 画像やメタデータなどの保管場所（サイズが大きいので注意）
* public/posters: 全ポスター画像
* public/tmp/data: メタデータや画像内物体名などのデータベース保存用csvファイル

## 手順
### 環境構築
Docker環境なので、自力で調べろ

### データベース構築
#### prismaによるマイグレーション
* docker compose内で
