#!/bin/bash
FROM --platform=linux/x86_64 nginx:alpine
WORKDIR /app
COPY ./dist/portafolioNG /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
