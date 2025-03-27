// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const fireEquipmentData = [
//   {
//     name: "Fire Extinguishers",
//     videoUrl: "https://www.youtube.com/embed/BLjoWjCrDqg",
//     questions: [
//       {
//         question: "Which type of fire extinguisher is used for electrical fires?",
//         options: ["Water", "Foam", "CO₂", "Wet Chemical"],
//         answer: "CO₂",
//       },
//       {
//         question: "What is the first step in using a fire extinguisher?",
//         options: ["Aim at the fire", "Squeeze the handle", "Pull the pin", "Sweep the nozzle"],
//         answer: "Pull the pin",
//       },
//     ],
//   },
//   {
//     name: "Fire Blankets",
//     videoUrl: "https://www.youtube.com/embed/XYZ12345", // Replace with a real video URL
//     questions: [
//       {
//         question: "What is the primary use of a fire blanket?",
//         options: ["Put out small fires", "Wrap around a person", "Cover a burning pan", "All of the above"],
//         answer: "All of the above",
//       },
//       {
//         question: "What should you do before covering a fire with a fire blanket?",
//         options: ["Shake it", "Fold it", "Turn off the heat source", "Dampen it with water"],
//         answer: "Turn off the heat source",
//       },
//     ],
//   },
// ];

// interface FireSafetyTrainingProps {
//   username: string | null;
//   onComplete: (moduleName: string, passed: boolean) => void;
// }

// const FireSafetyTraining: React.FC<FireSafetyTrainingProps> = ({ username, onComplete }) => {
//   const navigate = useNavigate();
//   const [quizState, setQuizState] = useState(
//     fireEquipmentData.map(() => ({ currentQuestion: 0, score: 0, completed: false }))
//   );

//   const handleAnswer = (eqIndex: number, selectedOption: string) => {
//     const updatedQuizState = [...quizState];
//     const { currentQuestion, score } = updatedQuizState[eqIndex];

//     if (selectedOption === fireEquipmentData[eqIndex].questions[currentQuestion].answer) {
//       updatedQuizState[eqIndex].score = score + 1;
//     }

//     if (currentQuestion < fireEquipmentData[eqIndex].questions.length - 1) {
//       updatedQuizState[eqIndex].currentQuestion += 1;
//     } else {
//       updatedQuizState[eqIndex].completed = true;
//     }

//     setQuizState(updatedQuizState);

//     const allCompleted = updatedQuizState.every(
//       (quiz, index) => quiz.completed && quiz.score === fireEquipmentData[index].questions.length
//     );

//     // Only call onComplete if all quizzes are completed correctly
//     if (allCompleted) {
//       onComplete("Fire Safety Training", true);
//     }
//   };

//   return (
//     <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg">
//       <h1 className="text-2xl font-bold mb-4">🔥 Fire Safety Training</h1>
//       {username && <p className="text-gray-700 mb-4">Welcome, {username}! Complete all modules to earn your certificate.</p>}

//       {fireEquipmentData.map((equipment, eqIndex) => (
//         <div key={equipment.name} className="mb-8 p-4 border rounded-lg shadow-sm">
//           <h2 className="text-xl font-semibold">🎥 {equipment.name}</h2>
//           <iframe className="w-full h-64 rounded-lg mt-2" src={equipment.videoUrl} title={equipment.name} allowFullScreen></iframe>

//           {!quizState[eqIndex].completed && (
//             <button
//               onClick={() => {
//                 const updatedQuizState = [...quizState];
//                 updatedQuizState[eqIndex].currentQuestion = 0;
//                 setQuizState(updatedQuizState);
//               }}
//               className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//             >
//               🧩 Start Quiz
//             </button>
//           )}

//           {quizState[eqIndex].currentQuestion < equipment.questions.length && !quizState[eqIndex].completed && (
//             <div className="mt-6">
//               <h3 className="text-lg font-bold">{equipment.questions[quizState[eqIndex].currentQuestion].question}</h3>
//               <div className="mt-3 space-y-2">
//                 {equipment.questions[quizState[eqIndex].currentQuestion].options.map((option) => (
//                   <button
//                     key={option}
//                     onClick={() => handleAnswer(eqIndex, option)}
//                     className="block w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
//                   >
//                     {option}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {quizState[eqIndex].completed && (
//             <div className="mt-4">
//               <p className="text-gray-700">Your Score: {quizState[eqIndex].score}/{equipment.questions.length}</p>
//               {quizState[eqIndex].score === equipment.questions.length ? (
//                 <p className="text-green-600 font-semibold">✅ Passed!</p>
//               ) : (
//                 <button
//                   onClick={() => {
//                     const updatedQuizState = [...quizState];
//                     updatedQuizState[eqIndex] = { currentQuestion: 0, score: 0, completed: false };
//                     setQuizState(updatedQuizState);
//                   }}
//                   className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
//                 >
//                   🔄 Retake Quiz
//                 </button>
//               )}
//             </div>
//           )}
//         </div>
//       ))}

//       {/* Display the module completed section only when all quizzes are passed */}
//       {quizState.every((quiz, index) => quiz.completed && quiz.score === fireEquipmentData[index].questions.length) && (
//         <div className="mt-6 text-center">
//           <h2 className="text-xl font-bold">🎉 Training Completed!</h2>
//           <button
//             onClick={() => alert("Certificate Downloaded! 🎓")}
//             className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
//           >
//             📜 Download Certificate
//           </button>
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

// export default FireSafetyTraining;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const fireEquipmentData = [
//   {
//     name: "Fire Extinguishers",
//     videoUrl: "https://www.youtube.com/embed/BLjoWjCrDqg",
//     questions: [
//       {
//         question: "Which type of fire extinguisher is used for electrical fires?",
//         options: ["Water", "Foam", "CO₂", "Wet Chemical"],
//         answer: "CO₂",
//       },
//       {
//         question: "What is the first step in using a fire extinguisher?",
//         options: ["Aim at the fire", "Squeeze the handle", "Pull the pin", "Sweep the nozzle"],
//         answer: "Pull the pin",
//       },
//       {
//         question: "What does the 'PASS' method stand for?",
//         options: [
//           "Pull, Aim, Squeeze, Sweep",
//           "Push, Alert, Squeeze, Spray",
//           "Pull, Alert, Stand, Sweep",
//           "Push, Aim, Spray, Sweep",
//         ],
//         answer: "Pull, Aim, Squeeze, Sweep",
//       },
//       {
//         question: "Which type of fire extinguisher is used for oil fires?",
//         options: ["Water", "Foam", "CO₂", "Wet Chemical"],
//         answer: "Wet Chemical",
//       },
//       {
//         question: "How often should fire extinguishers be inspected?",
//         options: ["Monthly", "Every 6 months", "Annually", "Every 5 years"],
//         answer: "Monthly",
//       },
//     ],
//   },
// ];

// interface FireSafetyTrainingProps {
//   username: string | null;
//   onComplete: (moduleName: string, passed: boolean) => void;
// }

// const FireSafetyTraining: React.FC<FireSafetyTrainingProps> = ({ username, onComplete }) => {
//   const navigate = useNavigate();
//   const [quizState, setQuizState] = useState(
//     fireEquipmentData.map(() => ({ currentQuestion: 0, score: 0, completed: false }))
//   );

//   const handleAnswer = (eqIndex: number, selectedOption: string) => {
//     const updatedQuizState = [...quizState];
//     const { currentQuestion, score } = updatedQuizState[eqIndex];

//     if (selectedOption === fireEquipmentData[eqIndex].questions[currentQuestion].answer) {
//       updatedQuizState[eqIndex].score = score + 1;
//     }

//     if (currentQuestion < fireEquipmentData[eqIndex].questions.length - 1) {
//       updatedQuizState[eqIndex].currentQuestion += 1;
//     } else {
//       updatedQuizState[eqIndex].completed = true;
//     }

//     setQuizState(updatedQuizState);

//     const allCompleted = updatedQuizState.every(
//       (quiz, index) => quiz.completed && quiz.score === fireEquipmentData[index].questions.length
//     );

//     if (allCompleted) {
//       onComplete("Fire Safety Training", true);
//     }
//   };

//   return (
//     <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg">
//       <h1 className="text-2xl font-bold mb-4">🔥 Fire Safety Training</h1>
//       {username && <p className="text-gray-700 mb-4">Welcome, {username}! Complete the module to earn your certificate.</p>}

//       {fireEquipmentData.map((equipment, eqIndex) => (
//         <div key={equipment.name} className="mb-8 p-4 border rounded-lg shadow-sm">
//           <h2 className="text-xl font-semibold">🎥 {equipment.name}</h2>
//           <iframe className="w-full h-64 rounded-lg mt-2" src={equipment.videoUrl} title={equipment.name} allowFullScreen></iframe>

//           {!quizState[eqIndex].completed && (
//             <button
//               onClick={() => {
//                 const updatedQuizState = [...quizState];
//                 updatedQuizState[eqIndex].currentQuestion = 0;
//                 setQuizState(updatedQuizState);
//               }}
//               className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//             >
//               🧩 Start Quiz
//             </button>
//           )}

//           {quizState[eqIndex].currentQuestion < equipment.questions.length && !quizState[eqIndex].completed && (
//             <div className="mt-6">
//               <h3 className="text-lg font-bold">{equipment.questions[quizState[eqIndex].currentQuestion].question}</h3>
//               <div className="mt-3 space-y-2">
//                 {equipment.questions[quizState[eqIndex].currentQuestion].options.map((option) => (
//                   <button
//                     key={option}
//                     onClick={() => handleAnswer(eqIndex, option)}
//                     className="block w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
//                   >
//                     {option}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {quizState[eqIndex].completed && (
//             <div className="mt-4">
//               <p className="text-gray-700">Your Score: {quizState[eqIndex].score}/{equipment.questions.length}</p>
//               {quizState[eqIndex].score === equipment.questions.length ? (
//                 <p className="text-green-600 font-semibold">✅ Passed!</p>
//               ) : (
//                 <button
//                   onClick={() => {
//                     const updatedQuizState = [...quizState];
//                     updatedQuizState[eqIndex] = { currentQuestion: 0, score: 0, completed: false };
//                     setQuizState(updatedQuizState);
//                   }}
//                   className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
//                 >
//                   🔄 Retake Quiz
//                 </button>
//               )}
//             </div>
//           )}
//         </div>
//       ))}

//       {quizState.every((quiz, index) => quiz.completed && quiz.score === fireEquipmentData[index].questions.length) && (
//         <div className="mt-6 text-center">
//           <h2 className="text-xl font-bold">🎉 Training Completed!</h2>
//           <button
//             onClick={() => alert("Certificate Downloaded! 🎓")}
//             className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
//           >
//             📜 Download Certificate
//           </button>
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

// export default FireSafetyTraining;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube"; // Ensure you have react-youtube installed

const fireEquipmentData = [
  {
    name: "Fire Extinguishers",
    videoId: "BLjoWjCrDqg", // Extracted from "https://www.youtube.com/embed/BLjoWjCrDqg"
    questions: [
      {
        question: "Which type of fire extinguisher is used for electrical fires?",
        options: ["Water", "Foam", "CO₂", "Wet Chemical"],
        answer: "CO₂",
      },
      {
        question: "What is the first step in using a fire extinguisher?",
        options: ["Aim at the fire", "Squeeze the handle", "Pull the pin", "Sweep the nozzle"],
        answer: "Pull the pin",
      },
      {
        question: "What does the 'PASS' method stand for?",
        options: [
          "Pull, Aim, Squeeze, Sweep",
          "Push, Alert, Squeeze, Spray",
          "Pull, Alert, Stand, Sweep",
          "Push, Aim, Spray, Sweep",
        ],
        answer: "Pull, Aim, Squeeze, Sweep",
      },
      {
        question: "Which type of fire extinguisher is used for oil fires?",
        options: ["Water", "Foam", "CO₂", "Wet Chemical"],
        answer: "Wet Chemical",
      },
      {
        question: "How often should fire extinguishers be inspected?",
        options: ["Monthly", "Every 6 months", "Annually", "Every 5 years"],
        answer: "Monthly",
      },
    ],
  },
];

interface FireSafetyTrainingProps {
  username: string | null;
  onComplete: (moduleName: string, passed: boolean) => void;
}

const FireSafetyTraining: React.FC<FireSafetyTrainingProps> = ({ username, onComplete }) => {
  const navigate = useNavigate();
  const [quizState, setQuizState] = useState(
    fireEquipmentData.map(() => ({ currentQuestion: 0, score: 0, completed: false }))
  );

  const handleAnswer = (eqIndex: number, selectedOption: string) => {
    const updatedQuizState = [...quizState];
    const { currentQuestion, score } = updatedQuizState[eqIndex];

    if (selectedOption === fireEquipmentData[eqIndex].questions[currentQuestion].answer) {
      updatedQuizState[eqIndex].score = score + 1;
    }

    if (currentQuestion < fireEquipmentData[eqIndex].questions.length - 1) {
      updatedQuizState[eqIndex].currentQuestion += 1;
    } else {
      updatedQuizState[eqIndex].completed = true;
    }

    setQuizState(updatedQuizState);

    const allCompleted = updatedQuizState.every(
      (quiz, index) => quiz.completed && quiz.score === fireEquipmentData[index].questions.length
    );

    if (allCompleted) {
      onComplete("Fire Safety Training", true);
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
      <h1 className="text-2xl font-bold mb-4">🔥 Fire Safety Training</h1>
      {username && <p className="text-gray-700 mb-4">Welcome, {username}! Complete the module to earn your certificate.</p>}

      {fireEquipmentData.map((equipment, eqIndex) => (
        <div key={equipment.name} className="mb-8 p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold">🎥 {equipment.name}</h2>
          
          {/* Updated YouTube Video Implementation */}
          <div className="rounded-lg overflow-hidden mt-2">
            <YouTube videoId={equipment.videoId} opts={videoOptions} />
          </div>

          {!quizState[eqIndex].completed && (
            <button
              onClick={() => {
                const updatedQuizState = [...quizState];
                updatedQuizState[eqIndex].currentQuestion = 0;
                setQuizState(updatedQuizState);
              }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              🧩 Start Quiz
            </button>
          )}

          {quizState[eqIndex].currentQuestion < equipment.questions.length && !quizState[eqIndex].completed && (
            <div className="mt-6">
              <h3 className="text-lg font-bold">{equipment.questions[quizState[eqIndex].currentQuestion].question}</h3>
              <div className="mt-3 space-y-2">
                {equipment.questions[quizState[eqIndex].currentQuestion].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(eqIndex, option)}
                    className="block w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {quizState[eqIndex].completed && (
            <div className="mt-4">
              <p className="text-gray-700">Your Score: {quizState[eqIndex].score}/{equipment.questions.length}</p>
              {quizState[eqIndex].score === equipment.questions.length ? (
                <p className="text-green-600 font-semibold">✅ Passed!</p>
              ) : (
                <button
                  onClick={() => {
                    const updatedQuizState = [...quizState];
                    updatedQuizState[eqIndex] = { currentQuestion: 0, score: 0, completed: false };
                    setQuizState(updatedQuizState);
                  }}
                  className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  🔄 Retake Quiz
                </button>
              )}
            </div>
          )}
        </div>
      ))}

      {quizState.every((quiz, index) => quiz.completed && quiz.score === fireEquipmentData[index].questions.length) && (
        <div className="mt-6 text-center">
          <h2 className="text-xl font-bold">🎉 Training Completed!</h2>
          <button
            onClick={() => alert("Certificate Downloaded! 🎓")}
            className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            📜 Download Certificate
          </button>
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

export default FireSafetyTraining;
