import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { pokemons } from "./pokemons/slice";
import { filters } from "./filters/slice";

export const store = configureStore({
  reducer: combineReducers({
    pokemons,
    filters,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
