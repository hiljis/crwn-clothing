import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { myLoggerMiddleware } from './middleware/logger';
// import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const persistConfig = {
	key: 'root',
	storage: storage,
	blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [
	process.env.NODE_ENV !== 'production' && myLoggerMiddleware,
].filter(Boolean);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: [...middlewares],
	devTools:
		(process.env.NODE_ENV !== 'production' && window) ||
		{
			/*INSERT DEV TOOLS*/
		},
});

export const persistor = persistStore(store);
