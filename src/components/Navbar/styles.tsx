import { StyledButton } from "components/Button/styles";
import { Link } from "react-router-dom";
import styled from "styled-components";

import theme from "styles/theme";

export const NAVBAR_HEIGHT = 60;

export const StyledNavbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${NAVBAR_HEIGHT}px;
  background-color: ${theme.colors.lightGray};
  font-size: 18px;
  z-index: ${theme.zindex.navbar};
  position: sticky;
  top: 0;
  left: 0;
  @media ${theme.media.small} {
    position: relative;
    font-size: 16px;
    height: 100%;
  }
`;

export const NavbarInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const NavbarMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${theme.media.medium} {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

export const StyledLink = styled(Link)`
  margin: 0 30px;
  @media ${theme.media.medium} {
    margin: 0 10px;
  }
`;

export const StyledLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${theme.media.small} {
    padding: 15px;
    width: 100%;
  }
`;

export const NavbarButton = styled(StyledButton)`
  position: absolute;
  right: 0;

  @media ${theme.media.medium} {
    position: relative;
    right: -40px;
  }

  @media ${theme.media.small} {
    position: relative;
    left: 0;
    font-size: 16px;
    width: 100%;
    margin-bottom: 10px;
  }
`;
