import SimulationScenario from '../models/SimulationScenario.js';

export const getSimulationScenarios = async (req, res) => {
  const scenarios = await SimulationScenario.find();
  res.json(scenarios);
};
