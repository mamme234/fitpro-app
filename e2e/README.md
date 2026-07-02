E2E tests (Playwright)

Setup:
1. cd e2e
2. npm ci
3. npm run install:playwright

Run:
- Start the frontend (and backend if needed)
- npm run test

Notes:
- Set E2E_BASE_URL to point to the deployed or local frontend (default http://localhost:3000).
- Add more tests under e2e/tests/.
