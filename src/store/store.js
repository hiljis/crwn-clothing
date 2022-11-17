import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { myLoggerMiddleware } from './middleware/logger';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';

import { rootSaga } from './root-saga';

import { rootReducer } from './root-reducer';

const persistConfig = {
	key: 'root',
	storage: storage,
	whitelist: ['cart'],
	blacklist: ['user', 'categories'],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const devMiddlewares = [process.env.NODE_ENV !== 'production' && logger].filter(
	Boolean
);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: [...devMiddlewares, sagaMiddleware],
	devTools:
		(process.env.NODE_ENV !== 'production' && window) ||
		{
			/*INSERT DEV TOOLS*/
		},
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
