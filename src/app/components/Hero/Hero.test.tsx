import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";
describe("Header component", () => {
  it("renders the background image", () => {
    render(<Hero />);
    const bgImage = screen.getByAltText(
      "Background image representing wellness theme"
    );
    expect(bgImage).toBeInTheDocument();
  });

  it("renders the wellness symbol icon", () => {
    render(<Hero />);
    const iconImage = screen.getByLabelText("Wellness symbol icon");
    expect(iconImage).toBeInTheDocument();
  });

  it("renders the main heading", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", {
      name: /be good to yourself/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders the description text", () => {
    render(<Hero />);
    const description = screen.getByText(/we’re working around the clock/i);
    expect(description).toBeInTheDocument();
  });

  it("has a link to the quiz page", () => {
    render(<Hero />);
    const link = screen.getByRole("link", { name: /Take the quiz/i });
    expect(link).toHaveAttribute("href", "/quiz");
  });
});
