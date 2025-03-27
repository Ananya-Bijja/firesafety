import React from "react";
import { BookOpen, PlayCircle, Award, Clock } from "lucide-react";
import type { UserProgress } from "../types";

interface DashboardProps {
  username: string | null;
  progress: UserProgress;
}

export default function Dashboard({ username, progress }: DashboardProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Welcome, {username ? username : "Guest"}!</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Completed Modules</p>
              <p className="text-2xl font-bold">{progress.completedModules}/{progress.totalModules}</p>
            </div>
            <BookOpen className="text-orange-600" size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Active Simulations</p>
              <p className="text-2xl font-bold">2</p>
            </div>
            <PlayCircle className="text-orange-600" size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Overall Score</p>
              <p className="text-2xl font-bold">{progress.score}%</p>
            </div>
            <Award className="text-orange-600" size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Last Activity</p>
              <p className="text-2xl font-bold">{progress.lastActivity}</p>
            </div>
            <Clock className="text-orange-600" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
