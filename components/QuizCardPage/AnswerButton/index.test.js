import { StyledButton } from ".";
import { render, fireEvent, screen } from "@testing-library/react";

describe("StyledButton component", () => {
  it("should call onClick handler when clicked with the correct answer", () => {
    const onClick = jest.fn();
    const correctAnswer = "Correct Answer";

    render(<StyledButton onClick={onClick}>{correctAnswer}</StyledButton>);

    const correctAnswerButton = screen.getByText(correctAnswer);

    fireEvent.click(correctAnswerButton);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
