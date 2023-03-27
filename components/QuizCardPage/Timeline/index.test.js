import { render, screen } from "@testing-library/react";
import QuizCard from "../../../pages/QuizCard";

describe("StyledTimer Component", () => {
  test("Timer should display 30 sec left", () => {
    const timeLeft = 30;

    render(<QuizCard />);

    const timeLeftElement = screen.getByText(`${timeLeft}s`);
    expect(timeLeftElement).toBeInTheDocument();
  });
});
