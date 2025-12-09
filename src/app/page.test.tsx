import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home", () => {
  it("renders the main heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /ui components practice/i })
    ).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<Home />);
    expect(
      screen.getByText(/a collection of react ui components/i)
    ).toBeInTheDocument();
  });

  it("renders the Accordion link", () => {
    render(<Home />);
    const link = screen.getByRole("link", { name: /accordion/i });
    expect(link).toHaveAttribute("href", "/tasks/accordion");
  });

  it("renders the Progress Bar link", () => {
    render(<Home />);
    const link = screen.getByRole("link", { name: /progress bar/i });
    expect(link).toHaveAttribute("href", "/tasks/progressbar");
  });
});
