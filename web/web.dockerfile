FROM node:20.16-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install next react react-dom

# storybook
RUN npm install -D @storybook/react @storybook/addon-actions @storybook/addon-links @storybook/addons

# prismaの起動に必要なパッケージ
RUN apt-get update && apt-get install -y openssl

# prismaのインストール
RUN npm i -g prisma
RUN npm i @prisma/client

