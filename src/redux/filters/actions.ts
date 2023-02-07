import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "src/services/api-client";

export const FILTERS_SLICE_NAME = "filters";

export const setLimit = createAction<number>(`${FILTERS_SLICE_NAME}/setLimit`);

export const setType = createAction<string>(`${FILTERS_SLICE_NAME}/setType`);

export const getTypesAsync = createAsyncThunk(
  `${FILTERS_SLICE_NAME}/fetchTypes`,
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.listTypes();

      return data.results;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
