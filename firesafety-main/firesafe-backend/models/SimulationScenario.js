import mongoose from 'mongoose';

const simulationScenarioSchema = new mongoose.Schema({
  title: String,
  description: String,
  difficulty: String,
});

export default mongoose.model('SimulationScenario', simulationScenarioSchema);
