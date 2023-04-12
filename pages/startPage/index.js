import styled from "styled-components";
import StartButton from "../../components/Start/StartButton";
import StartCard from "../../components/Start/QuizCardStart";
import Header from "../../components/QuizCardPage/Header";

export default function StartPage() {
  return (
    <>
      <StyledSection>
        <Header />
        <StartCard />
        <StartButton />
      </StyledSection>
    </>
  );
}

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;
