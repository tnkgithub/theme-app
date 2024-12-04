FROM node:20.16-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install next react react-dom

# # # prismaの起動に必要なパッケージ
RUN apt-get update && apt-get install -y openssl

RUN npm i -g prisma
RUN npm i @prisma/client

# RUN npm run build

EXPOSE 8000

# CMD ["npm", "run", "start", "-p", "8000"]