import { useSelector } from 'react-redux';
import {
	selectCartTotal,
	selectCartItems,
} from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
	CheckoutContainer,
	Headers,
	HeaderContainer,
	Header,
	TotalPrice,
} from './checkout.styles.jsx';

const Checkout = () => {
	const cartTotal = useSelector(selectCartTotal);
	const cartItems = useSelector(selectCartItems);

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
