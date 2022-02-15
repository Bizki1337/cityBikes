import {
	FETCH_PICKEDNETWORK_REQUEST,
	FETCH_PICKEDNETWORK_FAILURE,
	FETCH_PICKEDNETWORK_SUCCESS,
} from 'library/common/actionTypes/pickedNetworkTypes';
import {
	FetchPickedNetworkRequest,
	FetchPickedNetworkSuccess,
	FetchPickedNetworkFailure,
	FetchPickedNetworkFailurePayload,
} from 'library/common/types/pickedNetworkTypes';
  
export const fetchPickedNetworRequest = (id: string): FetchPickedNetworkRequest => ({
	type: FETCH_PICKEDNETWORK_REQUEST,
	id,
});

export const fetchPickedNetworkSuccess = (
	payload: any
): FetchPickedNetworkSuccess => ({
	type: FETCH_PICKEDNETWORK_SUCCESS,
	payload,
});

export const fetchPickedNetworkFailure = (
	payload: FetchPickedNetworkFailurePayload
): FetchPickedNetworkFailure => ({
	type: FETCH_PICKEDNETWORK_FAILURE,
	payload,
});