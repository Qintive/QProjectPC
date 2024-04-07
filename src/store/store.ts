import { reducer as favoritesReducer } from "./favorites/favorites.slice";
import { paperReducer } from "./paper/paper.slice";
import { productApi } from "./product/product.api";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const reducers = combineReducers({
  favorites: favoritesReducer,
  [productApi.reducerPath]: productApi.reducer,
  paper: paperReducer,

});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
