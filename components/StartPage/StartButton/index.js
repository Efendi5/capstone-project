import styled from "styled-components";
import { useRouter } from "next/router";

export default function StartButton() {
  const router = useRouter();

  const onHandleStart = () => {
    router.push({
      pathname: "/Quiz",
    });
  };
  return (
    <StyledStartButton type="button" onClick={onHandleStart}>
      Start
    </StyledStartButton>
  );
}

export const StyledStartButton = styled.button`
  display: block;
  justify-content: center;
  width: 60%;
  text-align: center;
  max-width: 200px;
  padding: 10px;
  background-color: green;
  border-radius: 20px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 120px;
  margin-bottom: 20px;
  font-weight: bold;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: darkgreen;
  }
`;
