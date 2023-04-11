import { FaStar } from "react-icons/fa";
import styled from "styled-components";

export default function UserPoints({ points }) {
  const starIcons = [];

  for (let i = 0; i < points; i++) {
    starIcons.push(<FaStar key={i} />);
  }

  return (
    <>
      <StyledPoints>{starIcons}</StyledPoints>
    </>
  );
}

export const StyledPoints = styled.div`
  margin-top: -15px;
  font-size: 16px;
  color: black;
  margin-bottom: 1px;
  color: #ffd700;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 20px;
  position: relative;
`;
