import styled from "styled-components";

export default function StartCard() {
  return <StyledCard>Battle Quiz</StyledCard>;
}

export const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 90px;
  font-weight: bold;
  width: 90%;
  color: red;
  text-align: center;
  max-width: 400px;
  font-size: 30px;
  padding: 80px;
  background: linear-gradient(to bottom, #cfdfe6 0%, #ffffff 100%);
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5), 0 0 0 2px #cfdfe6;
  position: relative;
  font-family: "Open Sans", sans-serif;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
`;
