import { Router } from "express";
const router = Router();

// GET /api/users - list users (stub)
router.get("/", (_req, res) => {
  res.json([{ id: 1, name: "Demo Member", email: "member@example.com", role: "member" }]);
});

// GET /api/users/:id - get user (stub)
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  res.json({ id, name: `User ${id}`, email: `user${id}@example.com`, role: "member" });
});

export default router;
