import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';

import Button from '../button/button.component';

import { selectCartItems } from '../../store/cart/cart.selector';

import {
	CartDropDownContainer,
	CartItems,
	EmptyMessage,
} from './cart-dropdown.styles.jsx';

import './cart-dropdown.styles.jsx';

const CartDropdown = () => {
	const cartItems = useSelector(selectCartItems);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate('/checkout');
	};

	return (
		<CartDropDownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} cartItem={cartItem} />
					))
				) : (
					<EmptyMessage>(Your cart is empty)</EmptyMessage>
				)}
				;
			</CartItems>
			<Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
		</CartDropDownContainer>
	);
};

export default CartDropdown;
