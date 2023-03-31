import styled from "styled-components";
import QuizCard from "../QuizCard";
import Timeline from "../Timeline";
import AnswerButtons from "../AnswerButton";
import Header from "../Header";
import NextButton from "../NextButton";
import { useState } from "react";
import { questions } from "../../../DB/data";

export default function QuizForm() {
  const [points1, setPoints1] = useState(0);
  const [points2, setPoints2] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20);
  const [index, setIndex] = useState(0);
  const question = questions[index].question;

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
          index={index}
        ></AnswerButtons>
        <NextButton
          isDisabled={isDisabled}
          setSelectedAnswer={setSelectedAnswer}
          index={index}
          setIndex={setIndex}
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
