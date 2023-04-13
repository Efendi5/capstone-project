import Header from "../components/QuizCardPage/Header";
import StartCard from "../components/Start/QuizCardStart";
import StartButton from "../components/Start/StartButton";
import styled from "styled-components";

export default function StartPage() {
  return (
    <StyledSection>
      <Header />
      <StartCard />
      <StartButton />
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
