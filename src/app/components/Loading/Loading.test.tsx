import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Loading } from "./Loading";

describe("Loading Component", () => {
  it("renders the loading spinner", () => {
    render(<Loading />);
    const spinner = screen.getByRole("status");
    expect(spinner).toBeInTheDocument();
  });

  it("renders the loading text", () => {
    render(<Loading />);
    const text = screen.getByText("Loading...");
    expect(text).toBeInTheDocument();
  });
});
