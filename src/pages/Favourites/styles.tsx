import { DISH_CARD_WIDTH } from "components/DishCard/styles";
import styled from "styled-components";
import theme from "styles/theme";

export const FAVOURITE_DISHES_GAP = 33;

export const StyledFavourites = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 71px 0;
`;

export const FavouritesInner = styled.div`
  display: grid;
  gap: ${FAVOURITE_DISHES_GAP}px;
  grid-template-columns: repeat(auto-fit, ${DISH_CARD_WIDTH}px);
  align-items: flex-start;
  justify-content: center;

  @media ${theme.media.large} {
    grid-template-columns: repeat(auto-fit, calc(${DISH_CARD_WIDTH}px - 40px));
  }
  @media ${theme.media.medium} {
    grid-template-columns: auto;
  }
`;
