FROM node:20.16-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

# Next.js をビルド
RUN npm install next react react-dom

COPY . .

# # storybookの起動に必要なパッケージ
RUN apt-get update && apt-get install -y xdg-utils

# # # prismaの起動に必要なパッケージ
RUN apt-get update && apt-get install -y openssl



RUN npm i -g prisma
RUN npm i @prisma/client

# CMD ["npm", "run", "dev"]