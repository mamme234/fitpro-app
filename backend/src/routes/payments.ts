import { Router } from "express";
const router = Router();

// GET /api/classes - list classes
router.get("/", (_req, res) => {
  res.json([
    { id: 1, title: "Yoga - Morning", trainer: "Alice", start: "2026-07-10T09:00:00Z", capacity: 12 },
    { id: 2, title: "HIIT - Evening", trainer: "Bob", start: "2026-07-10T18:00:00Z", capacity: 20 }
  ]);
});

// POST /api/classes - create class (stub)
router.post("/", (req, res) => {
  // Validate payload and persist in DB in real implementation
  const payload = req.body;
  res.status(201).json({ id: 99, ...payload });
});

// GET /api/classes/:id - get a class
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  res.json({ id, title: `Class ${id}`, trainer: "TBD", start: new Date().toISOString(), capacity: 15 });
});

export default router;
