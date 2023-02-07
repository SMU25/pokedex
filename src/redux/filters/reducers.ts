import { PayloadAction } from "@reduxjs/toolkit";
import { NamedAPIResourceList } from "pokenode-ts";
import { setLimit, setType, getTypesAsync } from "./actions";

export const getTypesReducer = (builder) => {
  builder.addCase(setLimit, (state, action) => {
    state.limit = action.payload;
  });

  builder.addCase(setType, (state, action) => {
    state.type = action.payload;
  });

  builder.addCase(
    getTypesAsync.fulfilled,
    (state, action: PayloadAction<NamedAPIResourceList>) => {
      state.types = action.payload;
    }
  );
};
