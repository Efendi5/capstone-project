import styled from "styled-components";
import UserPoints from "../../QuizCardPage/UserPoints";
import { useState, useEffect } from "react";

export default function Result({
  points1,
  points2,
  setTotalPoints1,
  currentRound,
  setTotalPoints2,
  roundPoints,
  setRoundPoints,
}) {
  const round1Points1 = localStorage.getItem("User1-round1") || 0;
  const round1Points2 = localStorage.getItem("User2-round1") || 0;
  const round2Points1 = localStorage.getItem("User1-round2") || 0;
  const round2Points2 = localStorage.getItem("User2-round2") || 0;
  const round3Points1 = localStorage.getItem("User1-round3") || 0;
  const round3Points2 = localStorage.getItem("User2-round3") || 0;

  useEffect(() => {
    if (currentRound === 1) {
      localStorage.setItem("User1-round1", points1);
      localStorage.setItem("User2-round1", points2);
    }
    if (currentRound === 2) {
      localStorage.setItem("User1-round2", points1);
      localStorage.setItem("User2-round2", points2);
    }
    if (currentRound === 3) {
      localStorage.setItem("User1-round3", points1);
      localStorage.setItem("User2-round3", points2);
    }

    const totalPoints1 = {
      1: round1Points1,
      2: round2Points1,
      3: round3Points1,
    };
    localStorage.setItem("totalPoints1", JSON.stringify(totalPoints1));

    setTotalPoints1(
      parseInt(round1Points1) +
        parseInt(round2Points1) +
        parseInt(round3Points1)
    );
  }, [
    points1,
    currentRound,
    round1Points1,
    round2Points1,
    round3Points1,
    setTotalPoints1,
  ]);

  useEffect(() => {
    const totalPoints2 = {
      1: round1Points2,
      2: round2Points2,
      3: round3Points2,
    };
    localStorage.setItem("totalPoints2", JSON.stringify(totalPoints2));

    setTotalPoints2(
      parseInt(round1Points2) +
        parseInt(round2Points2) +
        parseInt(round3Points2)
    );
  }, [
    points2,
    currentRound,
    round1Points2,
    round2Points2,
    round3Points2,
    setTotalPoints2,
  ]);

  useEffect(() => {
    setRoundPoints((prevRoundPoints) => ({
      ...prevRoundPoints,
      [currentRound]: { points1, points2 },
    }));
  }, [points1, points2, currentRound, setRoundPoints]);

  useEffect(() => {
    const storedTotalPoints1 = localStorage.getItem("totalPoints1");
    if (storedTotalPoints1) {
      const parsedTotalPoints = JSON.parse(storedTotalPoints1);
      setTotalPoints1(
        parseInt(parsedTotalPoints[1]) +
          parseInt(parsedTotalPoints[2]) +
          parseInt(parsedTotalPoints[3])
      );
    }
  }, [setTotalPoints1]);

  useEffect(() => {
    const storedTotalPoints2 = localStorage.getItem("totalPoints2");
    if (storedTotalPoints2) {
      const parsedTotalPoints = JSON.parse(storedTotalPoints2);
      setTotalPoints2(
        parseInt(parsedTotalPoints[1]) +
          parseInt(parsedTotalPoints[2]) +
          parseInt(parsedTotalPoints[3])
      );
    }
  }, [setTotalPoints2]);

  const roundNumbers = [
    { currentRound: 1, points1: round1Points1, points2: round1Points2 },
    { currentRound: 2, points1: round2Points1, points2: round2Points2 },
    { currentRound: 3, points1: round3Points1, points2: round3Points2 },
  ];

  return (
    <StyledDiv>
      {currentRound > 0 &&
        roundNumbers.map((roundNumber, index) => {
          if (roundNumber.currentRound <= currentRound) {
            return (
              <Row key={roundNumber.currentRound}>
                <UserPoints points1={[roundNumber.points1]} />
                <RoundNumber>{roundNumber.currentRound}</RoundNumber>
                <UserPoints points2={[roundNumber.points2]} />
              </Row>
            );
          }
          return null;
        })}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 15px;
  background-color: #cfdfe6;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 10px;
  margin-bottom: 8px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.5);
  padding: 5px;
  font-family: "Montserrat", sans-serif;
  border: 2px solid black;
  & > div {
    width: 50px;
  }
`;

const RoundNumber = styled.p`
  margin: 0;
  font-size: 22px;
  font-weight: bold;
  color: white;
  padding: 10px;
  border-radius: 50%;
  background-color: #5d5d5d;
  border: 2px solid black;
`;
