import styled from "styled-components";

export default function UserPoints({ points }) {
  return (
    <>
      <StyledPoints>{points} Points</StyledPoints>
    </>
  );
}

export const StyledPoints = styled.div`
  margin-top: -5px;
  display: flex;
  justify-content: center;
  font-size: 16px;
  color: black;
  margin-bottom: 1px;
`;
