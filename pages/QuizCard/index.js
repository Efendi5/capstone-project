import React from "react";
import { useState, useEffect } from "react";
import { StyledDiv } from "../../components/QuizCardPage/QuizCard";
import { StyledForm } from "../../components/QuizCardPage/QuizPageForm";
import { StyledDiv2 } from "../../components/QuizCardPage/QuizCard";
import { StyledUser1 } from "../../components/QuizCardPage/User";
import { StyledUser2 } from "../../components/QuizCardPage/User";
import { StyledPoints1 } from "../../components/QuizCardPage/UserPoints";
import { StyledPoints2 } from "../../components/QuizCardPage/UserPoints";
import { StyledHeader } from "../../components/QuizCardPage/Header";
import { StyledCard } from "../../components/QuizCardPage/QuizCard";
import { StyledTimer } from "../../components/QuizCardPage/Timeline";
import { StyledDiv3 } from "../../components/QuizCardPage/QuizCard";
import { StyledButton } from "../../components/QuizCardPage/AnswerButton";
import { StyledDiv4 } from "../../components/QuizCardPage/QuizCard";
import { StyledDiv5 } from "../../components/QuizCardPage/QuizCard";
import { StyledButtonNext } from "../../components/QuizCardPage/AnswerButton";
import { StyledLabel } from "../../components/QuizCardPage/User";
const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    answers: ["Paris", "Berlin", "Madrid", "London"],
    correctAnswer: "Paris",
  },
];

export default function QuizCard() {
  // Für die Fragen
  const [questionsState, setQuestionsState] = useState(questions);
  // Für die Zeit die abläuft
  const [timeLeft, setTimeLeft] = useState(30);
  // Für die Punkte der User
  const [points1, setPoints1] = useState(0);
  const [points2, setPoints2] = useState(0);

  // useEffect benutzt für Timer runter zählen
  useEffect(() => {
    if (timeLeft > 0) {
      const intervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [timeLeft]);

  return (
    <StyledDiv>
      <StyledForm>
        <StyledDiv2>
          <StyledDiv4>
            <StyledUser1>😄</StyledUser1>
            <StyledLabel>Fendi</StyledLabel>
            <StyledPoints1>{points1} Points</StyledPoints1>
          </StyledDiv4>
          <StyledHeader>Battle Quiz</StyledHeader>
          <StyledDiv5>
            <StyledUser2>😎</StyledUser2>
            <StyledLabel>Drip</StyledLabel>
            <StyledPoints2>{points2} Points</StyledPoints2>
          </StyledDiv5>
        </StyledDiv2>
        <StyledCard>{questionsState[0].question}</StyledCard>
        <StyledTimer isRunningOut={timeLeft > 0 && timeLeft <= 10}>
          {timeLeft}s
        </StyledTimer>
        <StyledDiv3>
          {questionsState[0].answers.map((answer, id) => (
            <StyledButton
              key={id}
              onClick={() => {
                if (answer === questionsState[0].correctAnswer) {
                  setPoints1(points1 + 1);
                }
              }}
            >
              {answer}
            </StyledButton>
          ))}
        </StyledDiv3>
        <StyledButtonNext>Weiter</StyledButtonNext>
      </StyledForm>
    </StyledDiv>
  );
}
