import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "src/services/api-client";

export const POKEMONS_SLICE_NAME = "pokemons";

interface GetPokemonsAsyncParams {
  offset: number;
  limit: number;
}

export const getPokemonsAsync = createAsyncThunk(
  `${POKEMONS_SLICE_NAME}/fetchPokemons`,
  async ({ offset, limit }: GetPokemonsAsyncParams, { rejectWithValue }) => {
    try {
      const data = await api.listPokemons(offset, limit);

      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const getPokemonsByTypeAsync = createAsyncThunk(
  `${POKEMONS_SLICE_NAME}/fetchPokemonsByType`,
  async (type: string, { rejectWithValue }) => {
    try {
      const data = await api.getTypeByName(type);

      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const getPokemonByIdAsync = createAsyncThunk(
  `${POKEMONS_SLICE_NAME}/fetchPokemonById`,
  async (name: string, { rejectWithValue }) => {
    try {
      const data = await api.getPokemonByName(name);

      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

// (currentPage -1) * limit = offset
