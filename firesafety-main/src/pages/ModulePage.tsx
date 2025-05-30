import { useParams } from "react-router-dom";

interface ModulePageProps {
  username: string | null;
}

export default function ModulePage({ username }: ModulePageProps) {
  const { moduleId } = useParams(); // Get module ID from URL

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold">Module {moduleId}</h2>
      <p className="text-gray-600">This is where module details will be shown.</p>
      <p className="text-gray-500">You can fetch module content based on {moduleId}.</p>
      <p className="text-gray-700">Logged in as: {username || "Guest"}</p>
    </div>
  );
}
