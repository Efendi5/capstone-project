import styled from "styled-components";
import { StyledHeader } from "../../components/QuizCardPage/Header";
import Navbar from "../../components/MainMenuPage/Navbar";
import User from "../../components/QuizCardPage/User";

export default function MainMenu({ nickname }) {
  return (
    <StyledSection>
      <StyledHeader>Battle Quiz</StyledHeader>
      <User name={nickname} aria-label="Smiley" emoji="😁" />
      <StyledContainer>
        <Navbar />
      </StyledContainer>
    </StyledSection>
  );
}

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;

export const StyledContainer = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;
  width: 100%;
  background: linear-gradient(45deg, #597580, #3c5a6b);
  border-radius: 15px 15px 0px 0px;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
`;
