import styled from "styled-components";
import { useRouter } from "next/router";

export default function PlayAgainButton({ currentRound, setCurrentRound }) {
  const router = useRouter();

  const onHandleCurrentRound = () => {
    if (currentRound < 3) {
      setCurrentRound((prevCurrentRound) => prevCurrentRound + 1);
      router.push("/quiz");
    }
  };

  if (currentRound < 3) {
    return (
      <StyledButtonPlayAgain onClick={onHandleCurrentRound} type="button">
        Spielen
      </StyledButtonPlayAgain>
    );
  } else {
    return null;
  }
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
  margin-top: 10px;
  margin-bottom: 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: darkgreen;
  }
`;
