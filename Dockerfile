FROM alpine:latest
RUN apk add --no-cache nodejs npm python make

WORKDIR /app

COPY . /app

RUN npm install --only=production

ENTRYPOINT ["node"]
CMD ["./src/index.js"]