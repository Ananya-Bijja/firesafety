import TrainingModule from '../models/TrainingModule.js';

export const getTrainingModules = async (req, res) => {
  const modules = await TrainingModule.find();
  res.json(modules);
};
