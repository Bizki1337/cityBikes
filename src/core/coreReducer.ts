import { combineReducers } from "redux";

import citiesReducer from "library/common/reducers/citiesReducer";
import pickedNetworkReducer from "library/common/reducers/pickedNetworkReducer";

const rootReducer = combineReducers({
  cities: citiesReducer,
  pickedNetwork: pickedNetworkReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;


