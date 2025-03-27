import React from "react";
import { useNavigate } from "react-router-dom";

interface ProfileProps {
  username: string | null;
  onLogout: () => void; // Pass the logout handler as a prop
}

const Profile: React.FC<ProfileProps> = ({ username, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Call the parent's logout handler (if available)
    onLogout();

    // Redirect to the login page
    navigate("/login");
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold">Profile</h2>
      {username ? (
        <>
          <p className="mt-2">
            <strong>Username:</strong> {username}
          </p>
          <button
            onClick={handleLogout}
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
          >
            Logout
          </button>
        </>
      ) : (
        <p className="text-gray-500">No user logged in.</p>
      )}
    </div>
  );
};

export default Profile;
