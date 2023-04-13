import styled from "styled-components";
import Link from "next/link";

export default function StartButton() {
  return <StartLink href="/quiz">Start</StartLink>;
}

export const StartLink = styled(Link)`
  display: block;
  width: 60%;
  text-align: center;
  max-width: 200px;
  padding: 10px;
  background-color: green;
  border-radius: 20px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  margin-top: 120px;
  margin-bottom: 20px;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: darkgreen;
  }
`;
