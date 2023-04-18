import { render, screen } from "@testing-library/react";
import { StyledCard } from ".";

test("should render the correct text", () => {
  const question = "What is the capital of France?";
  render(<StyledCard>{question}</StyledCard>);
  const questionElement = screen.getByText(question);
  expect(questionElement).toBeInTheDocument();
});
