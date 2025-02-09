"use client";
import { useState, useEffect } from "react";
import Success from "@components/Results/Success";
import Rejected from "@components/Results/Rejected";
import { QuizData } from "@/src/types/quiz.types";

interface QuizProps {
  quizData: QuizData;
}

export const Quiz = ({ quizData }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [isRejected, setIsRejected] = useState(false);
  const [answers, setAnswers] = useState<{ [key: number]: string | boolean }>(
    {}
  );

  useEffect(() => {
    // Force a re-render when currentQuestion changes
  }, [currentQuestion]);

  const handleAnswer = (value: string | boolean) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: value }));

    if (
      quizData.questions[currentQuestion].options.find(
        (option) => option.value === value
      )?.isRejection
    ) {
      setIsRejected(true);
      setShowResults(true);
    } else if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    setCurrentQuestion((prev) => prev - 1);
  };

  if (showResults) {
    return isRejected ? <Rejected /> : <Success />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white text-black">
      <h1 className="text-xl font-bold mb-6">
        {quizData.questions[currentQuestion].question}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {quizData.questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className={`border p-4 rounded-md transition-colors duration-300 ease-in-out ${
              answers[currentQuestion] === option.value
                ? "bg-green-300 text-white"
                : "bg-white text-black hover:bg-gray-200"
            }`}
            onClick={() => handleAnswer(option.value)}
            dangerouslySetInnerHTML={{ __html: option.display }}
          ></button>
        ))}
      </div>
      {currentQuestion > 0 && (
        <button
          className="mt-4 px-4 py-2 bg-gray-600 text-white rounded"
          onClick={handleBack}
        >
          Back
        </button>
      )}
    </div>
  );
};
