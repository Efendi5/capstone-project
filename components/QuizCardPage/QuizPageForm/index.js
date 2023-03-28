import styled from "styled-components";
import QuizCard from "../QuizCard";
import Timeline from "../Timeline";
import AnswerButtons from "../AnswerButton";
import Header from "../Header";
import NextButton from "../NextButton";
import { useState } from "react";

export default function QuizForm() {
  const [points1, setPoints1] = useState(0);
  const [points2, setPoints2] = useState(0);
  return (
    <>
      <Header points1={points1} points2={points2}></Header>
      <StyledForm>
        <QuizCard></QuizCard>
        <Timeline></Timeline>
        <AnswerButtons
          points1={points1}
          points2={points2}
          setPoints1={setPoints1}
          setPoints2={setPoints2}
        ></AnswerButtons>
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
