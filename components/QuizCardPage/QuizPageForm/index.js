import styled from "styled-components";
import QuizCard from "../QuizCard";
import Timeline from "../Timeline";
import AnswerButtons from "../AnswerButton";
import Header from "../Header";
import NextButton from "../../NextButton";

export default function QuizForm() {
  return (
    <>
      <Header></Header>
      <StyledForm>
        <QuizCard></QuizCard>
        <Timeline></Timeline>
        <AnswerButtons></AnswerButtons>
        <NextButton></NextButton>
      </StyledForm>
    </>
  );
}

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #1c7ed6;
`;
