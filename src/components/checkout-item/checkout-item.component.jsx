import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
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

	const { addItemToCart, removeItemFromCart, clearItemFromCart } =
		useContext(CartContext);

	const addItemHandler = () => addItemToCart(cartItem);
	const removeItemHandler = () => removeItemFromCart(cartItem);
	const clearItemHandler = () => clearItemFromCart(cartItem);

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
