import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './root-reducer';

const middleWares = [logger];

export const store = configureStore({
	reducer: rootReducer,
	middleware: middleWares,
});
