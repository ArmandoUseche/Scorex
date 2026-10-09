import { Router } from "express";
import mongoose from "mongoose";

const router = Router();

router.get("/", (_req, res) => {
  const db = mongoose.connection.readyState === 1 ? "connected" : "disconnected";
  res.json({ status: "ok", db, timestamp: new Date().toISOString() });
});

export default router;