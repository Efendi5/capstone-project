import styled from "styled-components";
import QuizCard from "../QuizCard";
import Timeline from "../Timeline";
import AnswerButtons from "../AnswerButtons";
import Header from "../Header";
import NextButton from "../NextButton";
import { useState } from "react";
import { questions } from "../../../db/data";
import { useEffect } from "react";

export default function QuizForm({ nickname }) {
  const [points1, setPoints1] = useState(0);
  const [points2, setPoints2] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20);
  const [clickCounter, setClickCounter] = useState(0);
  const [index, setIndex] = useState();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * (questions.length - 1));
    setIndex(randomIndex);
  }, []);
  return (
    <>
      <Header points1={points1} points2={points2} nickname={nickname}></Header>
      <StyledForm>
        {index && (
          <>
            <QuizCard
              key={questions[index].id}
              question={questions[index].question}
            ></QuizCard>
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
              currentQuestion={questions[index]}
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
              currentQuestion={questions[index]}
            ></NextButton>
          </>
        )}
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
