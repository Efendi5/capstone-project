import styled from "styled-components";

export default function NextButton({
  isDisabled,
  questionIndex,
  setIsDisabled,
  setIsTimerPaused,
  setTimeLeft,
  setQuestionIndex,
  setSelectedAnswer,
}) {
  const handleNextClick = () => {
    setQuestionIndex(questionIndex + 1);
    setSelectedAnswer("");
    setIsDisabled(false);
    setIsTimerPaused(false);
    setTimeLeft(15);
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
  margin-bottom: 20px;
`;
