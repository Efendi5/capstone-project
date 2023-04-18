import styled from "styled-components";
import Header from "../../components/QuizCardPage/Header";
import StartCard from "../../components/Start/QuizCardStart";
import StartButton from "../../components/Start/StartButton";
export default function StartPage({ nickname }) {
  return (
    <StyledSection>
      <Header nickname={nickname} />
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
