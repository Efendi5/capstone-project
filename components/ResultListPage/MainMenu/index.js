import styled from "styled-components";
import Link from "next/link";

export default function MainMenu() {
  return <StyledLink href="/MainMenu"> ⬅ </StyledLink>;
}

export const StyledLink = styled.a`
  cursor: pointer;
  font-size: 60px;
  text-decoration: none;
  margin-right: auto;
  margin-left: 20px;
  color: white;
`;
