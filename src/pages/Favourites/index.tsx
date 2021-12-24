import { DishCard } from "components/DishCard";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { useEffect } from "react";
import { fetchFavorites } from "store/reducers/FavouritesSlice";
import { Container } from "styles/components";
import { FavouritesInner, StyledFavourites } from "./styles";

export function Favourites() {
  const dispatch = useAppDispatch();
  const { favourites } = useAppSelector((state) => state.favouritesReducer);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <StyledFavourites>
      <Container>
        <FavouritesInner>
          {favourites.length > 0 ? (
            favourites.map((favourite) => {
              return <DishCard meal={favourite} key={favourite.name} />;
            })
          ) : (
            <span>No favourites!</span>
          )}
        </FavouritesInner>
      </Container>
    </StyledFavourites>
  );
}
