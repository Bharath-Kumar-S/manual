import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Success from "./Success";

describe("Rejected component", () => {
  it("renders a heading", () => {
    render(<Success />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });

  it("renders the subtitle", () => {
    render(<Success />);

    const subTitle = screen.getByRole("heading", { level: 2 });

    expect(subTitle).toBeInTheDocument();
  });
});
