import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../../routes/categories-preview/categories-preview.component';
import Category from '../../routes/category/category.component';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategoriesMap } from '../../store/categories/categories.action';

const Shop = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoriesMap = await getCategoriesAndDocuments();
			dispatch(setCategoriesMap(categoriesMap));
		};
		getCategoriesMap();
	});

	return (
		<Routes>
			<Route index={true} element={<CategoriesPreview />} />
			<Route path=":category" element={<Category />} />
		</Routes>
	);
};

export default Shop;
