import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';

import './category-preview.styles.scss';

const CategoryPreview = ({ title, products }) => {
	return (
		<div className="category-preview">
			<h2>
				<Link className="category-preview__title" to={title}>
					{title.toUpperCase()}
				</Link>
			</h2>
			<div className="category-preview__card">
				{products
					.filter((_, i) => i < 4)
					.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</div>
		</div>
	);
};

export default CategoryPreview;
