import {
	FETCH_CITIES_REQUEST,
	FETCH_CITIES_SUCCESS,
	FETCH_CITIES_FAILURE,
} from 'library/common/actionTypes/citiesActionTypes';

interface ICities {
	company: string | [];
	id: string
}
  
export interface CitiesState {
	pending: boolean;
	cities: ICities;
	error: string | null;
}

export interface FetchCitiesSuccessPayload {
	cities: [];
}

export interface FetchCitiesFailurePayload {
	error: string;
}

export interface FetchCitiesRequest {
	type: typeof FETCH_CITIES_REQUEST;
}

export type FetchCitiesSuccess = {
	type: typeof FETCH_CITIES_SUCCESS;
	payload: FetchCitiesSuccessPayload;
};

export type FetchCitiesFailure = {
	type: typeof FETCH_CITIES_FAILURE;
	payload: FetchCitiesFailurePayload;
};

export type CitiesActions =
	| FetchCitiesRequest
	| FetchCitiesSuccess
	| FetchCitiesFailure;