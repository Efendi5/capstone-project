import styled from "styled-components";
import UserPoints from "../UserPoints";

export default function User({ emoji, name, points }) {
  return (
    <StyledDiv>
      <StyledUser>{emoji}</StyledUser>
      <strong>
        <StyledName>{name}</StyledName>
      </strong>
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
  color: white;
`;

export const StyledDiv = styled.div`
  display: block;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;
