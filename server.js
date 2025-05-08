import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import activityRoutes from "./routes/activityRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

import connectDB from "./config/db.js";

// gBfDIgI2sICvw2JG

//Import routes

dotenv.config();
connectDB();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/auth", authRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/bookings/", bookingRoutes);

app.get("/", (req, res) => {
  res.end("hello to server");
});

//Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
