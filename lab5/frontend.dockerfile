FROM node:14.16.0-alpine3.13

WORKDIR /app

COPY . /app

RUN npm run install

ENTRYPOINT npm run start