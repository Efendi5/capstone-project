import styled from "styled-components";
import StartButton from "../../components/StartPage/StartButton";
import HeaderStartPage from "../../components/StartPage/Header";
import StartCard from "../../components/StartPage/QuizCardStart";

export default function StartPage() {
  return (
    <>
      <StyledForm>
        <HeaderStartPage />
        <StartCard />
        <StartButton />
      </StyledForm>
    </>
  );
}

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;
