FROM node:18.17.0 as builder
LABEL authors="yangxy"

ENV WORKDIR=/occn-admin
WORKDIR $WORKDIR
COPY . $WORKDIR/
ARG version
RUN yarn config set registry http://registry.npm.taobao.org/ && yarn install && yarn build

FROM nginx:alpine as prod
RUN mkdir /occn-admin
COPY --from=builder /occn-admin/dist /occn-admin
COPY --from=builder /occn-admin/docker/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
