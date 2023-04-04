import styled from "styled-components";
import { useRouter } from "next/router";

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
}) {
  const { push } = useRouter();

  const handleNextClick = () => {
    setIndex(index + 1);
    setSelectedAnswer("");
    setIsDisabled(false);
    setIsTimerPaused(false);
    setTimeLeft(15);
    setClickCounter(clickCounter + 1);
    if (clickCounter === 2) {
      setClickCounter(0);
      push({
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
`;
