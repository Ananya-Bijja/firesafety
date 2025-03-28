import { BookOpen, PlayCircle, Award, Clock } from "lucide-react";
import type { UserProgress } from "../types";

interface DashboardProps {
  username?: string | null;
  progress?: UserProgress | null;
}

export default function Dashboard({ username = "Guest", progress }: DashboardProps) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Welcome, {username}!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard 
          title="Completed Modules"
          value={`${progress?.completedModules ?? 0}/${progress?.totalModules ?? 0}`}
          icon={<BookOpen className="text-orange-600" size={24} />} 
        />

        <StatCard 
          title="Active Simulations"
          value={progress?.activeSimulations?.toString() ?? "0"} 
          icon={<PlayCircle className="text-orange-600" size={24} />} 
        />

        <StatCard 
          title="Overall Score"
          value={`${progress?.score ?? 0}%`} 
          icon={<Award className="text-orange-600" size={24} />} 
        />

        <StatCard 
          title="Last Activity"
          value={progress?.lastActivity || "N/A"} 
          icon={<Clock className="text-orange-600" size={24} />} 
        />
      </div>
    </div>
  );
}

// ✅ Reusable StatCard Component to avoid duplicate code
interface StatCardProps {
  title: string;
  value: string;
  icon: JSX.Element;
}

const StatCard = ({ title, value, icon }: StatCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
      {icon}
    </div>
  </div>
);
