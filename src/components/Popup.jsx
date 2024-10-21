const Popup = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Time's Up!</h2>
        <p className="mb-4">
          Your time for this questionnaire has ended. Would you like to try
          again?
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
          onClick={() => window.location.reload()}
        >
          Reload Page
        </button>
      </div>
    </div>
  );
};

export default Popup;
