import mongoose from 'mongoose';

const trainingModuleSchema = new mongoose.Schema({
  title: String,
  description: String,
  duration: Number,
  completed: Boolean,
});

export default mongoose.model('TrainingModule', trainingModuleSchema);
