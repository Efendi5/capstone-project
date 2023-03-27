import { render, screen } from "@testing-library/react";
import QuizCard from "../../../pages/QuizCard";

describe("StyledForm component", () => {
  it("should render the correct elements and props", () => {
    //const points2 = 0;
    const timeLeft = 30;
    const question = "What is the capital of France?";

    render(<QuizCard />);

    const user1Element = screen.getByText("😄");
    const user2Element = screen.getByText("😎");
    //const points2Element = screen.getByText(`${points2} Points`);
    const headerElement = screen.getByText(/Battle Quiz/i);
    const questionElement = screen.getByText(question);
    const timeLeftElement = screen.getByText(`${timeLeft}s`);

    expect(user1Element).toBeInTheDocument();
    expect(user2Element).toBeInTheDocument();
    //expect(points2Element).toBeInTheDocument();
    expect(headerElement).toBeInTheDocument();
    expect(questionElement).toBeInTheDocument();
    expect(timeLeftElement).toBeInTheDocument();
  });
});
