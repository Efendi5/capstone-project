import styled from "styled-components";
import User from "../user";

export default function Header({ points1, points2 }) {
  return (
    <StyledDiv>
      <User name="Fendi" aria-label="Smiley" emoji="😁" points={points1} />
      <StyledHeader>
        <strong>Battle Quiz</strong>
      </StyledHeader>
      <User name="LOLO" aria-label="Smiley" emoji="😎" points={points2} />
    </StyledDiv>
  );
}

export const StyledHeader = styled.h1`
  justify-content: center;
  align-items: center;
  font-size: 12px;
  margin-top: 10px;
  margin: 30px;
  padding: 16px;
  background: #597580;
  border-radius: 15px;
  color: white;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
