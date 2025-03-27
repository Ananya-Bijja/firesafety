// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import YouTube from "react-youtube"; // Ensure you installed react-youtube

// interface GuestSafetyManagementProps {
//   username: string | null;
//   onComplete: (moduleName: string, passed: boolean) => void;
// }

// // Quiz questions for Guest Safety Management
// const quizQuestions = [
//   {
//     question: "What is your top priority in an emergency?",
//     options: ["Protecting property", "Ensuring guest safety", "Calling the media", "Locking all doors"],
//     answer: "Ensuring guest safety",
//   },
//   {
//     question: "How should you guide guests during evacuation?",
//     options: ["Let them decide", "Provide clear instructions", "Panic and shout", "Ignore them"],
//     answer: "Provide clear instructions",
//   },
// ];

// const GuestSafetyManagement: React.FC<GuestSafetyManagementProps> = ({ username, onComplete }) => {
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
//       // Only mark the training as completed if the score is equal to the number of questions
//       onComplete("Guest Safety Management", score + 1 === quizQuestions.length);
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
//       <h1 className="text-2xl font-bold mb-4">🧑‍🤝‍🧑 Guest Safety Management</h1>
//       {username && <p className="text-gray-700 mb-4">Welcome, {username}! Learn how to ensure guest safety during emergencies.</p>}

//       <div className="mb-6">
//         <h2 className="text-xl font-semibold">🎥 Watch the Guest Safety Video</h2>
//         <div className="rounded-lg overflow-hidden mt-2">
//           <YouTube videoId="pDU_Rdx40xk" opts={videoOptions} />
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
//           {score === quizQuestions.length ? (
//             <>
//               <h2 className="text-xl font-bold">✅ Module Completed!</h2>
//               <p className="text-gray-700">Your Score: {score}/{quizQuestions.length}</p>
//               <div className="mt-4">
//                 <p className="text-green-600 font-semibold">🎉 You passed the quiz!</p>
//               </div>
//             </>
//           ) : (
//             <>
//               <h2 className="text-xl font-bold">❌ Module Incomplete</h2>
//               <p className="text-gray-700">Your Score: {score}/{quizQuestions.length}</p>
//               <div className="mt-4">
//                 <p className="text-red-600 font-semibold">❌ You need to score 100% to complete the module.</p>
//                 <button
//                   onClick={() => {
//                     setCurrentQuestion(0);
//                     setScore(0);
//                     setCompleted(false);
//                     setShowQuiz(false);
//                   }}
//                   className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
//                 >
//                   🔄 Retake Quiz
//                 </button>
//               </div>
//             </>
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

// export default GuestSafetyManagement;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube"; // Ensure you installed react-youtube

interface GuestSafetyManagementProps {
  username: string | null;
  onComplete: (moduleName: string, passed: boolean) => void;
}

// Updated quiz questions for Guest Safety Management (5 questions)
const quizQuestions = [
  {
    question: "What is your top priority in an emergency?",
    options: ["Protecting property", "Ensuring guest safety", "Calling the media", "Locking all doors"],
    answer: "Ensuring guest safety",
  },
  {
    question: "How should you guide guests during evacuation?",
    options: ["Let them decide", "Provide clear instructions", "Panic and shout", "Ignore them"],
    answer: "Provide clear instructions",
  },
  {
    question: "What should you do if a guest is in distress during an emergency?",
    options: ["Ignore them", "Assist and reassure them", "Run away", "Wait for someone else to help"],
    answer: "Assist and reassure them",
  },
  {
    question: "What is the safest way to communicate safety procedures to guests?",
    options: ["Using clear and simple language", "Speaking in a rushed manner", "Providing complicated instructions", "Ignoring questions"],
    answer: "Using clear and simple language",
  },
  {
    question: "Why is it important to stay calm during an emergency?",
    options: [
      "It helps guests remain calm and follow instructions",
      "It makes you look professional",
      "It prevents legal issues",
      "It makes the situation seem less serious",
    ],
    answer: "It helps guests remain calm and follow instructions",
  },
];

const GuestSafetyManagement: React.FC<GuestSafetyManagementProps> = ({ username, onComplete }) => {
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
      // Only mark the training as completed if the score is equal to the number of questions
      onComplete("Guest Safety Management", score + 1 === quizQuestions.length);
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
      <h1 className="text-2xl font-bold mb-4">🧑‍🤝‍🧑 Guest Safety Management</h1>
      {username && <p className="text-gray-700 mb-4">Welcome, {username}! Learn how to ensure guest safety during emergencies.</p>}

      <div className="mb-6">
        <h2 className="text-xl font-semibold">🎥 Watch the Guest Safety Video</h2>
        <div className="rounded-lg overflow-hidden mt-2">
          <YouTube videoId="pDU_Rdx40xk" opts={videoOptions} />
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
          {score === quizQuestions.length ? (
            <>
              <h2 className="text-xl font-bold">✅ Module Completed!</h2>
              <p className="text-gray-700">Your Score: {score}/{quizQuestions.length}</p>
              <div className="mt-4">
                <p className="text-green-600 font-semibold">🎉 You passed the quiz!</p>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-xl font-bold">❌ Module Incomplete</h2>
              <p className="text-gray-700">Your Score: {score}/{quizQuestions.length}</p>
              <div className="mt-4">
                <p className="text-red-600 font-semibold">❌ You need to score 100% to complete the module.</p>
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
            </>
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

export default GuestSafetyManagement;