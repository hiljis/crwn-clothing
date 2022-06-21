import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProductCard from '../../components/product-card/product-card.component';

import { Title, ProductsGrid, CategoryContainer } from './category.styles.jsx';
import { selectCategoriesMap } from '../../store/categories/categories.selector';

const Category = () => {
	const { category } = useParams();
	const categoriesMap = useSelector(selectCategoriesMap);
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
