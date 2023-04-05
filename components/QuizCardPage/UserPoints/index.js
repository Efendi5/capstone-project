import { FaStar } from "react-icons/fa";
import styled from "styled-components";

export default function UserPoints({ points }) {
  const starArray = [...Array(points)].map((_, i) => (
    <FaStar key={i} color="#ffd700" />
  ));
  return (
    <>
      <StyledPoints>{starArray}</StyledPoints>
    </>
  );
}

export const StyledPoints = styled.div`
  margin-top: -15px;
  font-size: 16px;
  color: black;
  margin-bottom: 1px;
`;
