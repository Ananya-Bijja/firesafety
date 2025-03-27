export interface TrainingModule {
  id: string;
  title: string;
  description: string;
  duration: number;
  completed: boolean;
}

export interface SimulationScenario {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface UserProgress {
  completedModules: number;
  totalModules: number;
  lastActivity: string;
  score: number;
}