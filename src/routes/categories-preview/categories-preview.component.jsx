import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { selectCategoriesMap } from '../../store/categories/categories.selector';

const CategoriesPreview = () => {
	const categoriesMap = useSelector(selectCategoriesMap);

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
