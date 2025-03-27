// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import YouTube from "react-youtube"; // Ensure you installed react-youtube

// const quizQuestions = [
//   {
//     question: "What is the first action when hearing a fire alarm?",
//     options: ["Wait for instructions", "Evacuate immediately", "Call the front desk", "Finish your task"],
//     answer: "Evacuate immediately",
//   },
//   {
//     question: "Where should you assemble after evacuation?",
//     options: ["Lobby", "Elevator", "Assembly point", "Cafeteria"],
//     answer: "Assembly point",
//   },
// ];

// const EvacuationProtocols = () => {
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
//       if (score + 1 === quizQuestions.length) {
//         setCompleted(true);
//       }
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
//       <h1 className="text-2xl font-bold mb-4">🚨 Evacuation Protocols</h1>

//       {/* Embedded YouTube Video */}
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold">🎥 Watch the Evacuation Protocols Video</h2>
//         <div className="rounded-lg overflow-hidden mt-2">
//           <YouTube videoId="3aLWlDY_G9w" opts={videoOptions} />
//         </div>
//       </div>

//       {/* Quiz Start Button */}
//       {!showQuiz && !completed && (
//         <button
//           onClick={() => setShowQuiz(true)}
//           className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//         >
//           🧩 Start Quiz
//         </button>
//       )}

//       {/* Quiz Component */}
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

//       {/* Quiz Completed */}
//       {completed && (
//         <div className="mt-6">
//           <h2 className="text-xl font-bold">{score === quizQuestions.length ? "✅ Module Completed!" : "❌ Incomplete"}</h2>
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

// export default EvacuationProtocols;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube"; // Ensure you installed react-youtube

const quizQuestions = [
  {
    question: "What is the first action when hearing a fire alarm?",
    options: ["Wait for instructions", "Evacuate immediately", "Call the front desk", "Finish your task"],
    answer: "Evacuate immediately",
  },
  {
    question: "Where should you assemble after evacuation?",
    options: ["Lobby", "Elevator", "Assembly point", "Cafeteria"],
    answer: "Assembly point",
  },
  {
    question: "What should you do if you encounter heavy smoke in an evacuation route?",
    options: [
      "Walk normally and cover your mouth",
      "Stay in place and wait for help",
      "Crawl on the floor to avoid inhaling smoke",
      "Run as fast as possible to exit",
    ],
    answer: "Crawl on the floor to avoid inhaling smoke",
  },
 
  {
    question: "What is the safest way to check if a door is safe to open during a fire?",
    options: [
      "Kick the door open and check the hallway",
      "Feel the door handle and surface with the back of your hand",
      "Open it slightly and look outside",
      "Knock loudly and wait for an answer",
    ],
    answer: "Feel the door handle and surface with the back of your hand",
  },
  {
    question: "In a multi-story building, what is the best course of action if the lower floors are on fire?",
    options: [
      "Jump out of a window if possible",
      "Use the elevator to descend quickly",
      "Move to the nearest stairwell and evacuate downward",
      "Stay on your floor and block any gaps under doors",
    ],
    answer: "Move to the nearest stairwell and evacuate downward",
  },
];

const EvacuationProtocols = () => {
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
      if (score + 1 === quizQuestions.length) {
        setCompleted(true);
      }
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
      <h1 className="text-2xl font-bold mb-4">🚨 Evacuation Protocols</h1>

      {/* Embedded YouTube Video */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">🎥 Watch the Evacuation Protocols Video</h2>
        <div className="rounded-lg overflow-hidden mt-2">
          <YouTube videoId="3aLWlDY_G9w" opts={videoOptions} />
        </div>
      </div>

      {/* Quiz Start Button */}
      {!showQuiz && !completed && (
        <button
          onClick={() => setShowQuiz(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          🧩 Start Quiz
        </button>
      )}

      {/* Quiz Component */}
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

      {/* Quiz Completed */}
      {completed && (
        <div className="mt-6">
          <h2 className="text-xl font-bold">{score === quizQuestions.length ? "✅ Module Completed!" : "❌ Incomplete"}</h2>
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

export default EvacuationProtocols;