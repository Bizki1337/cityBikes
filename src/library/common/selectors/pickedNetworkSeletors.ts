import { createSelector } from 'reselect';

import { AppState } from 'core/coreReducer';

const getPickedNetworkPending = (state: AppState) => state.pickedNetwork.pending;

const getPickedNetwork = (state: AppState) => state.pickedNetwork.network;

const getPickedNetworkError = (state: AppState) => state.pickedNetwork.error;

export const getPickedNetworkSelector = createSelector(getPickedNetwork, (network) => network);

export const getPickedNetworkPendingSelector = createSelector(
	getPickedNetworkPending,
	(pending) => pending
);

export const getPickedNetworErrorSelector = createSelector(getPickedNetworkError, (error) => error);