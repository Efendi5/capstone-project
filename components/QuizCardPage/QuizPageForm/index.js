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
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [questionIndex, setQuestionIndex] = useState(0);

  const question = questions[questionIndex].question;
  const answers = questions[questionIndex].answers;

  return (
    <>
      <Header points1={points1} points2={points2}></Header>
      <StyledForm>
        <QuizCard questions={question}></QuizCard>
        <Timeline
          isTimerPaused={isTimerPaused}
          setIsDisabled={setIsDisabled}
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
        />
        <AnswerButtons
          points1={points1}
          setPoints1={setPoints1}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          isDisabled={isDisabled}
          setIsDisabled={setIsDisabled}
          setIsTimerPaused={setIsTimerPaused}
          timeLeft={timeLeft}
          answers={answers}
          questionIndex={questionIndex}
        ></AnswerButtons>
        <NextButton
          isDisabled={isDisabled}
          setSelectedAnswer={setSelectedAnswer}
          questionIndex={questionIndex}
          setQuestionIndex={setQuestionIndex}
          setIsDisabled={setIsDisabled}
          setIsTimerPaused={setIsTimerPaused}
          setTimeLeft={setTimeLeft}
        ></NextButton>
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
