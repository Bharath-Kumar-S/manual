import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Rejected from "./Rejected";
import { quizRejected } from "@/src/constants/quiz/rejected";

describe("Rejected component", () => {
  it("renders a heading", () => {
    render(<Rejected />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});

it("renders the subtitle", () => {
  render(<Rejected />);

  const subTitle = screen.getByRole("heading", { level: 2 });

  expect(subTitle).toBeInTheDocument();
});

it("renders the description", () => {
  render(<Rejected />);

  const description = screen.getByText(quizRejected.description);

  expect(description).toBeInTheDocument();
});
