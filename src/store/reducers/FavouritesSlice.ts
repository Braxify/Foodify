import { IRandomDish } from "interfaces/IRandomDish";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavouritesState {
  favourites: Array<IRandomDish>;
}

const initialState: FavouritesState = {
  favourites: [],
};

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    handleFavourites: (state, action: PayloadAction<IRandomDish>) => {
      const pos = state.favourites
        .map((favourite) => favourite.name)
        .indexOf(action.payload.name);
      if (pos === -1) {
        state.favourites = [...state.favourites, action.payload];
      } else {
        const newFavourites = state.favourites.filter(
          (fav) => fav.name !== action.payload.name
        );
        state.favourites = [...newFavourites];
      }
    },
    fetchFavorites: (state) => {},
  },
});

export const { handleFavourites, fetchFavorites } = favouritesSlice.actions;

export default favouritesSlice.reducer;
