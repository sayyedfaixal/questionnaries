const Dialog = ({ isCorrect, correctAnswer }) => {
  return (
    <div
      className={`mt-4 p-2 rounded ${
        isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
      }`}
    >
      {isCorrect
        ? "Correct Answer! Great job!"
        : `Incorrect. The correct answer was ${correctAnswer}.`}
    </div>
  );
};

export default Dialog;
