import ProductCard from '../product-card/product-card.component';

import {
	CategoryPreviewContainer,
	CategoryTitle,
	CategoryCard,
} from './category-preview.styles.jsx';

const CategoryPreview = ({ title, products }) => {
	return (
		<CategoryPreviewContainer>
			<h2>
				<CategoryTitle to={title}>{title.toUpperCase()}</CategoryTitle>
			</h2>
			<CategoryCard>
				{products
					.filter((_, i) => i < 4)
					.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</CategoryCard>
		</CategoryPreviewContainer>
	);
};

export default CategoryPreview;
