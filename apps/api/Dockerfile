FROM node:alpine AS builder
RUN apk update
WORKDIR /app
COPY . .
# RUN npx turbo prune --scope=api --docker

# First install dependencies (as they change less often)
COPY .gitignore .gitignore
RUN npm install

COPY turbo.json turbo.json
# RUN yarn turbo run build --filter=api...
RUN npx turbo run build --filter=api

FROM node:alpine AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 expressjs
RUN adduser --system --uid 1001 expressjs
USER expressjs
COPY --from=installer /app .

CMD node apps/api/dist/index.js
