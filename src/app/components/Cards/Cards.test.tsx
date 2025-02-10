import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Cards } from "./Cards";
describe("Cards component", () => {
  test("renders the heading", () => {
    render(<Cards />);
    const heading = screen.getByRole("heading", {
      name: /What we can help with/i,
    });
    expect(heading).toBeInTheDocument();
  });

  test("renders images with correct alt text", () => {
    render(<Cards />);
    const hairLossImage = screen.getByAltText(
      /Hair loss, a common condition affecting many people, with potential treatments/i
    );
    const erecImage = screen.getByAltText(
      /Erectile dysfunction, a condition that affects many people, with various treatment options available/i
    );
    expect(hairLossImage).toBeInTheDocument();
    expect(erecImage).toBeInTheDocument();
  });
});
