FROM node:18.17.0 as builder
LABEL authors="yangxy"

ENV WORKDIR=/net-tools-vue
WORKDIR $WORKDIR
COPY . $WORKDIR/
ARG version
RUN yarn install && yarn build

FROM nginx:alpine as prod
RUN mkdir /net-tools-vue
COPY --from=builder /net-tools-vue/dist /net-tools-vue
COPY --from=builder /net-tools-vue/docker/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80