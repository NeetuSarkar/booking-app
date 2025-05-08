import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  getMyBookings,
  bookActivity,
} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/book", protect, bookActivity);
router.get("/my-bookings", protect, getMyBookings);

export default router;
