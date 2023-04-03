import { render, screen } from "@testing-library/react";
import QuizForm from ".";

describe("QuizForm", () => {
  it("renders all necessary components", () => {
    render(<QuizForm />);
    const headerElement = screen.getByRole("heading");

    expect(headerElement).toBeInTheDocument();
  });
});
