FROM node:20-alpine
WORKDIR /app

# Install pnpm (optional) and dependencies
RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml* ./
RUN if [ -f pnpm-lock.yaml ]; then pnpm install --frozen-lockfile --prod; else pnpm install --prod; fi

COPY . .
RUN pnpm build

EXPOSE 4000
CMD ["node", "dist/index.js"]
