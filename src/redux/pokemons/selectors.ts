import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "src/redux/store";

export const selectPokemonsState = (state: RootState) => state.pokemons;

export const selectIsLoading = createSelector(
  selectPokemonsState,
  (pokemonsState) => pokemonsState.isLoading
);

export const selectPokemons = createSelector(
  selectPokemonsState,
  (pokemonsState) => pokemonsState.data
);

export const selectWorkById = createSelector(
  selectPokemonsState,
  (pokemonsState) => pokemonsState.pokemonById
);
