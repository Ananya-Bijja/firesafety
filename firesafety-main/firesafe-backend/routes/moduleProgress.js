import express from "express";
import ModuleProgress from "../models/ModuleProgress.js"; // Ensure your model file has `.js` extension

const router = express.Router();

// Save quiz score and completion status
router.post("/save-progress", async (req, res) => {
    const { userId, moduleId, score } = req.body;

    try {
        let progress = await ModuleProgress.findOne({ userId, moduleId });

        if (progress) {
            progress.score = score;
            progress.completed = true;
        } else {
            progress = new ModuleProgress({ userId, moduleId, score, completed: true });
        }

        await progress.save();
        res.status(200).json({ message: "Progress saved successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error saving progress", error });
    }
});

export default router;
