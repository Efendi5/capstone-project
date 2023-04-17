import Link from "next/link";
import styled from "styled-components";

export default function PlayButton() {
  return <PlayLink href="/startQuiz">Spielen</PlayLink>;
}

const PlayLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  padding: 0 10px;
  background-color: #597580;
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px 25px 15px 50px;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  &:hover {
    background-color: #3c5a6b;
  }
`;
