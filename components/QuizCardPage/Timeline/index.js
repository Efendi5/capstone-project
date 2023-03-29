import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";

export default function Timeline() {
  const [timeLeft, setTimeLeft] = useState(30);
  const [timerRunning, setTimerRunning] = useState(true);

  useEffect(() => {
    if (timeLeft > 0) {
      const intervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    } else {
      setTimerRunning(false);
    }
  }, [timeLeft]);
  return (
    <>
      <StyledTimer isRunningOut={timeLeft > 0 && timeLeft <= 10}>
        {timeLeft}s
      </StyledTimer>
    </>
  );
}

export const StyledTimer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 400px;
  position: relative;
  padding: 5px;
  color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);

  background-color: ${(props) => (props.isRunningOut ? "red" : "green")};
`;
