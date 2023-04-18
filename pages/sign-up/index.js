import styled from "styled-components";
import { StyledHeader } from "../../components/QuizCardPage/Header";
import SubmitButton from "../../components/SignUpPage/SubmitButton";
import UserName from "../../components/SignUpPage/UserName";
import { useRouter } from "next/router";

export default function SignUp({ nickname, onAddNickname }) {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push({
      pathname: "/main-menu",
    });
  };
  return (
    <>
      <StyledContainer>
        <StyledHeader>Battle Quiz</StyledHeader>
        <StyledForm onSubmit={handleSubmit}>
          <StyledH1>Choose your Nickname</StyledH1>
          <StyledHr></StyledHr>
          <UserName nickname={nickname} onAddNickname={onAddNickname} />
          <SubmitButton nickname={nickname} />
        </StyledForm>
      </StyledContainer>
    </>
  );
}

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 400px;
  margin-top: 90px;
  padding: 32px;
  background-color: rgba(254, 254, 254, 0.5);
  border-radius: 20px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15), 0px 5px 10px rgba(0, 0, 0, 0.1);
`;

export const StyledHr = styled.hr`
  border: none;
  margin-bottom: 20px;
  border-bottom: 2px solid black;
`;

export const StyledH1 = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
`;
