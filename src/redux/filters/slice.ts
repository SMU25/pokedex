import { createSlice } from "@reduxjs/toolkit";
import { NamedAPIResourceList } from "pokenode-ts";
import { FILTERS_SLICE_NAME } from "./actions";
import { getTypesReducer } from "./reducers";

interface FiltersState {
  limit: number;
  offset: number;
  currentPage: number;
  type: string;
  types: NamedAPIResourceList["results"];
  searchValue: string;
}

const initialState: FiltersState = {
  limit: 10,
  offset: 0,
  currentPage: 1,
  type: null,
  types: [],
  searchValue: "",
};

export const { reducer: filters } = createSlice({
  name: FILTERS_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    getTypesReducer(builder);
  },
});
