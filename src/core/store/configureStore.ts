import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from '../coreReducer';
import coreSaga from '../coreSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = composeWithDevTools(
	applyMiddleware(sagaMiddleware,),
);

export default function configureStore(initialState = {}) {
	const store = createStore(rootReducer, initialState, middlewares);
	sagaMiddleware.run(coreSaga);

	return store;
}