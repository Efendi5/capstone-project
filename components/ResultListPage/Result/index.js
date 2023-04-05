import styled from "styled-components";
import UserPoints from "../../QuizCardPage/UserPoints";
import { useState } from "react";

export default function Result({ points, currentRound }) {
  const [currentPoints, setCurrentPoints] = useState(points);

  function handleNewPoints(newPoints) {
    setCurrentPoints(currentPoints + newPoints);
  }
  return (
    <StyledDiv>
      <Row>
        <UserPoints points={currentPoints} />
        <RoundNumber>{currentRound}</RoundNumber>
        <UserPoints points={currentPoints} />
      </Row>
      <Row>
        <UserPoints points={currentPoints} />
        <RoundNumber>{currentRound + 1}</RoundNumber>
        <UserPoints points={currentPoints} />
      </Row>
      <Row>
        <UserPoints points={currentPoints} />
        <RoundNumber>{currentRound + 2}</RoundNumber>
        <UserPoints points={currentPoints} />
      </Row>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 30px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 15px;
  margin-bottom: 2px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.5);
  padding: 8px;
`;

const RoundNumber = styled.p`
  margin: 0;
  font-size: 22px;
  font-weight: bold;
  color: white;
  padding: 3px;
  border-radius: 40%;
  background-color: black;
`;
