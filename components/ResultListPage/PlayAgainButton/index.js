import styled from "styled-components";
import { useRouter } from "next/router";

export default function PlayAgainButton({ setPoints, points }) {
  const { push } = useRouter();

  const handlePlayAgainClick = () => {
    setPoints([points[0], 0, 0]);
    push("/");
  };

  return (
    <StyledButtonPlayAgain onClick={handlePlayAgainClick} type="button">
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
