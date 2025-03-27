const express = require("express");
const router = express.Router();
const QuizCompletion = require("../models/QuizCompletion");

// Check if the quiz is completed
router.get("/completion-status", async (req, res) => {
  const { userId, module } = req.query;
  try {
    const quiz = await QuizCompletion.findOne({ userId, module });
    res.json({ completed: quiz ? quiz.completed : false });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Mark quiz as completed
router.post("/complete", async (req, res) => {
  const { userId, module, completed, score } = req.body;
  try {
    let quiz = await QuizCompletion.findOne({ userId, module });

    if (!quiz) {
      quiz = new QuizCompletion({ userId, module, completed, score });
    } else {
      quiz.completed = completed;
      quiz.score = score;
    }

    await quiz.save();
    res.json({ message: "Quiz completion recorded" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
