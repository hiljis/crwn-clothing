import { createContext, useReducer } from 'react';

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

const clearCartItem = (cartItems, cartItemToClear) => {
	return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
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

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	clearItemFromCart: () => {},
	cartCount: 0,
	cartTotal: 0,
});

export const CART_ACTION_TYPES = {
	SET_CART_ITEMS: 'SET_CART_ITEMS',
	SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
};

const INITIAL_STATE = {
	isCartOpen: false,
	cartItems: [],
	cartCount: 0,
	cartTotal: 0,
};

const cartReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case CART_ACTION_TYPES.SET_CART_ITEMS:
			return {
				...state,
				...payload,
			};
		case CART_ACTION_TYPES.SET_IS_CART_OPEN:
			return {
				...state,
				isCartOpen: payload,
			};
		default:
			throw new Error(`Unhandled type ${type} in cartReducer`);
	}
};

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
	const { isCartOpen, cartItems, cartCount, cartTotal } = state;

	const updateCartItemsReducer = (newCartItems) => {
		const newCartCount = newCartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0
		);

		const newCartTotal = newCartItems.reduce(
			(total, cartItem) => total + cartItem.quantity * cartItem.price,
			0
		);

		dispatch({
			type: CART_ACTION_TYPES.SET_CART_ITEMS,
			payload: {
				cartItems: newCartItems,
				cartCount: newCartCount,
				cartTotal: newCartTotal,
			},
		});
	};

	const addItemToCart = (cartItemToAdd) => {
		const newCartItems = addCartItem(cartItems, cartItemToAdd);
		updateCartItemsReducer(newCartItems);
	};

	const removeItemFromCart = (cartItemToRemove) => {
		const newCartItems = removeCartItem(cartItems, cartItemToRemove);
		updateCartItemsReducer(newCartItems);
	};

	const clearItemFromCart = (cartItemToClear) => {
		const newCartItems = clearCartItem(cartItems, cartItemToClear);
		updateCartItemsReducer(newCartItems);
	};

	const setIsCartOpen = (isOpen) => {
		dispatch({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: isOpen });
	};

	const value = {
		isCartOpen,
		setIsCartOpen,
		cartItems,
		addItemToCart,
		removeItemFromCart,
		clearItemFromCart,
		cartCount,
		cartTotal,
	};

	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};
