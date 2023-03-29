import styled from "styled-components";
import QuizCard from "../quizCard";
import Timeline from "../timeline";
import AnswerButtons from "../answerButton";
import Header from "../header";
import NextButton from "../nextButton";
import { useState } from "react";
import { questions } from "../../../db/data";

export default function QuizForm() {
  const [points1, setPoints1] = useState(0);
  const [points2, setPoints2] = useState(0);
  const [question, setQuestion] = useState(questions[0].question);

  return (
    <>
      <Header points1={points1} points2={points2}></Header>
      <StyledForm>
        <QuizCard questions={question}></QuizCard>
        <Timeline />
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
  width: 100%;
`;
