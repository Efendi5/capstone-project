import { useState } from "react";
import styled from "styled-components";
import User from "../User";

export default function Header() {
  const [points1, setPoints1] = useState(0);
  const [points2, setPoints2] = useState(0);
  return (
    <StyledDiv>
      <User name="Fendi" emoji="😁" points={points1} />
      <StyledHeader>Battle Quiz</StyledHeader>
      <User name="LOLO" emoji="😎" points={points2} />
    </StyledDiv>
  );
}

export const StyledHeader = styled.h1`
  display: flex;
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
  background-color: #1c7ed6;
`;
