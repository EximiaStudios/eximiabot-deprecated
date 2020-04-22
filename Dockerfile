FROM alpine:latest
RUN apk add --no-cache nodejs npm sqlite-dev python make g++

WORKDIR /app

COPY . /app

RUN npm install --only=production

ENTRYPOINT ["node"]
CMD ["./src/index.js"]