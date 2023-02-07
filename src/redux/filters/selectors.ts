import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "src/redux/store";

export const selectFiltersState = (state: RootState) => state.filters;

export const selectLimit = createSelector(
  selectFiltersState,
  (filtersState) => filtersState.limit
);

export const selectOffset = createSelector(
  selectFiltersState,
  (filtersState) => filtersState.offset
);

export const selectCurrentPage = createSelector(
  selectFiltersState,
  (filtersState) => filtersState.currentPage
);

export const selectType = createSelector(
  selectFiltersState,
  (filtersState) => filtersState.type
);

export const selectTypes = createSelector(
  selectFiltersState,
  (filtersState) => filtersState.types
);

export const selectSearchValue = createSelector(
  selectFiltersState,
  (filtersState) => filtersState.searchValue
);
