# -------- BUILD STAGE --------
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json .
RUN npm install --only=production

COPY src ./src

# -------- RUNTIME STAGE --------
FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app /app

EXPOSE 3000

USER node

CMD ["node", "src/server.js"]
