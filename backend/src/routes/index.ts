import { Router } from "express";
import authRouter from "./auth";
import usersRouter from "./users";
import classesRouter from "./classes";
import paymentsRouter from "./payments";

const router = Router();

router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/classes", classesRouter);
router.use("/payments", paymentsRouter);
router.get("/health", (_req, res) => res.json({ status: "ok" }));

export default router;
