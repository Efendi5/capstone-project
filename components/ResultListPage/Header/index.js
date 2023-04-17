import styled from "styled-components";
import User from "../../QuizCardPage/User";

export default function Header({ nickname }) {
  return (
    <StyledDiv>
      <User1Container>
        <User name={nickname} aria-label="Smiley" emoji="😁" />
      </User1Container>
      <User2Container>
        <User name="User2" aria-label="Smiley" emoji="😎" />
      </User2Container>
    </StyledDiv>
  );
}

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
`;

export const User1Container = styled.div`
  margin: 20px;
  maring-right: 140px;
`;
export const User2Container = styled.div`
  margin: 20px;
  margin-left: 140px;
`;

export const PointsContainer = styled.div`
  margin: 55px;
`;
