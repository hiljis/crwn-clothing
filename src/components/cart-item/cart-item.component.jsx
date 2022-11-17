import {
	CartItemContainer,
	CartItemImage,
	CartItemDetails,
	CartItemName,
	CartItemPriceQuantity,
} from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<CartItemContainer>
			<CartItemImage src={imageUrl} alt={`${name}`} />
			<CartItemDetails>
				<CartItemName>{name}</CartItemName>
				<CartItemPriceQuantity>
					{quantity} x ${price}
				</CartItemPriceQuantity>
			</CartItemDetails>
		</CartItemContainer>
	);
};

export default CartItem;
