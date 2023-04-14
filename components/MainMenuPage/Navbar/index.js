import styled from "styled-components";
import PlayButton from "../NavbarComponents/Play";

export default function Navbar() {
  return (
    <naStyledNavv>
      <StyledUl>
        <StyledLi>
          <PlayButton />
        </StyledLi>
      </StyledUl>
    </naStyledNavv>
  );
}

const StyledNav = styled.nav`
  padding: 0 20px;
  background-color: #3c5a6b;
  color: white;
  margin: 50px;
`;
const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 20px;
`;
const StyledLi = styled.li`
  margin: 0 10px;
`;
