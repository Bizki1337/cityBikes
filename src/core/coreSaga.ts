import { all, fork } from "redux-saga/effects";

import citiesSaga from "library/common/sagas/citiesSagas";
import pickedNetworkSaga from "library/common/sagas/pickedNetworkSagas";

export default function* rootSaga() {
  yield all([
    fork(citiesSaga),
    fork(pickedNetworkSaga),
  ]);
}