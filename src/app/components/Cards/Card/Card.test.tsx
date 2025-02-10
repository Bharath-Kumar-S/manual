import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card Component", () => {
  const defaultProps = {
    number: "01",
    imageSrc: "/path/to/image.jpg",
    altText: "Sample Image",
    title: "Card Title",
    subtitle: ["Subtitle Line 1", "Subtitle Line 2"],
    description: ["Description Line 1", "Description Line 2"],
  };

  it("renders the card number", () => {
    render(<Card {...defaultProps} />);
    expect(screen.getByText("01")).toBeInTheDocument();
  });

  it("renders the image with correct src and alt text", () => {
    render(<Card {...defaultProps} />);
    const image = screen.getByAltText("Sample Image");
    expect(image).toBeInTheDocument();
  });

  it("renders the title", () => {
    render(<Card {...defaultProps} />);
    expect(screen.getByText("Card Title")).toBeInTheDocument();
  });

  it("renders the subtitle lines", () => {
    render(<Card {...defaultProps} />);
    expect(screen.getByText("Subtitle Line 1")).toBeInTheDocument();
    expect(screen.getByText("Subtitle Line 2")).toBeInTheDocument();
  });

  it("renders the description lines", () => {
    render(<Card {...defaultProps} />);
    expect(screen.getByText("Description Line 1")).toBeInTheDocument();
    expect(screen.getByText("Description Line 2")).toBeInTheDocument();
  });

  it("applies reverse order class when imageOrder is 'right'", () => {
    render(<Card {...defaultProps} imageOrder="right" />);
    const container = screen.getByRole("region");
    expect(container).toHaveClass("md:flex-row-reverse");
  });

  it("applies default order class when imageOrder is 'left'", () => {
    render(<Card {...defaultProps} imageOrder="left" />);
    const container = screen.getByRole("region");
    expect(container).toHaveClass("md:flex-row");
  });
});
