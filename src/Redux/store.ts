import { applyMiddleware, createStore, compose } from "redux";
import allReducers from "./Reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const store = createStore(
	allReducers,
	{},
	compose(
		applyMiddleware(thunk, logger),
		(window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
			(window as any).__REDUX_DEVTOOLS_EXTENSION__()
	)
);
