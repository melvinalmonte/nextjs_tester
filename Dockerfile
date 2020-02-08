FROM node:13.7.0-alpine3.11

WORKDIR /app/src

COPY . .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm", "run", "dev"]