import { useAppDispatch } from "hooks/redux";
import { openModal } from "store/reducers/UIModalSlice";
import { Container } from "styles/components";
import {
  NavbarButton,
  NavbarMenu,
  StyledNavbar,
  StyledLink,
  NavbarInner,
  StyledLinks,
} from "./styles";

export function Navbar() {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(openModal());
  };

  return (
    <StyledNavbar>
      <Container>
        <NavbarInner>
          <NavbarMenu>
            <StyledLinks>
              <StyledLink to="/random">Random dish</StyledLink>
              <StyledLink to="/favourites">Favourites</StyledLink>
            </StyledLinks>
            <NavbarButton onClick={handleClick}>Add custom dish</NavbarButton>
          </NavbarMenu>
        </NavbarInner>
      </Container>
    </StyledNavbar>
  );
}
