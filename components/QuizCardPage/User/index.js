import styled from "styled-components";
import UserPoints from "../UserPoints";

export default function User({ points, name, emoji }) {
  return (
    <StyledDiv>
      <StyledUser aria-label="Smiley">{emoji}</StyledUser>
      <StyledName>{name}</StyledName>
      <UserPoints points={points} />
    </StyledDiv>
  );
}

export const StyledUser = styled.div`
  font-size: 30px;
  margin-top: 5px;
  padding-top: 5px;
  padding: 5px;
`;

export const StyledName = styled.p`
  font-size: 18px;
  margin-top: 0;
  padding: 5px;
  color: black;
  background-color: #f5f5f5;
  border-radius: 10px;
  font-weight: bold;
`;

export const StyledDiv = styled.div`
  display: block;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;
