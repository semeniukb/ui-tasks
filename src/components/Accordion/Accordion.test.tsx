import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Accordion from "./Accordion";

describe("Accordion", () => {
  it("renders the toggle button", () => {
    render(<Accordion />);
    expect(screen.getByRole("button", { name: /toggle/i })).toBeInTheDocument();
  });

  it("does not show content initially", () => {
    render(<Accordion />);
    expect(screen.queryByText(/accordion content/i)).not.toBeInTheDocument();
  });

  it("shows content when toggle is clicked", async () => {
    const user = userEvent.setup();
    render(<Accordion />);

    await user.click(screen.getByRole("button", { name: /toggle/i }));

    expect(screen.getByText(/accordion content/i)).toBeInTheDocument();
  });

  it("hides content when toggle is clicked twice", async () => {
    const user = userEvent.setup();
    render(<Accordion />);

    const button = screen.getByRole("button", { name: /toggle/i });
    await user.click(button);
    await user.click(button);

    expect(screen.queryByText(/accordion content/i)).not.toBeInTheDocument();
  });
});
