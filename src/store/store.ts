import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import randomDishReducer from "store/reducers/RandomDishSlice";
import favouritesReducer from "store/reducers/FavouritesSlice";
import UIModalReducer from "store/reducers/UIModalSlice";

const rootReducer = combineReducers({
  randomDish: randomDishReducer,
  favourites: favouritesReducer,
  UIModal: UIModalReducer,
});

const persistConfig = {
  key: "appState",
  version: 1,
  storage,
  whitelist: ['favourites']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const setupStore = () => store;

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
