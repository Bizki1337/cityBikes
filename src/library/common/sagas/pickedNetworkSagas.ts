import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchPickedNetworkFailure, fetchPickedNetworkSuccess } from "library/common/actions/pickedNetworkActions";
import { FETCH_PICKEDNETWORK_REQUEST } from "library/common/actionTypes/pickedNetworkTypes";

function* fetchPickedNetworkSaga({id}: any ): any {
  try {
      const getPickedNetwork = () =>
        axios.get<any>(`https://api.citybik.es/v2/networks/${id}`);
      const response = yield call(getPickedNetwork);
      yield put(
      	fetchPickedNetworkSuccess({
    		  network: response.data.network,
      	})
    );
  } catch (e: any) {
    yield put(
    	fetchPickedNetworkFailure({
    		error: e.message,
      	})
    );
  }
}

function* pickedNetworkSaga() {
  yield all([takeLatest(FETCH_PICKEDNETWORK_REQUEST, fetchPickedNetworkSaga)]);
}

export default pickedNetworkSaga;