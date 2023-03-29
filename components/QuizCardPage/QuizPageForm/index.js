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
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isTimerPaused, setIsTimerPaused] = useState(false);

  return (
    <>
      <Header points1={points1} points2={points2}></Header>
      <StyledForm>
        <QuizCard questions={question}></QuizCard>
        <Timeline isTimerPaused={isTimerPaused} />
        <AnswerButtons
          points1={points1}
          points2={points2}
          setPoints1={setPoints1}
          setPoints2={setPoints2}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          isDisabled={isDisabled}
          setIsDisabled={setIsDisabled}
          isTimerPaused={isTimerPaused}
          setIsTimerPaused={setIsTimerPaused}
        ></AnswerButtons>
        <NextButton isDisabled={isDisabled}></NextButton>
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
