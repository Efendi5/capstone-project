import styled from "styled-components";

export default function UserPoints({ points }) {
  const pointString =
    points === 1 ? "point" : points === 0 || points > 1 ? "points" : "point";

  return (
    <>
      <StyledPoints>
        <strong>
          {points} {pointString}
        </strong>
      </StyledPoints>
    </>
  );
}

export const StyledPoints = styled.div`
  margin-top: -20px;
  font-size: 16px;
  color: black;
  margin-bottom: 1px;
`;
