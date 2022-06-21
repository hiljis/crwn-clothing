import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
	CheckoutContainer,
	Headers,
	HeaderContainer,
	Header,
	TotalPrice,
} from './checkout.styles.jsx';

const Checkout = () => {
	const { cartTotal, cartItems } = useContext(CartContext);

	return (
		<CheckoutContainer>
			<Headers>
				<HeaderContainer>
					<Header>Product</Header>
				</HeaderContainer>
				<HeaderContainer>
					<Header>Description</Header>
				</HeaderContainer>
				<HeaderContainer>
					<Header>Quantity</Header>
				</HeaderContainer>
				<HeaderContainer>
					<Header>Price</Header>
				</HeaderContainer>
				<HeaderContainer>
					<Header>Remove</Header>
				</HeaderContainer>
			</Headers>
			{cartItems.map((cartItem) => {
				return (
					<CheckoutItem
						key={cartItem.id}
						cartItem={cartItem}
					></CheckoutItem>
				);
			})}
			<TotalPrice>Total: ${cartTotal}</TotalPrice>
		</CheckoutContainer>
	);
};

export default Checkout;
