import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message);

      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="p-8 bg-white shadow-xl rounded-xl w-full sm:max-w-md md:max-w-sm lg:max-w-md">
        <h2 className="text-2xl font-bold text-center text-orange-600 mb-4">Signup</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-600 focus:outline-none"
            />
          </div>
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
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-orange-600 font-medium hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
