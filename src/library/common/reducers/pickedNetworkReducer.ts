import {
	FETCH_PICKEDNETWORK_REQUEST,
	FETCH_PICKEDNETWORK_SUCCESS,
	FETCH_PICKEDNETWORK_FAILURE,
} from 'library/common/actionTypes/pickedNetworkTypes';
  
const initialState: any = {
	pending: false,
	network: [],
	error: null,
};
  
const pickedNetworkReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case FETCH_PICKEDNETWORK_REQUEST:
			return {
				...state,
				pending: true,
			};
		case FETCH_PICKEDNETWORK_SUCCESS:
			return {
				...state,
				pending: false,
				network: [...state.network, action.payload.network],
				error: null,
			};
		case FETCH_PICKEDNETWORK_FAILURE:
			return {
				...state,
				pending: false,
				network: [],
				error: action.payload.error,
			};
		default:
			return {
				...state,
			};
	};
};
export default pickedNetworkReducer;