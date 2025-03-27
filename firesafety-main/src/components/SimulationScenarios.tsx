import React from "react";
import { PlayCircle } from "lucide-react";
import type { SimulationScenario } from "../types";

interface SimulationScenariosProps {
  username: string | null;
  scenarios: SimulationScenario[];
  onStartSimulation: (scenarioId: string) => void;
}

export default function SimulationScenarios({ username, scenarios, onStartSimulation }: SimulationScenariosProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-8">
      <h2 className="text-xl font-bold mb-4">Interactive Simulations</h2>
      {username && <p className="text-gray-600 mb-4">Welcome, {username}! Choose a scenario to start.</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {scenarios.map((scenario) => (
          <div key={scenario.id} className="border rounded-lg p-4 hover:border-orange-600 transition-colors">
            <div className="flex flex-col h-full">
              <h3 className="font-semibold">{scenario.title}</h3>
              <p className="text-gray-600 flex-grow">{scenario.description}</p>
              <div className="mt-4">
                <span
                  className={`inline-block px-2 py-1 rounded text-sm ${
                    scenario.difficulty === "beginner"
                      ? "bg-green-100 text-green-800"
                      : scenario.difficulty === "intermediate"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {scenario.difficulty.charAt(0).toUpperCase() + scenario.difficulty.slice(1)}
                </span>
                <button
                  onClick={() => onStartSimulation(scenario.id)}
                  className="mt-2 w-full flex items-center justify-center space-x-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
                >
                  <PlayCircle size={16} />
                  <span>Start Simulation</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
