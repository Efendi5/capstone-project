import styled from "styled-components";

export default function QuizCard({ questions }) {
  return <StyledCard>{questions}</StyledCard>;
}

export const StyledCard = styled.div`
  display: flex;
  margin: 30px auto;
  width: 90%;
  text-align: center;
  max-width: 400px;
  font-size: 18px;
  padding: 65px;
  background-color: #cfdfe6;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  position: relative;

  p {
    align-self: center;
  }
`;
