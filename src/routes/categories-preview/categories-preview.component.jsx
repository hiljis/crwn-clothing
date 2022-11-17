import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import {
	selectCategoriesMap,
	selectCategoriesIsLoading,
} from '../../store/categories/categories.selector';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from '../../components/spinner/spinner.component';

const CategoriesPreview = () => {
	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategoriesIsLoading);

	return (
		<Fragment>
			{isLoading ? (
				<Spinner />
			) : (
				Object.keys(categoriesMap).map((title) => {
					const categoryProducts = categoriesMap[title];
					return (
						<CategoryPreview
							key={title}
							title={title}
							products={categoryProducts}
						/>
					);
				})
			)}
		</Fragment>
	);
};

export default CategoriesPreview;
