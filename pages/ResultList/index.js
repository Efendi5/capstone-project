import Header from "../../components/ResultListPage/Header";
import MainMenu from "../../components/ResultListPage/MainMenu";
import styled from "styled-components";
import Result from "../../components/ResultListPage/Result";
import PlayAgainButton from "../../components/ResultListPage/PlayAgainButton";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ResultList({ handlePlayAgainClick }) {
  const router = useRouter();
  const [currentRound, setCurrentRound] = useState(1);

  const points1 = parseInt(router.query?.points1 ?? 0);

  return (
    <StyledForm>
      <MainMenu />
      <StyledParagraph>
        <strong>Ergebnis</strong>
      </StyledParagraph>
      <Header />
      {points1 && <Result points={points1} currentRound={1} />}
      <PlayAgainButton onClick={handlePlayAgainClick} />
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

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
`;
