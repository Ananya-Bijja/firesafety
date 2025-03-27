import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

interface LoginProps {
  onLogin: (username: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Login API Response:", data); // ✅ Debugging

      if (!response.ok) throw new Error(data.message);

      // ✅ Now username exists!
      localStorage.setItem("username", data.username);
      onLogin(data.username);

      alert("Login successful!");
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-xl rounded-xl w-full sm:max-w-md md:max-w-sm lg:max-w-sm xl:max-w-md max-h-full overflow-auto">
        <h2 className="text-2xl font-bold text-center text-orange-600 mb-4">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-600 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-600 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-orange-600 font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
