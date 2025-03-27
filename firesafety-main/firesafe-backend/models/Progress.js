const mongoose = require("mongoose");

const ProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  moduleId: { type: mongoose.Schema.Types.ObjectId, ref: "Module" },
  score: Number,
  completed: Boolean,
  lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Progress", ProgressSchema);
