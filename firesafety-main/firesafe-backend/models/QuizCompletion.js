const mongoose = require("mongoose");

const QuizCompletionSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  module: { type: String, required: true },
  completed: { type: Boolean, default: false },
  score: { type: Number, default: 0 },
});

module.exports = mongoose.model("QuizCompletion", QuizCompletionSchema);
