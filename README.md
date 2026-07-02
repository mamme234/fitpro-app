# Gym App Pro

Production-ready scaffold for Gym App (backend: Node.js + TypeScript, frontend: React + TypeScript + Tailwind).

Features
- User auth (JWT) with roles: admin / trainer / member (scaffold)
- Classes & scheduling API endpoints (stubs)
- Payments endpoints (Stripe placeholders)
- OpenAPI spec (openapi.yml)
- Docker + docker-compose (Postgres, backend, frontend)
- GitHub Actions CI: lint, test, build
- Unit tests (Jest) and E2E scaffold (Playwright)

Quick start (development)
1. Copy .env.example to .env and set values.
2. Start services:
   docker-compose up --build
3. Backend: http://localhost:4000
   Frontend: http://localhost:3000

For full instructions see docs/SETUP.md
