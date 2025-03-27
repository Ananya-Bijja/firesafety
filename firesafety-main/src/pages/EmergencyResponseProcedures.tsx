// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import YouTube from "react-youtube"; // Ensure you installed react-youtube

// interface EmergencyResponseProps {
//   username: string | null;
//   onComplete: (moduleName: string, passed: boolean) => void;
// }

// const quizQuestions = [
//   {
//     question: "What should you do first during a fire emergency?",
//     options: [
//       "Try to extinguish the fire",
//       "Evacuate and raise the alarm",
//       "Call your manager",
//       "Ignore it",
//     ],
//     answer: "Evacuate and raise the alarm",
//   },
//   {
//     question: "Who should you call after ensuring safety?",
//     options: ["The media", "Emergency services", "Guests", "Friends"],
//     answer: "Emergency services",
//   },
// ];

// const EmergencyResponseProcedures: React.FC<EmergencyResponseProps> = ({ username, onComplete }) => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showQuiz, setShowQuiz] = useState(false);
//   const [completed, setCompleted] = useState(false);
//   const navigate = useNavigate();

//   const handleAnswer = (selectedOption: string) => {
//     if (selectedOption === quizQuestions[currentQuestion].answer) {
//       setScore(score + 1);
//     }
//     if (currentQuestion < quizQuestions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setCompleted(true);
//       const passed = score + 1 === quizQuestions.length; // Ensure the score matches total questions
//       onComplete("Emergency Response Procedures", passed);
//     }
//   };

//   const videoOptions = {
//     height: "360",
//     width: "100%",
//     playerVars: {
//       autoplay: 0,
//     },
//   };

//   return (
//     <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg">
//       <h1 className="text-2xl font-bold mb-4">🚑 Emergency Response Procedures</h1>
//       {username && <p className="text-gray-700 mb-4">Welcome, {username}! Learn how to respond effectively during emergencies.</p>}

//       <div className="mb-6">
//         <h2 className="text-xl font-semibold">🎥 Watch the Emergency Response Video</h2>
//         <div className="rounded-lg overflow-hidden mt-2">
//           <YouTube videoId="8WnTg6TNr98" opts={videoOptions} />
//         </div>
//       </div>

//       {!showQuiz && !completed && (
//         <button
//           onClick={() => setShowQuiz(true)}
//           className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//         >
//           🧩 Start Quiz
//         </button>
//       )}

//       {showQuiz && !completed && (
//         <div className="mt-6">
//           <h3 className="text-lg font-bold">{quizQuestions[currentQuestion].question}</h3>
//           <div className="mt-3 space-y-2">
//             {quizQuestions[currentQuestion].options.map((option) => (
//               <button
//                 key={option}
//                 onClick={() => handleAnswer(option)}
//                 className="block w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
//               >
//                 {option}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}

//       {completed && (
//         <div className="mt-6">
//           <h2 className="text-xl font-bold">{score === quizQuestions.length ? "✅ Training Completed!" : "❌ Incomplete"}</h2>
//           <p className="text-gray-700">Your Score: {score}/{quizQuestions.length}</p>
//           {score === quizQuestions.length ? (
//             <div className="mt-4">
//               <p className="text-green-600 font-semibold">🎉 You passed!</p>
//             </div>
//           ) : (
//             <div className="mt-4">
//               <p className="text-red-600 font-semibold">❌ You need to score 100% to pass.</p>
//               <button
//                 onClick={() => {
//                   setCurrentQuestion(0);
//                   setScore(0);
//                   setCompleted(false);
//                   setShowQuiz(false);
//                 }}
//                 className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
//               >
//                 🔄 Retake Quiz
//               </button>
//             </div>
//           )}
//         </div>
//       )}

//       <button
//         onClick={() => navigate("/dashboard")}
//         className="mt-6 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
//       >
//         ⬅ Back to Dashboard
//       </button>
//     </div>
//   );
// };

// export default EmergencyResponseProcedures;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube"; // Ensure you installed react-youtube

interface EmergencyResponseProps {
  username: string | null;
  onComplete: (moduleName: string, passed: boolean) => void;
}

// 🔥 Harder quiz questions
const quizQuestions = [
  {
    question: "What is the primary cause of death in a fire?",
    options: [
      "Burns",
      "Structural collapse",
      "Smoke inhalation",
      "Explosions",
    ],
    answer: "Smoke inhalation",
  },
  {
    question: "Which type of fire extinguisher should be used for electrical fires?",
    options: ["Water", "Foam", "CO2", "Wet Chemical"],
    answer: "CO2",
  },
  {
    question: "If you are trapped in a burning building, what is the best course of action?",
    options: [
      "Break a window and jump",
      "Stay low to avoid smoke, signal for help",
      "Try to find the fire source",
      "Run towards the fire exits without checking",
    ],
    answer: "Stay low to avoid smoke, signal for help",
  },
  {
    question: "Which of the following is NOT a fire prevention measure?",
    options: [
      "Keeping exit routes clear",
      "Overloading electrical circuits",
      "Regular fire drills",
      "Installing smoke detectors",
    ],
    answer: "Overloading electrical circuits",
  },
  {
    question: "What is the first step in using a fire extinguisher? (PASS method)",
    options: [
      "Squeeze the handle",
      "Aim at the flames",
      "Pull the pin",
      "Sweep side to side",
    ],
    answer: "Pull the pin",
  },
];

const EmergencyResponseProcedures: React.FC<EmergencyResponseProps> = ({ username, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (selectedOption: string) => {
    if (selectedOption === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
      const passed = score + 1 === quizQuestions.length; // Ensure 100% for passing
      onComplete("Emergency Response Procedures", passed);
    }
  };

  const videoOptions = {
    height: "360",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">🚑 Emergency Response Procedures</h1>
      {username && <p className="text-gray-700 mb-4">Welcome, {username}! Learn how to respond effectively during emergencies.</p>}

      <div className="mb-6">
        <h2 className="text-xl font-semibold">🎥 Watch the Emergency Response Video</h2>
        <div className="rounded-lg overflow-hidden mt-2">
          <YouTube videoId="8WnTg6TNr98" opts={videoOptions} />
        </div>
      </div>

      {!showQuiz && !completed && (
        <button
          onClick={() => setShowQuiz(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          🧩 Start Quiz
        </button>
      )}

      {showQuiz && !completed && (
        <div className="mt-6">
          <h3 className="text-lg font-bold">{quizQuestions[currentQuestion].question}</h3>
          <div className="mt-3 space-y-2">
            {quizQuestions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="block w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {completed && (
        <div className="mt-6">
          <h2 className="text-xl font-bold">{score === quizQuestions.length ? "✅ Training Completed!" : "❌ Incomplete"}</h2>
          <p className="text-gray-700">Your Score: {score}/{quizQuestions.length}</p>
          {score === quizQuestions.length ? (
            <div className="mt-4">
              <p className="text-green-600 font-semibold">🎉 You passed!</p>
            </div>
          ) : (
            <div className="mt-4">
              <p className="text-red-600 font-semibold">❌ You need to score 100% to pass.</p>
              <button
                onClick={() => {
                  setCurrentQuestion(0);
                  setScore(0);
                  setCompleted(false);
                  setShowQuiz(false);
                }}
                className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                🔄 Retake Quiz
              </button>
            </div>
          )}
        </div>
      )}

      <button
        onClick={() => navigate("/dashboard")}
        className="mt-6 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
      >
        ⬅ Back to Dashboard
      </button>
    </div>
  );
};

export default EmergencyResponseProcedures;