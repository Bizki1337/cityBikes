import {
    FETCH_PICKEDNETWORK_REQUEST,
    FETCH_PICKEDNETWORK_SUCCESS,
    FETCH_PICKEDNETWORK_FAILURE,
  } from "library/common/actionTypes/pickedNetworkTypes";
  
  export interface PickedNetworkState {
    pending: boolean;
    error: string | null;
  }
  
  export interface FetchPickedNetworkSuccessPayload {
  }
  
  export interface FetchPickedNetworkFailurePayload {
    error: string;
  }
  
  export interface FetchPickedNetworkRequest {
    type: typeof FETCH_PICKEDNETWORK_REQUEST;
    id: string;
  }
  
  export type FetchPickedNetworkSuccess = {
    type: typeof FETCH_PICKEDNETWORK_SUCCESS;
    payload: FetchPickedNetworkSuccessPayload;
  };
  
  export type FetchPickedNetworkFailure = {
    type: typeof FETCH_PICKEDNETWORK_FAILURE;
    payload: FetchPickedNetworkFailurePayload;
  };
  
  export type TodoActions =
    | FetchPickedNetworkRequest
    | FetchPickedNetworkSuccess
    | FetchPickedNetworkFailure;