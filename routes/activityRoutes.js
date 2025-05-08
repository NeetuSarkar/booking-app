import express, { Router } from "express";
import {
  getActivities,
  createActivity,
} from "../controllers/activityController.js";

const router = Router();

router.get("/", getActivities);
router.post("/create", createActivity);

export default router;
