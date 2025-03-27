import mongoose from "mongoose";

const userProgressSchema = new mongoose.Schema({
  username: String,
  completedModules: [{ type: String }], // Store completed module IDs
  totalModules: { type: Number, default: 5 },
  lastActivity: { type: Date, default: Date.now },
  score: Number,
});

const UserProgress = mongoose.model("UserProgress", userProgressSchema);
export default UserProgress; // ✅ Use ES6 export
