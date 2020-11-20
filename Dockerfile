FROM node:12-alpine

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

WORKDIR /app

RUN yarn global add gatsby-cli
RUN apk add autoconf automake libtool build-base pkgconf nasm tiff jpeg zlib zlib-dev file

COPY ./app/package.json ./
COPY ./app/yarn.lock ./

RUN yarn
