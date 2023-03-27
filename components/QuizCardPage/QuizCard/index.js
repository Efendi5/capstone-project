import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  background-color: #1c7ed6;
`;

export const StyledDiv2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 16px;
`;

export const StyledDiv3 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  margin-top: 35px;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 16px;

  button:nth-child(1) {
    grid-row: 1 / span 1;
    grid-column: 1 / span 1;
  }

  button:nth-child(2) {
    grid-row: 1 / span 1;
    grid-column: 2 / span 1;
  }

  button:nth-child(3) {
    grid-row: 2 / span 1;
    grid-column: 1 / span 1;
  }

  button:nth-child(4) {
    grid-row: 2 / span 1;
    grid-column: 2 / span 1;
  }
`;

export const StyledDiv4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 33%;
  margin-top: 5px;
  margin-bottom: 16px;
`;

export const StyledDiv5 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 33%;
  margin-top: 5px;
  margin-bottom: 16px;
`;

export const StyledCard = styled.div`
  display: flex;
  margin: 30px auto;
  width: 90%;
  max-width: 400px;
  font-size: 17px;
  padding: 65px;
  background-color: #cfdfe6;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  position: relative;

  p {
    align-self: center;
  }
`;
