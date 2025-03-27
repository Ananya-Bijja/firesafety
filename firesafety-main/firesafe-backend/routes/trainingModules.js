import express from 'express';
import { getTrainingModules } from '../controllers/trainingController.js';

const router = express.Router();
router.get('/', getTrainingModules);

export default router;
