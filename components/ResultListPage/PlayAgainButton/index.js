import styled from "styled-components";
import { useRouter } from "next/router";

export default function PlayAgainButton() {
  const { push } = useRouter();
  const handleNextClick = () => {
    push("http://localhost:3000/");
  };

  return (
    <StyledButtonPlayAgain onClick={handleNextClick} type="button">
      Spielen
    </StyledButtonPlayAgain>
  );
}

export const StyledButtonPlayAgain = styled.button`
  display: block;
  justify-content: center;
  width: 60%;
  text-align: center;
  max-width: 200px;
  padding: 10px;
  background-color: green;
  border-radius: 20px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 20px;
`;
