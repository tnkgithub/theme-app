FROM node:20.16-slim

WORKDIR /app

COPY package*.json ./

COPY . .

# # storybookの起動に必要なパッケージ
RUN apt-get update && apt-get install -y xdg-utils

# # # prismaの起動に必要なパッケージ
RUN apt-get update && apt-get install -y openssl

RUN npm install

# RUN npm i -g prisma
# RUN npm i @prisma/client

CMD ["npm", "run", "dev"]