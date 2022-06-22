import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
	Image,
	ProductCardContainer,
	Name,
	Price,
	Footer,
} from './product-card.styles.jsx';

const ProductCard = ({ product }) => {
	const { id, name, imageUrl, price } = product;
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();

	const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

	return (
		<ProductCardContainer key={id}>
			<Image src={imageUrl} alt={`Product ${name}`} />
			<Footer>
				<Name>{name}</Name>
				<Price>{price}</Price>
			</Footer>
			<Button
				buttonType={BUTTON_TYPE_CLASSES.inverted}
				onClick={addProductToCart}
			>
				Add to cart
			</Button>
		</ProductCardContainer>
	);
};

export default ProductCard;
