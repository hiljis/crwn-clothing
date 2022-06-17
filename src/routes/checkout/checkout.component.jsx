import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const Checkout = () => {
	const { cartTotal, cartItems } = useContext(CartContext);

	return (
		<div className="checkout__container">
			<div className="checkout__headers">
				<div className="checkout__header">
					<span>Product</span>
				</div>
				<div className="checkout__header">
					<span>Description</span>
				</div>
				<div className="checkout__header">
					<span>Quantity</span>
				</div>
				<div className="checkout__header">
					<span>Price</span>
				</div>
				<div className="checkout__header">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((cartItem) => {
				return (
					<CheckoutItem
						key={cartItem.id}
						cartItem={cartItem}
					></CheckoutItem>
				);
			})}
			<span className="checkout__total">Total: ${cartTotal}</span>
		</div>
	);
};

export default Checkout;
