FROM node:21-alpine

WORKDIR /usr/src/full-stack-shop

COPY package*.json ./
COPY yarn.lock ./

COPY shop-ts/package*json shop-ts/
RUN yarn run install-client

COPY shop-ts-backend shop-ts-backend/
RUN yarn install-server 

COPY . /usr/src/full-stack-shop/



