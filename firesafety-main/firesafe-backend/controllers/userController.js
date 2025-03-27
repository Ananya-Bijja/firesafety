import UserProgress from '../models/UserProgress.js';

export const getUserProgress = async (req, res) => {
  const progress = await UserProgress.findOne();
  res.json(progress);
};
