import { combineReducers, configureStore } from "@reduxjs/toolkit";
import randomDishReducer from "store/reducers/RandomDishSlice";
import favouritesReducer from "store/reducers/FavouritesSlice";
import UIModalReducer from "./reducers/UIModalSlice";

const rootReducer = combineReducers({
  randomDishReducer,
  favouritesReducer,
  UIModalReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
