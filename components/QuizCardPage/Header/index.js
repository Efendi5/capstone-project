import styled from "styled-components";
import User from "../User";

export default function Header({ points1, points2 }) {
  return (
    <StyledDiv>
      <User name="User1" aria-label="Smiley" emoji="😁" points={points1} />
      <StyledHeader>Battle Quiz</StyledHeader>
      <User name="User2" aria-label="Smiley" emoji="😎" points={points2} />
    </StyledDiv>
  );
}

export const StyledHeader = styled.h1`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  color: #597580;
  margin: 25px;
  background: linear-gradient(45deg, #597580, #3c5a6b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: pulse 2s infinite;
  font-weight: bold;

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2);
    }
    100% {
      box-shadow: 0 0 0 30px rgba(0, 0, 0, 0);
    }
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
