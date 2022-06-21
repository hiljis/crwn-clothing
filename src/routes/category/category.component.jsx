import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';

import { Title, ProductsGrid, CategoryContainer } from './category.styles.jsx';

const Category = () => {
	const { category } = useParams();
	const { categoriesMap } = useContext(CategoriesContext);
	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<CategoryContainer>
			<Title>{category.toUpperCase()}</Title>
			<ProductsGrid>
				{products &&
					products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</ProductsGrid>
		</CategoryContainer>
	);
};

export default Category;
