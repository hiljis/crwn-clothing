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

export const myLoggerMiddleware = (store) => (next) => (action) => {
	if (!action.type) {
		return next(action);
	}

	console.group('TYPE: ', action.type);
	console.log('PAYLOAD: ', action.payload);
	console.log('CURRENT STATE: ', store.getState());

	// SYNCHRONOUS
	// Too see the updated state.
	// next passes the action to next middleware, which in turn passes to the reducers.
	next(action);

	// Then this is called :)
	console.log('NEXT STATE: ', store.getState());
	console.groupEnd();
};
