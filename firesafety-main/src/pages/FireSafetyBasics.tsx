// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const quizQuestions = [
//   {
//     question: "What is the most common cause of fire in hotels?",
//     options: ["Smoking", "Electrical faults", "Cooking", "Candles"],
//     answer: "Cooking",
//   },
//   {
//     question: "What does 'PASS' stand for when using a fire extinguisher?",
//     options: [
//       "Pull, Aim, Squeeze, Sweep",
//       "Push, Aim, Squeeze, Spray",
//       "Pull, Alert, Stand, Sweep",
//       "Push, Alert, Squeeze, Spray",
//     ],
//     answer: "Pull, Aim, Squeeze, Sweep",
//   },
// ];

// interface FireSafetyBasicsProps {
//   username: string | null;
//   onComplete: (moduleName: string, passed: boolean) => void;
// }

// export default function FireSafetyBasics({ username, onComplete }: FireSafetyBasicsProps) {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showQuiz, setShowQuiz] = useState(false);
//   const [quizFinished, setQuizFinished] = useState(false);
//   const navigate = useNavigate();

//   const handleAnswer = (selectedOption: string) => {
//     if (selectedOption === quizQuestions[currentQuestion].answer) {
//       setScore(score + 1);
//     }

//     if (currentQuestion < quizQuestions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       const finalScore = score + (selectedOption === quizQuestions[currentQuestion].answer ? 1 : 0);
//       const passed = finalScore === quizQuestions.length;
//       setQuizFinished(true);

//       if (passed) {
//         onComplete("Fire Safety Basics", true);
//       }
//     }
//   };

//   return (
//     <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg">
//       <h1 className="text-2xl font-bold mb-4">🔥 Fire Safety Basics</h1>

//       {username && <p className="text-gray-700 mb-4">Welcome, {username}! Learn the fundamentals of fire safety.</p>}

//       {/* Video Tutorial */}
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold">🎥 Watch the Fire Safety Video</h2>
//         <iframe
//           className="w-full h-64 rounded-lg mt-2"
//           src="https://www.youtube.com/embed/lUojO1HvC8c"
//           title="Fire Safety Basics Video"
//           allowFullScreen
//         ></iframe>
//       </div>

//       {/* Start Quiz Button */}
//       {!showQuiz && !quizFinished && (
//         <button
//           onClick={() => setShowQuiz(true)}
//           className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//         >
//           🧩 Start Quiz
//         </button>
//       )}

//       {/* Quiz Section */}
//       {showQuiz && !quizFinished && (
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

//       {/* Quiz Results (Only if user finished answering all questions) */}
//       {quizFinished && (
//         <div className="mt-6">
//           <p className="text-gray-700">Your Score: {score}/{quizQuestions.length}</p>

//           {score === quizQuestions.length ? (
//             <p className="text-green-600 font-semibold">🎉 You passed the quiz!</p>
//           ) : (
//             <div className="mt-4">
//               <p className="text-red-600 font-semibold">❌ You need to score 100% to pass.</p>
//               <button
//                 onClick={() => {
//                   setCurrentQuestion(0);
//                   setScore(0);
//                   setQuizFinished(false);
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

//       {/* Back Button */}
//       <button
//         onClick={() => navigate("/dashboard")}
//         className="mt-6 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
//       >
//         ⬅ Back to Dashboard
//       </button>
//     </div>
//   );
// }


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const quizQuestions = [
  {
    question: "What is the most common cause of fire in hotels?",
    options: ["Smoking", "Electrical faults", "Cooking", "Candles"],
    answer: "Cooking",
  },
  {
    question: "What does 'PASS' stand for when using a fire extinguisher?",
    options: [
      "Pull, Aim, Squeeze, Sweep",
      "Push, Aim, Squeeze, Spray",
      "Pull, Alert, Stand, Sweep",
      "Push, Alert, Squeeze, Spray",
    ],
    answer: "Pull, Aim, Squeeze, Sweep",
  },
  {
    question: "What should you do if a fire starts in your hotel room?",
    options: ["Open windows to let smoke escape", "Use the elevator to exit", "Stay low and crawl to safety", "Hide under a bed"],
    answer: "Stay low and crawl to safety",
  },
  {
    question: "Which fire classification covers electrical fires?",
    options: ["Class A", "Class B", "Class C", "Class D"],
    answer: "Class C",
  },
  {
    question: "What is the safest way to evacuate during a fire?",
    options: ["Take the elevator", "Run through the smoke", "Use the stairs", "Wait for firefighters"],
    answer: "Use the stairs",
  },
];

interface FireSafetyBasicsProps {
  username: string | null;
  onComplete: (moduleName: string, passed: boolean) => void;
}

export default function FireSafetyBasics({ username, onComplete }: FireSafetyBasicsProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = (selectedOption: string) => {
    if (selectedOption === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const finalScore = score + (selectedOption === quizQuestions[currentQuestion].answer ? 1 : 0);
      const passed = finalScore === quizQuestions.length;
      setQuizFinished(true);

      if (passed) {
        onComplete("Fire Safety Basics", true);
      }
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">🔥 Fire Safety Basics</h1>

      {username && <p className="text-gray-700 mb-4">Welcome, {username}! Learn the fundamentals of fire safety.</p>}

      {/* Video Tutorial */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">🎥 Watch the Fire Safety Video</h2>
        <iframe
          className="w-full h-64 rounded-lg mt-2"
          src="https://www.youtube.com/embed/lUojO1HvC8c"
          title="Fire Safety Basics Video"
          allowFullScreen
        ></iframe>
      </div>

      {/* Start Quiz Button */}
      {!showQuiz && !quizFinished && (
        <button
          onClick={() => setShowQuiz(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          🧩 Start Quiz
        </button>
      )}

      {/* Quiz Section */}
      {showQuiz && !quizFinished && (
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

      {/* Quiz Results (Only if user finished answering all questions) */}
      {quizFinished && (
        <div className="mt-6">
          <p className="text-gray-700">Your Score: {score}/{quizQuestions.length}</p>

          {score === quizQuestions.length ? (
            <p className="text-green-600 font-semibold">🎉 You passed the quiz!</p>
          ) : (
            <div className="mt-4">
              <p className="text-red-600 font-semibold">❌ You need to score 100% to pass.</p>
              <button
                onClick={() => {
                  setCurrentQuestion(0);
                  setScore(0);
                  setQuizFinished(false);
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

      {/* Back Button */}
      <button
        onClick={() => navigate("/dashboard")}
        className="mt-6 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
      >
        ⬅ Back to Dashboard
      </button>
    </div>
  );
}