import { DishCard } from "components/DishCard";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { IRandomDish } from "interfaces/IRandomDish";
import { useCallback, useEffect } from "react";
import { fetchRandomMeal } from "store/reducers/actions";
import { addToFavourites } from "store/reducers/FavouritesSlice";
import { Container, StyledError, StyledLoading } from "styles/components";
import {
  DishCardAction,
  DishCardActions,
  RandomDishInner,
  StyledRandomDish,
} from "./styles";

export function RandomDish() {
  const dispatch = useAppDispatch();
  const { meal, isLoading, error } = useAppSelector(
    (state) => state.randomDishReducer
  );

  const getRandomMeal = useCallback(() => {
    dispatch(fetchRandomMeal());
  }, [dispatch]);

  function handleFavourite(meal: IRandomDish) {
    dispatch(addToFavourites(meal!));
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
              <DishCard meal={meal} />
              <DishCardActions>
                <DishCardAction onClick={getRandomMeal}>Skip</DishCardAction>
                <DishCardAction
                  onClick={(): void => {
                    handleFavourite(meal);
                  }}
                >
                  Like
                </DishCardAction>
              </DishCardActions>
            </>
          )}
        </RandomDishInner>
      </Container>
    </StyledRandomDish>
  );
}
