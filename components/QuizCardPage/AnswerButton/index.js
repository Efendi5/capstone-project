import { useEffect, useState } from "react";
import styled from "styled-components";
import { questions } from "../../../db/data";

export default function AnswerButtons({
  points1,
  setPoints1,
  selectedAnswer,
  setSelectedAnswer,
  isDisabled,
  setIsDisabled,
  setIsTimerPaused,
  timeLeft,
  index,
  currentQuestion,
}) {
  const [answerIndex, setAnswerIndex] = useState(null);

  const handleAnswerClick = (index, answer) => {
    setAnswerIndex(index);
    setIsDisabled(true);
    setIsTimerPaused(true);
    if (answer === currentQuestion.correctAnswer) {
      setPoints1(points1 + 1);
      setSelectedAnswer("correct");
    } else {
      setSelectedAnswer("incorrect");
    }
  };

  const handleTimer = (index) => {
    if (timeLeft === 0) {
      setAnswerIndex(index);
      setSelectedAnswer("correct");
    }
  };
  useEffect(() => {
    handleTimer(0);
  }, [timeLeft]);

  return (
    <StyledDiv>
      {currentQuestion.answers.map((answer, index) => {
        const isCorrectAnswer = answer === currentQuestion.correctAnswer;
        const answerStyle = answerIndex === index && selectedAnswer;
        if (selectedAnswer === "correct" && isCorrectAnswer) {
          return (
            <StyledButton
              type="button"
              key={answer}
              onClick={() => handleAnswerClick(index, answer)}
              className={`${answerStyle} correct`}
            >
              <strong>{answer}</strong>
            </StyledButton>
          );
        } else if (selectedAnswer === "incorrect" && isCorrectAnswer) {
          return (
            <StyledButton type="button" key={answer} className="correct">
              <strong>{answer}</strong>
            </StyledButton>
          );
        } else if (selectedAnswer === "incorrect" && answerIndex === index) {
          return (
            <StyledButton
              type="button"
              key={answer}
              onClick={() => handleAnswerClick(index, answer)}
              className={`${answerStyle} incorrect`}
            >
              <strong>{answer}</strong>
            </StyledButton>
          );
        } else {
          return (
            <StyledButton
              disabled={isDisabled}
              type="button"
              key={answer}
              onClick={() => handleAnswerClick(index, answer)}
              className={answerStyle}
            >
              <strong>{answer}</strong>
            </StyledButton>
          );
        }
      })}
    </StyledDiv>
  );
}

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  width: 170px;
  height: 80px;
  background-color: #60a5bf;
  border-radius: 20px;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  margin-block: 5px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);

  &.correct {
    background-color: green;
    color: white;
  }

  &.incorrect {
    background-color: red;
    color: white;
  }
`;

export const StyledDiv = styled.div`
  display: grid;
  max-width: 400px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 15px;
  margin-top: 25px;
  align-items: center;

  button:nth-child(1) {
    grid-row: 1 / span 1;
    grid-column: 1 / span 1;
  }

  button:nth-child(2) {
    grid-row: 1 / span 1;
    grid-column: 2 / span 1;
  }

  button:nth-child(3) {
    grid-row: 2 / span 1;
    grid-column: 1 / span 1;
  }

  button:nth-child(4) {
    grid-row: 2 / span 1;
    grid-column: 2 / span 1;
  }
`;
