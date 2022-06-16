import Button from '../button/button.component';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
	const { id, name, imageUrl, price } = product;

	return (
		<div className="product-card" key={id}>
			<img src={imageUrl} alt={`Product ${name}`} />
			<div className="product-card__footer">
				<span className="product-card__name">{name}</span>
				<span className="product-card__price">{price}</span>
			</div>
			<Button buttonType="inverted">Add to cart</Button>
		</div>
	);
};

export default ProductCard;
