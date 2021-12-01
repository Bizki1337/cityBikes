import {
    FETCH_CITIES_REQUEST,
    FETCH_CITIES_SUCCESS,
    FETCH_CITIES_FAILURE,
  } from "library/common/actionTypes/citiesActionTypes";
  
  export interface CitiesState {
    pending: boolean;
    cities: any;
    error: string | null;
  }
  
  export interface FetchCitiesSuccessPayload {
    cities: any[];
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