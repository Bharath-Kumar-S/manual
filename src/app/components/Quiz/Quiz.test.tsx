import "@testing-library/jest-dom";
import { Quiz } from "./Quiz";
import { render, screen, fireEvent } from "@testing-library/react";
import { QuizData } from "@/src/types/quiz.types";
const mockQuizData: QuizData = {
  questions: [
    {
      question: "What is 2 + 2?",
      type: "ChoiceType",
      options: [
        { value: "3", display: "3", isRejection: false },
        { value: "4", display: "4", isRejection: false },
        { value: "5", display: "5", isRejection: true },
      ],
    },
    {
      question: "What is the capital of France?",
      type: "ChoiceType",
      options: [
        { value: "Berlin", display: "Berlin", isRejection: true },
        { value: "Madrid", display: "Madrid", isRejection: true },
        { value: "Paris", display: "Paris", isRejection: false },
      ],
    },
  ],
};

describe("Quiz Component", () => {
  it("renders the first question", () => {
    render(<Quiz quizData={mockQuizData} />);
    expect(screen.getByText("What is 2 + 2?")).toBeInTheDocument();
  });

  it("advances to the next question on correct answer", () => {
    render(<Quiz quizData={mockQuizData} />);
    fireEvent.click(screen.getByText("4"));
    expect(
      screen.getByText("What is the capital of France?")
    ).toBeInTheDocument();
  });

  it("goes back to the previous question", () => {
    render(<Quiz quizData={mockQuizData} />);
    fireEvent.click(screen.getByText("4"));
    fireEvent.click(screen.getByText("Back"));
    expect(screen.getByText("What is 2 + 2?")).toBeInTheDocument();
  });
});
