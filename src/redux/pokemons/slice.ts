import { createSlice } from "@reduxjs/toolkit";
import { NamedAPIResourceList, Pokemon, Type } from "pokenode-ts";
import { POKEMONS_SLICE_NAME } from "./actions";
import {
  getPokemonsReducer,
  getPokemonsByTypeReducer,
  getPokemonByIdReducer,
} from "./reducers";

interface PokemonsState {
  isLoading: boolean;
  data: NamedAPIResourceList | Type;
  pokemonById: Pokemon;
}

const initialState: PokemonsState = {
  isLoading: false,
  data: null,
  pokemonById: null,
};

export const { reducer: pokemons } = createSlice({
  name: POKEMONS_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    getPokemonsReducer(builder);
    getPokemonsByTypeReducer(builder);
    getPokemonByIdReducer(builder);
  },
});
