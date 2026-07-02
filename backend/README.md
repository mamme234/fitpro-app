Backend (Node + TypeScript + Express)

Start locally:
1. cd backend
2. npm install (or pnpm install)
3. cp ../.env.example .env
4. npm run dev

Build:
1. npm run build
2. npm start

Notes:
- Routes are scaffolds/stubs. Add a real DB (Prisma/TypeORM) and replace in-memory stubs before production.
- Replace JWT_SECRET and other secrets with secure values.
