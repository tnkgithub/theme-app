FROM node:20.16-slim

WORKDIR /app

COPY package*.json ./

RUN npm i -g @nestjs/cli

RUN npm i -g prisma
RUN npm i @prisma/client

COPY . .

CMD ["npm", "run", "start:dev"]
