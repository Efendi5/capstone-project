import styled from "styled-components";
import { useRouter } from "next/router";
import { questions } from "../../../db/data";

export default function NextButton({
  isDisabled,
  index,
  setIsDisabled,
  setIsTimerPaused,
  setTimeLeft,
  setIndex,
  setSelectedAnswer,
  setClickCounter,
  clickCounter,
  points1,
  currentQuestion,
}) {
  const router = useRouter();
  const { query } = router;

  const handleNextClick = () => {
    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setIndex(Math.floor(Math.random() * (questions.length - 1)));
    }
    setSelectedAnswer("");
    setIsDisabled(false);
    setIsTimerPaused(false);
    setTimeLeft(15);
    setClickCounter(clickCounter + 1);

    if (currentQuestion && clickCounter === 2) {
      setClickCounter(0);
      router.push({
        pathname: "/resultList",
        query: { points1 },
      });
    }
  };
  return (
    <StyledButtonNext
      block={isDisabled && "block"}
      onClick={handleNextClick}
      type="button"
    >
      weiter
    </StyledButtonNext>
  );
}

export const StyledButtonNext = styled.button`
  display: ${(props) => props.block || "none"};
  justify-content: center;
  width: 35%;
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
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: darkgreen;
  }
`;
