import styled from "styled-components";
import PlayButton from "../NavbarComponents/Play";

export default function Navbar() {
  return (
    <StyledNav>
      <StyledUl>
        <StyledLi>
          <PlayButton />
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  padding: 0 20px;
  color: white;
  margin: 5px;
`;
const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 10px;
`;
const StyledLi = styled.li`
  margin: 0 10px;
`;
