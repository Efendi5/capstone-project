import styled from "styled-components";

export default function QuizCard({ questions }) {
  return <StyledCard>{questions}</StyledCard>;
}

export const StyledCard = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: 30px;
  width: 90%;
  text-align: center;
  max-width: 400px;
  font-size: 20px;
  padding: 55px;
  background-color: #cfdfe6;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  position: relative;

  p {
    align-self: center;
  }
`;
