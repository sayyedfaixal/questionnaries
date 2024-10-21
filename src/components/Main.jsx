import React, { useState, useEffect } from "react";
import { questionData } from "../questions.js";
import Popup from "./Popup.jsx";
import Dialog from "./Dialog.jsx";

export default function Main() {
  const [timeLeft, setTimeLeft] = useState(60);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);

      return () => clearTimeout(timerId);
    } else {
      setShowDialog(true);
    }
  }, [timeLeft]);

  const handleOptionClick = (option) => {
    if (!isSubmitted) {
      setSelectedOption(option);
    }
  };

  const handleSubmit = () => {
    if (selectedOption) {
      setIsSubmitted(true);
      setIsCorrect(selectedOption === questionData.correctAnswer);
    }
  };

  const checkSelectedOptions = (option) => {
    if (!isSubmitted)
      return selectedOption === option ? "bg-blue-200" : "bg-white";
    if (option === questionData.correctAnswer) return "bg-green-200";
    if (
      option === selectedOption &&
      selectedOption !== questionData.correctAnswer
    )
      return "bg-red-200";
    return "bg-white";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-2xl font-bold mb-4 text-center">
          Time Left: {timeLeft} seconds
        </div>
        <h2 className="text-xl font-semibold mb-4">{questionData.question}</h2>
        <div className="space-y-2">
          {questionData.options.map((option, index) => (
            <button
              key={index}
              className={`w-full p-2 rounded ${checkSelectedOptions(
                option
              )} hover:bg-gray-100 transition-colors`}
              onClick={() => handleOptionClick(option)}
              disabled={isSubmitted}
            >
              {option}
            </button>
          ))}
        </div>
        {isSubmitted && (
          <Dialog
            isCorrect={isCorrect}
            correctAnswer={questionData.correctAnswer}
          />
        )}
        <button
          className={`w-full mt-4 p-2 rounded ${
            !selectedOption || isSubmitted
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600 text-white"
          }`}
          onClick={handleSubmit}
          disabled={!selectedOption || isSubmitted}
        >
          {isSubmitted ? "Next" : "Submit"}
        </button>
      </div>
      {showDialog && <Popup />}
    </div>
  );
}
