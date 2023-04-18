import styled from "styled-components";
import PlayButton from "../NavbarComponents/Play";

export default function Navbar() {
  return (
    <StyledNav>
      <PlayButton />
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  padding: 0 20px;
  color: white;
  margin: 5px;
`;
