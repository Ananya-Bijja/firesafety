// import React, { useState, useEffect } from "react";
// import { Routes, Route, useLocation, useNavigate, Navigate } from "react-router-dom";
// import Header from "./components/Header";
// import Dashboard from "./components/Dashboard";
// import TrainingModules from "./components/TrainingModules";
// import SimulationScenarios from "./components/SimulationScenarios";
// import ModulePage from "./pages/ModulePage";
// import FireSafetyBasics from "./pages/FireSafetyBasics";
// import FireEquipmentTraining from "./pages/FireEquipmentTraining";
// import EmergencyResponseProcedures from "./pages/EmergencyResponseProcedures";
// import EvacuationProtocols from "./pages/EvacuationProtocols";
// import GuestSafetyManagement from "./pages/GuestSafetyManagement";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Profile from "./pages/Profile";
// import Loading from "./components/Loading";
// import type { TrainingModule, SimulationScenario, UserProgress } from "./types";

// const mockModules: TrainingModule[] = [
//   { id: "1", title: "Fire Safety Basics", description: "Learn the fundamentals of fire safety", duration: 30, completed: false },
//   { id: "2", title: "Emergency Response Procedures", description: "Step-by-step guide for handling fire emergencies", duration: 45, completed: false },
//   { id: "3", title: "Fire Equipment Training", description: "Learn to use fire extinguishers", duration: 60, completed: false },
//   { id: "4", title: "Evacuation Protocols", description: "Master the hotel evacuation procedures", duration: 40, completed: false },
//   { id: "5", title: "Guest Safety Management", description: "Ensure guest safety during emergencies", duration: 50, completed: false },
// ];

// const mockScenarios: SimulationScenario[] = [
//   { id: "1", title: "Kitchen Fire Response", description: "Practice responding to a fire in the hotel kitchen", difficulty: "beginner" },
//   { id: "2", title: "Guest Room Emergency", description: "Handle a fire emergency in a guest room", difficulty: "intermediate" },
//   { id: "3", title: "Full Building Evacuation", description: "Coordinate a complete hotel evacuation", difficulty: "advanced" },
// ];

// function App() {
//   const [username, setUsername] = useState<string | null>(null);  // Initially null
//   const [userProgress, setUserProgress] = useState<UserProgress>({
//     completedModules: 0,
//     totalModules: mockModules.length,
//     lastActivity: "Today",
//     score: 0,
//   });
//   const [loading, setLoading] = useState<boolean>(false);
//   const [isInitialLoading, setIsInitialLoading] = useState<boolean>(true);  // Track the initial loading state
//   const [modules, setModules] = useState<TrainingModule[]>(mockModules);
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Fetch user progress whenever username changes or after login
//   useEffect(() => {
//     const storedUsername = localStorage.getItem("username");
//     if (storedUsername) {
//       setUsername(storedUsername);
//     }
//     setIsInitialLoading(false); // Stop initial loading once username is fetched from localStorage
//   }, []);

//   // Fetch user progress if username exists
//   useEffect(() => {
//     if (username) {
//       setLoading(true);
//       fetchUserProgress(username);
//     }
//   }, [username]);

//   const fetchUserProgress = async (name: string) => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/userProgress/${name}`);
//       if (response.ok) {
//         const data = await response.json();
//         setUserProgress({
//           completedModules: data.completedModules.length,
//           totalModules: data.totalModules,
//           lastActivity: new Date(data.lastActivity).toLocaleDateString(),
//           score: data.score,
//         });

//         const moduleTitleToId: { [key: string]: string } = {
//           "Fire Safety Basics": "1",
//           "Emergency Response Procedures": "2",
//           "Fire Equipment Training": "3",
//           "Evacuation Protocols": "4",
//           "Guest Safety Management": "5",
//         };

//         setModules((prevModules) =>
//           prevModules.map((module) =>
//             data.completedModules.map((title: string) => moduleTitleToId[title]).includes(module.id)
//               ? { ...module, completed: true }
//               : module
//           )
//         );
//       } else {
//         console.log("No progress found for user:", name);
//       }
//     } catch (error) {
//       console.error("Error fetching progress:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleModuleCompletion = async (moduleId: string, passed: boolean) => {
//     if (passed) {
//       setModules((prevModules) =>
//         prevModules.map((module) =>
//           module.id === moduleId ? { ...module, completed: true } : module
//         )
//       );

//       try {
//         const response = await fetch("http://localhost:5000/api/userProgress/update", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ username, moduleId }),
//         });

//         if (response.ok) {
//           const updatedResponse = await fetch(`http://localhost:5000/api/userProgress/${username}`);
//           const data = await updatedResponse.json();

//           setUserProgress({
//             completedModules: data.completedModules.length,
//             totalModules: data.totalModules,
//             lastActivity: new Date(data.lastActivity).toLocaleDateString(),
//             score: data.score,
//           });

//           setModules((prevModules) =>
//             prevModules.map((module) =>
//               data.completedModules.includes(module.id.toString()) ? { ...module, completed: true } : module
//             )
//           );
//         }
//       } catch (error) {
//         console.error("Error updating progress:", error);
//       }
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("username");
//     setUsername(null);
//     setUserProgress({
//       completedModules: 0,
//       totalModules: mockModules.length,
//       lastActivity: "Today",
//       score: 0,
//     });
//     setModules(mockModules);
//     navigate("/login");
//   };

//   const handleLogin = async (name: string) => {
//     localStorage.setItem("username", name);
//     setUsername(name);
//     setLoading(true);
//     try {
//       const response = await fetch(`http://localhost:5000/api/userProgress/${name}`);
//       if (response.ok) {
//         const data = await response.json();

//         setUserProgress({
//           completedModules: data.completedModules.length,
//           totalModules: data.totalModules,
//           lastActivity: new Date(data.lastActivity).toLocaleDateString(),
//           score: data.score,
//         });

//         setModules((prevModules) =>
//           prevModules.map((module) =>
//             data.completedModules.includes(module.id) ? { ...module, completed: true } : module
//           )
//         );
//       }
//     } catch (error) {
//       console.error("Error fetching progress:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (isInitialLoading) {
//     return <Loading />;  // Show loading screen while initial loading is happening
//   }

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Header username={username} onLogout={handleLogout} />
//       <main className="container mx-auto px-4 py-8">
//         {loading ? (
//           <Loading />
//         ) : (
//           <Routes>
//             <Route
//               path="/"
//               element={username ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />}
//             />
//             <Route
//               path="/login"
//               element={username ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />}
//             />
//             <Route
//               path="/signup"
//               element={username ? <Navigate to="/dashboard" /> : <Signup />}
//             />
//             <Route path="/profile" element={<Profile username={username} onLogout={handleLogout} />} />
//             <Route
//               path="/dashboard"
//               element={
//                 username ? (
//                   <>
//                     <Dashboard username={username} progress={userProgress} />
//                     <TrainingModules username={username} modules={modules} />
//                     <SimulationScenarios username={username} scenarios={mockScenarios} />
//                   </>
//                 ) : (
//                   <Navigate to="/login" />
//                 )
//               }
//             />
//             <Route path="/module/:moduleId" element={<ModulePage username={username} />} />
//             <Route path="/fire-safety-basics" element={<FireSafetyBasics username={username} onComplete={handleModuleCompletion} />} />
//             <Route path="/fire-equipment-training" element={<FireEquipmentTraining username={username} onComplete={handleModuleCompletion} />} />
//             <Route path="/emergency-response-procedures" element={<EmergencyResponseProcedures username={username} onComplete={handleModuleCompletion} />} />
//             <Route path="/evacuation-protocols" element={<EvacuationProtocols username={username} onComplete={handleModuleCompletion} />} />
//             <Route path="/guest-safety-management" element={<GuestSafetyManagement username={username} onComplete={handleModuleCompletion} />} />
//           </Routes>
//         )}
//       </main>
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import TrainingModules from "./components/TrainingModules";
import ModulePage from "./pages/ModulePage";
import FireSafetyBasics from "./pages/FireSafetyBasics";
import FireEquipmentTraining from "./pages/FireEquipmentTraining";
import EmergencyResponseProcedures from "./pages/EmergencyResponseProcedures";
import EvacuationProtocols from "./pages/EvacuationProtocols";
import GuestSafetyManagement from "./pages/GuestSafetyManagement";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Loading from "./components/Loading";
import type { TrainingModule, UserProgress } from "./types";

const API_BASE_URL = "http://localhost:5000/api";

const mockModules: TrainingModule[] = [
  { id: "1", title: "Fire Safety Basics", description: "Learn the fundamentals of fire safety", duration: 30, completed: false },
  { id: "2", title: "Emergency Response Procedures", description: "Step-by-step guide for handling fire emergencies", duration: 45, completed: false },
  { id: "3", title: "Fire Equipment Training", description: "Learn to use fire extinguishers", duration: 60, completed: false },
  { id: "4", title: "Evacuation Protocols", description: "Master the hotel evacuation procedures", duration: 40, completed: false },
  { id: "5", title: "Guest Safety Management", description: "Ensure guest safety during emergencies", duration: 50, completed: false },
];

function App() {
  const [username, setUsername] = useState<string | null>(null);
  const [userProgress, setUserProgress] = useState<UserProgress>({
    completedModules: 0,
    totalModules: mockModules.length,
    lastActivity: "Today",
    score: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [modules, setModules] = useState<TrainingModule[]>(mockModules);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
      fetchUserProgress(storedUsername);
    }
  }, []);

  const fetchUserProgress = async (name: string) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/userProgress/${name}`);
      if (!response.ok) throw new Error("Failed to fetch progress");

      const data = await response.json();
      const completedModuleIds = data.completedModules.map((title: string) =>
        mockModules.find((mod) => mod.title === title)?.id
      );

      setUserProgress({
        completedModules: completedModuleIds.length,
        totalModules: mockModules.length,
        lastActivity: new Date(data.lastActivity).toLocaleDateString(),
        score: data.score,
      });

      setModules((prevModules) =>
        prevModules.map((module) => ({
          ...module,
          completed: completedModuleIds.includes(module.id),
        }))
      );
    } catch (error) {
      console.error("Error fetching progress:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleModuleCompletion = async (moduleId: string, passed: boolean) => {
    if (!passed) return;

    try {
      const response = await fetch(`${API_BASE_URL}/userProgress/update`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, moduleId }),
      });

      if (!response.ok) throw new Error("Failed to update progress");

      fetchUserProgress(username!);
    } catch (error) {
      console.error("Error updating progress:", error);
    }
  };

  const handleLogin = async (name: string) => {
    localStorage.setItem("username", name);
    setUsername(name);
    fetchUserProgress(name);
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername(null);
    setUserProgress({
      completedModules: 0,
      totalModules: mockModules.length,
      lastActivity: "Today",
      score: 0,
    });
    setModules(mockModules);
    navigate("/login");
  };

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header username={username} onLogout={handleLogout} />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={username ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} />
          <Route path="/login" element={username ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} />
          <Route path="/signup" element={username ? <Navigate to="/dashboard" /> : <Signup />} />
          <Route path="/profile" element={<Profile username={username} onLogout={handleLogout} />} />
          <Route
            path="/dashboard"
            element={
              username ? (
                <>
                  <Dashboard username={username} progress={userProgress} />
                  <TrainingModules username={username} modules={modules} />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/module/:moduleId" element={<ModulePage username={username} />} />
          <Route path="/fire-safety-basics" element={<FireSafetyBasics username={username} onComplete={handleModuleCompletion} />} />
          <Route path="/fire-equipment-training" element={<FireEquipmentTraining username={username} onComplete={handleModuleCompletion} />} />
          <Route path="/emergency-response-procedures" element={<EmergencyResponseProcedures username={username} onComplete={handleModuleCompletion} />} />
          <Route path="/evacuation-protocols" element={<EvacuationProtocols username={username} onComplete={handleModuleCompletion} />} />
          <Route path="/guest-safety-management" element={<GuestSafetyManagement username={username} onComplete={handleModuleCompletion} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
