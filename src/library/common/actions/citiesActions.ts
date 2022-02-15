import {
	FETCH_CITIES_REQUEST,
	FETCH_CITIES_FAILURE,
	FETCH_CITIES_SUCCESS,
} from 'library/common/actionTypes/citiesActionTypes';

import {
	FetchCitiesRequest,
	FetchCitiesSuccess,
	FetchCitiesFailure,
	FetchCitiesFailurePayload,
} from 'library/common/types/citiesTypes';

export const fetchCitiesRequest = (): FetchCitiesRequest => ({
	type: FETCH_CITIES_REQUEST,
});

export const fetchCitiesSuccess = (
	payload: any
): FetchCitiesSuccess => ({
	type: FETCH_CITIES_SUCCESS,
	payload,
});
  
export const fetchCitiesFailure = (
	payload: FetchCitiesFailurePayload
): FetchCitiesFailure => ({
	type: FETCH_CITIES_FAILURE,
	payload,
});