import styled from "styled-components";
export default function TotalPoints({
  totalPoints1,
  totalPoints2,
  currentRound,
}) {
  return (
    currentRound === 3 && (
      <StyledParagraph>
        {totalPoints1} - {totalPoints2}
      </StyledParagraph>
    )
  );
}

export const StyledParagraph = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  margin-top: 10px;
  max-width: 400px;
  width: 20%;
  margin: 5px;
  padding: 5px;
  background: linear-gradient(45deg, #597580, #3c5a6b);
  border-radius: 15px;
  color: white;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
`;
