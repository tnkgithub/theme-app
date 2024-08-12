FROM node:20.16-slim

WORKDIR /app

COPY package*.json ./

COPY . .

# CMD ["npm", "run", "dev"]

COPY startup.sh /startup.sh
RUN chmod 744 /startup.sh

CMD ["/startup.sh"]