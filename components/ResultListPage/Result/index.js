import styled from "styled-components";
import UserPoints from "../../QuizCardPage/UserPoints";
import AnswerButtons from "../../QuizCardPage/AnswerButton";
import QuizForm from "../../QuizCardPage/QuizForm";

export default function Result({ points }) {
  return (
    <StyledDiv>
      <Row>
        <UserPoints points={points} />
        <RoundNumber>1</RoundNumber>
        <UserPoints points={points} />
      </Row>
      <Row>
        <UserPoints points={points} />
        <RoundNumber>2</RoundNumber>
        <UserPoints points={points} />
      </Row>
      <Row>
        <UserPoints points={points} />
        <RoundNumber>3</RoundNumber>
        <UserPoints points={points} />
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
