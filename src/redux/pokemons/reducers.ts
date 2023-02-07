import { PayloadAction } from "@reduxjs/toolkit";
import { NamedAPIResourceList, Type, Pokemon } from "pokenode-ts";
import {
  getPokemonsAsync,
  getPokemonsByTypeAsync,
  getPokemonByIdAsync,
} from "./actions";

export const getPokemonsReducer = (builder) => {
  builder.addCase(getPokemonsAsync.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(
    getPokemonsAsync.fulfilled,
    (state, action: PayloadAction<NamedAPIResourceList>) => {
      state.isLoading = false;
      state.data = action.payload;
    }
  );

  builder.addCase(getPokemonsAsync.rejected, (state) => {
    state.isLoading = false;
    state.data = null;
  });
};

export const getPokemonsByTypeReducer = (builder) => {
  builder.addCase(getPokemonsByTypeAsync.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(
    getPokemonsByTypeAsync.fulfilled,
    (state, action: PayloadAction<Type>) => {
      state.isLoading = false;
      state.data = action.payload;
    }
  );

  builder.addCase(getPokemonsByTypeAsync.rejected, (state) => {
    state.isLoading = false;
    state.data = null;
  });
};

export const getPokemonByIdReducer = (builder) => {
  builder.addCase(getPokemonByIdAsync.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(
    getPokemonByIdAsync.fulfilled,
    (state, action: PayloadAction<Pokemon>) => {
      state.isLoading = false;
      state.pokemonById = action.payload;
    }
  );

  builder.addCase(getPokemonByIdAsync.rejected, (state) => {
    state.isLoading = false;
    state.pokemonById = null;
  });
};
