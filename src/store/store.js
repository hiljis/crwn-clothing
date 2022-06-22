import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './root-reducer';

/*
// const middleWares = [logger];

// const curryFunc = (a) => (b, c) => {
// 	return a + b - c;
// };

// const with10 = curryFunc(10);
// const with3 = curryFunc(3);

// with10(2, 4); //10 + 2 - 4
// with3(2, 4); //3 + 2 - 4
*/

const myLoggerMiddleware = (store) => (next) => (action) => {
	if (!action.type) {
		return next(action);
	}

	console.log('TYPE: ', action.type);
	console.log('PAYLOAD: ', action.payload);
	console.log('CURRENT STATE: ', store.getState());

	// SYNCHRONOUS
	// Too see the updated state.
	// next passes the action to next middleware, which in turn passes to the reducers.
	next(action);

	// Then this is called :)
	console.log('NEXT STATE: ', store.getState());
};

export const store = configureStore({
	reducer: rootReducer,
	middleware: [myLoggerMiddleware],
});
