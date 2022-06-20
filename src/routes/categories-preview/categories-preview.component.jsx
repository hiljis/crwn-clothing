import { Fragment, useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
	const { categoriesMap } = useContext(CategoriesContext);

	return (
		<Fragment>
			{categoriesMap &&
				Object.keys(categoriesMap).map((title) => {
					const categoryProducts = categoriesMap[title];
					return (
						<CategoryPreview
							key={title}
							title={title}
							products={categoryProducts}
						/>
					);
				})}
		</Fragment>
	);
};

export default CategoriesPreview;
