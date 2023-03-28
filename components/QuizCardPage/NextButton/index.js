import styled from "styled-components";
import { useState } from "react";

export default function NextButton() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNextClick = () => {
    setCurrentQuestion(currentQuestion + 1);
  };
  return <StyledButtonNext onClick={handleNextClick}>Weiter</StyledButtonNext>;
}

export const StyledButtonNext = styled.button`
  display: flex;
  justify-content: center;
  width: 40%;
  text-align: center;
  max-width: 200px;
  padding: 15px;
  background-color: green;
  border-radius: 20px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 2px;
`;
