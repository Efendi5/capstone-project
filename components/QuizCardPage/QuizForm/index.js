import styled from "styled-components";
import QuizCard from "../QuizCard";
import Timeline from "../Timeline";
import AnswerButtons from "../AnswerButton";
import Header from "../Header";
import NextButton from "../NextButton";
import { useState } from "react";
import { questions } from "../../../db/data";

export default function QuizForm() {
  const [points1, setPoints1] = useState(0);
  const [points2, setPoints2] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20);
  const [index, setIndex] = useState(0);
  const [clickCounter, setClickCounter] = useState(0);
  const question = questions[index] ? questions[index].question : "";
  // const [index, setIndex] = useState(getRandomIndex());
  const currentQuestion = questions[index];

  // function getRandomIndex() {
  //   return Math.floor(Math.random() * questions.length);
  // }

  return (
    <>
      <Header points1={points1} points2={points2}></Header>
      <StyledForm>
        <QuizCard questions={currentQuestion.question}></QuizCard>
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
          index={index}
          currentQuestion={currentQuestion}
        ></AnswerButtons>
        <NextButton
          isDisabled={isDisabled}
          setSelectedAnswer={setSelectedAnswer}
          index={index}
          setIndex={setIndex}
          setIsDisabled={setIsDisabled}
          setIsTimerPaused={setIsTimerPaused}
          setTimeLeft={setTimeLeft}
          setClickCounter={setClickCounter}
          clickCounter={clickCounter}
          points1={points1}
          setPoints1={setPoints1}
          currentQuestion={currentQuestion}
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
