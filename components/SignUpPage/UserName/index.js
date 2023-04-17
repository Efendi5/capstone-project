import styled from "styled-components";

export default function UserName({ nickname, setNickname }) {
  const onHandleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  return (
    <StyledLabelNickName>
      <StyledInputNickName
        type="text"
        placeholder="Nickname"
        defaultValue={nickname}
        required
        onChange={onHandleNicknameChange}
      />
    </StyledLabelNickName>
  );
}

export const StyledLabelNickName = styled.label`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  align-items: center;
`;

export const StyledInputNickName = styled.input`
  display: block;
  width: 60%;
  padding: 8px;
  align-items: center;
  border: 1px solid #d8d8d8;
  border-radius: 20px;
  background-color: #1c7ed6;
  font-size: 16px;
  color: white;
  margin-bottom: 16px;
`;
