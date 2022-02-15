import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchCitiesFailure, fetchCitiesSuccess } from 'library/common/actions/citiesActions';
import { FETCH_CITIES_REQUEST } from 'library/common/actionTypes/citiesActionTypes';

const getCities = () =>
	axios.get<string>('https://api.citybik.es/v2/networks?fields=id,company');

function* fetchCitiesSaga(): any {
	try {
		const response = yield call(getCities);
		yield put(
			fetchCitiesSuccess({
				cities: response.data.networks,
			})
		);
	} catch (e: any) {
		yield put(
			fetchCitiesFailure({
				error: e.message,
			})
		);
	};
};

function* CitiesSaga() {
	yield all([takeLatest(FETCH_CITIES_REQUEST, fetchCitiesSaga)]);
}

export default CitiesSaga;