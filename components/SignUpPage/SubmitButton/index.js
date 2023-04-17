import styled from "styled-components";

export default function SubmitButton() {
  return <StyledButton type="submit">Spielen</StyledButton>;
}

export const StyledButton = styled.button`
  display: block;
  justify-content: center;
  width: 30%;
  max-width: 200px;
  padding: 8px;
  margin-top: 15px;
  background-color: #1db954;
  border: none;
  border-radius: 20px;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: darkgreen;
  }
`;
