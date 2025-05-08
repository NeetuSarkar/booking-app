import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  date: Date,
});

export default mongoose.model("Activity", activitySchema);
