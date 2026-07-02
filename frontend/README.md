Frontend (React + TypeScript + Vite)

Local dev:
1. cd frontend
2. npm install (or pnpm install)
3. cp ../.env.example .env
4. npm run dev
   - Open http://localhost:3000

Build:
1. npm run build
2. npm run preview

Notes:
- VITE_API_URL controls the API base URL (e.g. http://localhost:4000/api).
- The frontend uses a simple JWT-storage approach (localStorage). Replace with a secure auth flow for production.
