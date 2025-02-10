import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";
describe("Footer", () => {
  it("renders the company logo", () => {
    render(<Footer />);
    const logo = screen.getByAltText("Company logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders all footer link sections", () => {
    render(<Footer />);
    const sections = ["Product", "Company", "Info"];
    sections.forEach((section) => {
      const sectionTitle = screen.getByText(section);
      expect(sectionTitle).toBeInTheDocument();
    });
  });

  it("renders all social icons", () => {
    render(<Footer />);
    const socialIcons = ["Facebook", "Google", "Twitter"];
    socialIcons.forEach((icon) => {
      const socialIcon = screen.getByAltText(icon);
      expect(socialIcon).toBeInTheDocument();
    });
  });

  it("renders the copyright text", () => {
    render(<Footer />);
    const copyrightText = screen.getByText(
      "© 2021 Manual. All rights reserved"
    );
    expect(copyrightText).toBeInTheDocument();
  });
});
