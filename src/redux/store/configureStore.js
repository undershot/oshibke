import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";

import {ping} from "../enhancers/ping";


export default function configureStore( initialState ){

	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	const store = createStore(
		rootReducer,
		initialState,
		composeEnhancers(
			applyMiddleware(thunk, ping)
		)
		// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
	return store;
}