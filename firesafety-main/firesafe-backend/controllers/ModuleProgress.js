const mongoose = require("mongoose");

const ModuleProgressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  moduleId: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  completedAt: {
    type: Date,
  },
});

module.exports = mongoose.model("ModuleProgress", ModuleProgressSchema);
