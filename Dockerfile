FROM alpine:latest
RUN apk add --no-cache nodejs npm python3

WORKDIR /app

COPY . /app

RUN npm install --only=production

ENTRYPOINT ["node"]
CMD ["./src/index.js"]