import { getArrayFromStorage, saveArrayToStorage } from "utils/localStorage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavouritesState {
  favourites: Array<any>;
}

const initialState: FavouritesState = {
  favourites: getArrayFromStorage("favourites"),
};

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addToFavourites: (state, action: PayloadAction<any>) => {
      const pos = state.favourites
        .map((favourite) => favourite.name)
        .indexOf(action.payload.name);
      if (pos === -1) {
        state.favourites = [...state.favourites, action.payload];
        saveArrayToStorage("favourites", state.favourites);
      }
    },
    fetchFavorites: (state) => {
      state.favourites = getArrayFromStorage("favourites");
    },
  },
});

export const { addToFavourites, fetchFavorites } = favouritesSlice.actions;

export default favouritesSlice.reducer;
