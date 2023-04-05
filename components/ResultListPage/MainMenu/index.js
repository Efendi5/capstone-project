import styled from "styled-components";
import Link from "next/link";

export default function MainMenu() {
  return <StyledLink href="/MainMenu">⬅</StyledLink>;
}

export const StyledLink = styled.a`
  cursor: pointer;
  font-size: 40px;
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
