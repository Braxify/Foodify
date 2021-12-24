import styled from "styled-components";
import theme from "styles/theme";

export const DISH_CARD_HEIGHT = 495;
export const DISH_CARD_WIDTH = 390;

export const Dish = styled.div`
  display: flex;
  flex-direction: column;
  height: ${DISH_CARD_HEIGHT}px;
  max-width: ${DISH_CARD_WIDTH}px;
`;

export const DishImage = styled.img`
  object-fit: cover;
  max-width: 100%;
  max-height: 234px;
`;

export const DishInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px 28px;
  background-color: ${theme.colors.lightGray};
  flex-grow: 1;
  @media ${theme.media.small}{
    padding: 25px 20px;
  }
`;

export const DishTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 26px;

  @media ${theme.media.medium}{
    margin-bottom: 18px;
  }
`;

export const DishDescription = styled.div`
  font-size: 18px;
  line-height: 25px;
  word-wrap: break-word;
  max-height: 150px;
  overflow: auto;
`;
