import styled from "styled-components";

export const StyledTimer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  position: relative;
  padding: 5px;
  color: white;
  margin: 40px auto 25px;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);

  background-color: ${(props) => (props.isRunningOut ? "red" : "green")};
`;
