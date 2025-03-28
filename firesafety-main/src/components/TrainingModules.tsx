import { Play, CheckCircle } from "lucide-react"; // Icons
import { useNavigate } from "react-router-dom";
import type { TrainingModule } from "../types";

interface TrainingModulesProps {
  username: string | null;
  modules: TrainingModule[];
}

export default function TrainingModules({ username, modules }: TrainingModulesProps) {
  const navigate = useNavigate();

  const handleStartModule = (moduleId: string, moduleTitle: string) => {
    const routes: Record<string, string> = {
      "Fire Safety Basics": "/fire-safety-basics",
      "Emergency Response Procedures": "/emergency-response-procedures",
      "Fire Equipment Training": "/fire-equipment-training",
      "Evacuation Protocols": "/evacuation-protocols",
      "Guest Safety Management": "/guest-safety-management",
    };
    navigate(routes[moduleTitle] || `/module/${moduleId}`); // Fallback route
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Training Modules</h2>
      {username ? (
        <p className="text-gray-600 mb-4">Welcome, {username}! Select a module to begin.</p>
      ) : (
        <p className="text-gray-500 mb-4">Log in to access training modules.</p>
      )}
      
      <div className="space-y-4">
        {modules.length > 0 ? (
          modules.map((module) => (
            <div key={module.id} className="border rounded-lg p-4 hover:border-orange-600 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{module.title}</h3>
                  <p className="text-gray-600">{module.description}</p>
                  <p className="text-sm text-gray-500">Duration: {module.duration} minutes</p>
                </div>
                <div className="flex items-center space-x-2">
                  {module.completed ? (
                    <CheckCircle className="text-green-500" size={24} />
                  ) : (
                    <button
                      onClick={() => handleStartModule(module.id, module.title)}
                      className="flex items-center space-x-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
                    >
                      <Play size={16} />
                      <span>Start</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No modules available.</p>
        )}
      </div>
    </div>
  );
}