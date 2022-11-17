import { useSelector, useDispatch } from 'react-redux';

import {
	selectCartCount,
	selectIsCartOpen,
} from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import {
	CartIconContainer,
	ShoppingIcon,
	ItemCount,
} from './cart-icon.styles.jsx';

const CartIcon = () => {
	const cartCount = useSelector(selectCartCount);
	const isCartOpen = useSelector(selectIsCartOpen);
	const dispatch = useDispatch();

	return (
		<CartIconContainer onClick={() => dispatch(setIsCartOpen(!isCartOpen))}>
			<ShoppingIcon />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
