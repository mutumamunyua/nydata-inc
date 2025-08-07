# 1) Install dependencies only when they change
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# 2) Build the Next.js app
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# 3) Run the app in production mode
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
# Expose port (Cloud Run picks this up automatically)
EXPOSE 8080

# Copy built assets and dependencies
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Start the Next.js server
CMD ["npm", "start"]
