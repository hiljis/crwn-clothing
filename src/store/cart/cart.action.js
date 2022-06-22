import { CART_ACTION_TYPES } from './cart.types';

export const setCartItems = (cartItems) => {
	return {
		type: CART_ACTION_TYPES.SET_CART_ITEMS,
		payload: cartItems,
	};
};

export const setIsCartOpen = (isOpen) => {
	return {
		type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
		payload: isOpen,
	};
};

////////////////////////////////////////////////////////////////////////////////////

const addCartItem = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: ++cartItem.quantity }
				: cartItem
		);
	}
	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	);

	if (!existingCartItem) return cartItems;

	if (existingCartItem.quantity === 1) {
		return clearCartItem(cartItems, cartItemToRemove);
	}

	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: --cartItem.quantity }
			: cartItem
	);
};

const clearCartItem = (cartItems, cartItemToClear) => {
	return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

////////////////////////////////////////////////////////////////////////////////////

export const addItemToCart = (cartItems, cartItemToAdd) => {
	const newCartItems = addCartItem(cartItems, cartItemToAdd);
	return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const newCartItems = removeCartItem(cartItems, cartItemToRemove);
	return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
	const newCartItems = clearCartItem(cartItems, cartItemToClear);
	return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};
