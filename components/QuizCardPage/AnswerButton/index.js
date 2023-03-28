import styled from "styled-components";
import { questions } from "../QuizCard";

export default function AnswerButtons({
  points1,
  points2,
  setPoints1,
  setPoints2,
}) {
  const handleAnswerClick = (event, answer) => {
    event.preventDefault();
    if (answer === questions[0].correctAnswer) {
      setPoints1(points1 + 1);
    } else {
      setPoints2(points2 + 1);
    }
  };

  return (
    <StyledDiv>
      {questions[0].answers.map((answer, id) => (
        <StyledButton
          key={id}
          onClick={(event) => handleAnswerClick(event, answer)}
        >
          {answer}
        </StyledButton>
      ))}
    </StyledDiv>
  );
}

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 30px;
  width: 170px;
  background-color: #60a5bf;
  border-radius: 20px;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 5px;
  margin-top: 5px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
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
