import { createSelector } from "reselect";

import { AppState } from "core/coreReducer";

const getPending = (state: AppState) => state.cities.pending;

const getCities = (state: AppState) => state.cities.cities;

const getError = (state: AppState) => state.cities.error;

export const getCitiesSelector = createSelector(getCities, (cities) => cities);

export const getCitiesPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getCitiesErrorSelector = createSelector(getError, (error) => error);