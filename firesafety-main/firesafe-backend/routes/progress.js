const express = require("express");
const Progress = require("../models/Progress");
const router = express.Router();

router.post("/save", async (req, res) => {
  const { userId, moduleId, score } = req.body;
  await Progress.findOneAndUpdate(
    { userId, moduleId },
    { score, completed: true, lastUpdated: new Date() },
    { upsert: true }
  );
  res.json({ message: "Progress saved" });
});

router.get("/:userId", async (req, res) => {
  const progress = await Progress.find({ userId: req.params.userId });
  res.json(progress);
});

module.exports = router;
