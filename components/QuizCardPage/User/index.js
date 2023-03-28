import styled from "styled-components";
import UserPoints from "../UserPoints";

export default function User({ emoji, name, points }) {
  return (
    <StyledDiv>
      <StyledUser>{emoji}</StyledUser>
      <StyledName>{name}</StyledName>
      <UserPoints points={points} />
    </StyledDiv>
  );
}

export const StyledUser = styled.div`
  display: flex;
  justify-content: center;
  font-size: 35px;
  margin-top: 5px;
  padding-top: 5px;
  padding: 5px;
`;

export const StyledName = styled.p`
  display: flex;
  justify-content: center;
  font-size: 18px;
  margin-top: 0;
  padding: 5px;
  color: white;
`;

export const StyledDiv = styled.div``;
