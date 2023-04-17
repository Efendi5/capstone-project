import { render, screen } from "@testing-library/react";
import AnswerButtons from ".";

test("renders AnswerButtons component without crashing", async () => {
  render(
    <AnswerButtons
      points1={0}
      setPoints1={() => {}}
      selectedAnswer=""
      setSelectedAnswer={() => {}}
      isDisabled={false}
      setIsDisabled={() => {}}
      setIsTimerPaused={() => {}}
      timeLeft={30}
      index={0}
      currentQuestion={{
        question: "What is the capital of France?",
        answers: ["Paris", "Madrid", "Berlin", "London"],
        correctAnswer: "Paris",
      }}
    />
  );
  const answerButtons = screen.getAllByRole("button", { type: "button" });
  expect(answerButtons).toHaveLength(4);
});
