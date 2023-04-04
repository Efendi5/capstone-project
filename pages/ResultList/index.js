import Header from "../../components/ResultListPage/Header";
import MainMenu from "../../components/ResultListPage/MainMenu";
import styled from "styled-components";
import Result from "../../components/ResultListPage/Result";
import PlayAgainButton from "../../components/ResultListPage/PlayAgainButton";
import { useRouter } from "next/router";

export default function ResultList() {
  const router = useRouter();
  const {
    query: { points1 },
  } = router;
  console.log(points1);
  return (
    <StyledForm>
      <MainMenu />
      <StyledParagraph>
        <strong>Ergebnis</strong>
      </StyledParagraph>
      <Header />
      <Result />
      <PlayAgainButton />
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
  margin: 15px;
  padding: 16px;
  background: #597580;
  border-radius: 15px;
  color: white;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
`;
