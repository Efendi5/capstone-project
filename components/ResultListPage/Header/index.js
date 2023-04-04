import styled from "styled-components";
import User, { StyledUser, StyledName } from "../../QuizCardPage/User";
import UserPoints from "../../QuizCardPage/UserPoints";

export default function Header({ points }) {
  return (
    <StyledDiv>
      <UserContainer>
        <User name="User1" aria-label="Smiley" emoji="😁" />
      </UserContainer>
      <PointsContainer>
        <UserPoints points={points} />
      </PointsContainer>
      <UserContainer>
        <User name="User2" aria-label="Smiley" emoji="😎" />
      </UserContainer>
    </StyledDiv>
  );
}

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserContainer = styled.div`
  margin: 20px;
`;

export const PointsContainer = styled.div`
  margin: 35px;
`;
