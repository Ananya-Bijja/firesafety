import express from "express";
import UserProgress from "../models/UserProgress.js";

const router = express.Router();

// ✅ Get user progress
router.get("/:username", async (req, res) => {
  try {
    const user = await UserProgress.findOne({ username: req.params.username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
        completedModules: user.completedModules.map(String), // Ensures string format
        totalModules: user.totalModules,
        lastActivity: user.lastActivity,
        score: user.score,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/update", async (req, res) => {
    const { username, moduleId } = req.body;
  
    try {
      let user = await UserProgress.findOne({ username });
  
      if (!user) {
        user = new UserProgress({
          username,
          completedModules: [],
          totalModules: 5,
          lastActivity: new Date().toISOString(),
          score: 0,
        });
      }
  
      // ❌ BUG: Check if the module ID is stored as a title instead of an ID
      console.log("Received moduleId:", moduleId);
  
      // ✅ FIX: Store module IDs instead of titles
      if (!user.completedModules.includes(moduleId)) {
        user.completedModules.push(moduleId); // Should store an ID like "1" instead of "Fire Safety Basics"
        user.lastActivity = new Date().toISOString();
        user.score += 10;
      }
  
      await user.save();
  
      res.json({
        message: "Progress updated",
        completedModules: user.completedModules, // ✅ Should be ["1", "2"] instead of ["Fire Safety Basics"]
        totalModules: user.totalModules,
        lastActivity: user.lastActivity,
        score: user.score,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  


export default router;
