import { DishCard } from "components/DishCard";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { IRandomDish } from "interfaces/IRandomDish";
import { useCallback, useEffect, useState } from "react";
import { fetchRandomMeal } from "store/reducers/actions";
import { handleFavourites } from "store/reducers/FavouritesSlice";
import { Container, StyledError, StyledLoading } from "styles/components";
import {
  DishCardAction,
  DishCardActions,
  RandomDishInner,
  StyledLike,
  StyledRandomDish,
} from "./styles";

import LikeIcon from "assets/img/like.svg";
import DislikeIcon from "assets/img/dislike.svg";

export function RandomDish() {
  const [isLiked, setLiked] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { meal, isLoading, error } = useAppSelector(
    (state) => state.randomDish
  );

  const getRandomMeal = useCallback(() => {
    dispatch(fetchRandomMeal());
    setLiked(false);
  }, [dispatch]);

  function handleFavourite(meal: IRandomDish) {
    setLiked(!isLiked);
    dispatch(handleFavourites(meal!));
  }

  useEffect(() => {
    getRandomMeal();
  }, [getRandomMeal]);

  return (
    <StyledRandomDish>
      <Container>
        <RandomDishInner>
          {isLoading && <StyledLoading>Loading...</StyledLoading>}
          {error && <StyledError>{error} :(</StyledError>}
          {meal && (
            <>
              <DishCard meal={meal} hideRemoveButton />
              <DishCardActions>
                <DishCardAction onClick={getRandomMeal}>Skip</DishCardAction>
                <DishCardAction
                  onClick={(): void => {
                    handleFavourite(meal);
                  }}
                >
                  {isLiked ? (
                    <StyledLike src={LikeIcon} alt="like" />
                  ) : (
                    <StyledLike src={DislikeIcon} alt="dislike" />
                  )}
                </DishCardAction>
              </DishCardActions>
            </>
          )}
        </RandomDishInner>
      </Container>
    </StyledRandomDish>
  );
}
