import styled from "styled-components";
import Link from "next/link";

export default function MainMenu({ currentRound }) {
  if (currentRound === 3) {
    return (
      <StyledLink aria-label="Pfeil" href="/main-menu">
        &larr;
      </StyledLink>
    );
  } else {
    return null;
  }
}

export const StyledLink = styled(Link)`
  cursor: pointer;
  font-size: 28px;
  position: relative;
  text-decoration: none;
  margin-right: auto;
  margin-left: 25px;
  color: white;
  margin-top: 20px;
  padding: 1px 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;
  border-radius: 10px;

  &:hover {
    color: black;
    background-color: white;
    transform: translateY(-5px);
    border-radius: 20%;
  }
`;
