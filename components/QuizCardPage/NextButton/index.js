import styled from "styled-components";
import { useState } from "react";

export default function NextButton({ isDisabled }) {
  return (
    <StyledButtonNext block={isDisabled && "block"} type="button">
      Weiter
    </StyledButtonNext>
  );
}

export const StyledButtonNext = styled.button`
  display: ${(props) => props.block || "none"};
  justify-content: center;
  width: 40%;
  text-align: center;
  max-width: 200px;
  padding: 15px;
  background-color: green;
  border-radius: 20px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 20px;
`;
