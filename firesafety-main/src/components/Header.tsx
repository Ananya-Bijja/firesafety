import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Flame, Bell, UserCircle } from "lucide-react";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const handleProfileClick = () => {
    // If we're on the Profile page, navigate back to the Dashboard
    if (location.pathname === "/profile") {
      navigate("/dashboard");
    } else {
      navigate("/profile"); // Otherwise, navigate to Profile
    }
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
            <button className="p-2 hover:bg-orange-700 rounded-full">
              {/* You can add any icon or functionality here */}
            </button>
            <button
              className="p-2 hover:bg-orange-700 rounded-full"
              onClick={handleProfileClick} // Handle profile click
            >
              <UserCircle size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
