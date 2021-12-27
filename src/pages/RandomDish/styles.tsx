import styled from "styled-components";

import { StyledButton } from "components/Button/styles";
import theme from "styles/theme";

export const StyledRandomDish = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 147px 0 20px;

  @media ${theme.media.extraLarge} {
    padding-top: 45px;
  }
`;

export const RandomDishInner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const DishCardActions = styled.div`
  max-width: 390px;
  display: flex;
  justify-content: center;
  gap: 0 8px;
  margin-top: 68px;

  @media ${theme.media.medium} {
    margin-top: 42px;
  }
`;

export const DishCardAction = styled(StyledButton)`
  padding: 12px 80px;
  width: 50%;
  cursor: pointer;

  @media ${theme.media.small} {
    padding: 10px 64px;
  }

  @media (max-width: 360px) {
    width: 50%;
  }
`;

export const StyledLike = styled.img``;
