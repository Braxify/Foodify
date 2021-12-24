import { fetchRandomMeal } from "store/reducers/actions";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRandomDish } from "interfaces/IRandomDish";

interface RandomDishState {
  meal: IRandomDish | null;
  isLoading: boolean;
  error: string;
}

const initialState: RandomDishState = {
  meal: null,
  isLoading: false,
  error: "",
};

export const randomDishSlice = createSlice({
  name: "randomDish",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRandomMeal.fulfilled.type]: (
      state,
      action: PayloadAction<IRandomDish>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.meal = action.payload;
    },
    [fetchRandomMeal.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchRandomMeal.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default randomDishSlice.reducer;
