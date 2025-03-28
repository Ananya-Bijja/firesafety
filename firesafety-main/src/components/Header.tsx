import { useNavigate, useLocation } from "react-router-dom";
import { Flame, UserCircle } from "lucide-react";

interface HeaderProps {
  username: string | null;
  onLogout: () => void;
}

export default function Header({ username, onLogout }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleProfileClick = () => {
    navigate(location.pathname === "/profile" ? "/dashboard" : "/profile");
  };

  return (
    <header className="bg-orange-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Flame size={32} />
            <h1 className="text-2xl font-bold">FireSafe AI Training</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-medium">{username ?? "Guest"}</span>
            <button className="p-2 hover:bg-orange-700 rounded-full" onClick={handleProfileClick}>
              <UserCircle size={24} />
            </button>
            <button className="p-2 bg-red-500 hover:bg-red-700 text-white rounded" onClick={onLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
