import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<div className="cart-item__container">
			<img className="cart-item__img" src={imageUrl} alt={`${name}`} />
			<div className="cart-item__details">
				<span className="cart-item__name">{name}</span>
				<span className="cart-price-quantity">
					{quantity} x ${price}
				</span>
			</div>
		</div>
	);
};

export default CartItem;
