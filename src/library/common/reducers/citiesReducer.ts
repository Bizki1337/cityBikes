import {
	FETCH_CITIES_REQUEST,
	FETCH_CITIES_SUCCESS,
	FETCH_CITIES_FAILURE,
} from 'library/common/actionTypes/citiesActionTypes';
  
const initialState: any = {
	pending: false,
	cities: [],
	error: null,
};
  
const citiesReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case FETCH_CITIES_REQUEST:
			return {
				...state,
				pending: true,
			};
		case FETCH_CITIES_SUCCESS:
			return {
				...state,
				pending: false,
				cities: action.payload.cities,
				error: null,
			};
		case FETCH_CITIES_FAILURE:
			return {
				...state,
				pending: false,
				cities: [],
				error: action.payload.error,
			};
		default:
			return {
				...state,
			};
	};
};

export default citiesReducer;