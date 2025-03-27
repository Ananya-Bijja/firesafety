import express from 'express';
import { getSimulationScenarios } from '../controllers/simulationController.js';

const router = express.Router();
router.get('/', getSimulationScenarios);

export default router;
