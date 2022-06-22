import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector.js';
import {
	addItemToCart,
	removeItemFromCart,
	clearItemFromCart,
} from '../../store/cart/cart.action.js';
import {
	CheckoutItemContainer,
	CheckoutItemImageContainer,
	CheckoutItemImage,
	CheckoutItemName,
	CheckoutItemQuantityContainer,
	Arrow,
	CheckoutItemQuantity,
	CheckoutItemPrice,
	RemoveButton,
} from './checkout-item.styles.jsx';

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();

	const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
	const removeItemHandler = () =>
		dispatch(removeItemFromCart(cartItems, cartItem));
	const clearItemHandler = () =>
		dispatch(clearItemFromCart(cartItems, cartItem));

	return (
		<CheckoutItemContainer>
			<CheckoutItemImageContainer>
				<CheckoutItemImage src={imageUrl} alt={`${name}`} />
			</CheckoutItemImageContainer>
			<CheckoutItemName>{name}</CheckoutItemName>
			<CheckoutItemQuantityContainer>
				<Arrow onClick={removeItemHandler}>&#10094;</Arrow>
				<CheckoutItemQuantity>{quantity}</CheckoutItemQuantity>
				<Arrow onClick={addItemHandler}>&#10095;</Arrow>
			</CheckoutItemQuantityContainer>
			<CheckoutItemPrice>${price}</CheckoutItemPrice>
			<RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
