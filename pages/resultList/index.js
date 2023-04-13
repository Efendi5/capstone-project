import Header from "../../components/ResultListPage/Header";
import MainMenu from "../../components/ResultListPage/MainMenu";
import styled from "styled-components";
import Result from "../../components/ResultListPage/Result";
import PlayAgainButton from "../../components/ResultListPage/PlayAgainButton";
import { useRouter } from "next/router";
import { useState } from "react";
import TotalPoints from "../../components/ResultListPage/TotalPoints";

export default function ResultList({ currentRound, setCurrentRound }) {
  const router = useRouter();
  const [totalPoints1, setTotalPoints1] = useState(0);
  const [totalPoints2, setTotalPoints2] = useState(0);
  const [roundPoints, setRoundPoints] = useState({});

  const points1 = parseInt(router.query?.points1 ?? 0);
  const points2 = parseInt(router.query?.points2 ?? 0);

  return (
    <StyledForm>
      <MainMenu currentRound={currentRound} />
      <StyledParagraph>Ergebnis</StyledParagraph>
      <TotalPoints
        totalPoints1={totalPoints1}
        totalPoints2={totalPoints2}
        currentRound={currentRound}
      />
      <Header />
      <Result
        points1={points1}
        points2={points2}
        currentRound={currentRound}
        setTotalPoints1={setTotalPoints1}
        totalPoints1={totalPoints1}
        setTotalPoints2={setTotalPoints2}
        totalPoints2={totalPoints2}
        roundPoints={roundPoints}
        setRoundPoints={setRoundPoints}
      />
      <PlayAgainButton
        currentRound={currentRound}
        setCurrentRound={setCurrentRound}
        setRoundPoints={setRoundPoints}
      />
    </StyledForm>
  );
}

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;

export const StyledParagraph = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  margin-top: 10px;
  max-width: 400px;
  width: 50%;
  margin: 15px;
  padding: 16px;
  background: linear-gradient(45deg, #597580, #3c5a6b);
  border-radius: 15px;
  color: white;
  font-weight: bold;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
`;
