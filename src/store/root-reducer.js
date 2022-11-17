import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './categories/categories.reducer';
import { cartReducer } from './cart/cart.reducer';

// This object is a new one whenever a reducer needs to update.
// Whenever a reducer needs to update, all reducers gets called.
export const rootReducer = combineReducers({
	user: userReducer,
	categories: categoriesReducer,
	cart: cartReducer,
});
