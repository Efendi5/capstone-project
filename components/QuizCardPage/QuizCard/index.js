import styled from "styled-components";
import { useState } from "react";

export const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    answers: ["Paris", "Berlin", "Madrid", "London"],
    correctAnswer: "Paris",
  },
];

export default function QuizCard() {
  const [questionsState, setQuestionsState] = useState(questions);
  return <StyledCard>{questionsState[0].question}</StyledCard>;
}

export const StyledCard = styled.div`
  display: flex;
  margin: 30px auto;
  width: 90%;
  max-width: 400px;
  font-size: 18px;
  padding: 65px;
  background-color: #cfdfe6;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  position: relative;

  p {
    align-self: center;
  }
`;
