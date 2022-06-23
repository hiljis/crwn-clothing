import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories;

// Memoized selector
export const selectCategories = createSelector(
	[selectCategoryReducer],
	(categoriesSlice) => {
		return categoriesSlice.categories;
	}
);

// Memoized selector
export const selectCategoriesMap = createSelector(
	[selectCategories],
	(categories) => {
		return categories.reduce((acc, category) => {
			const { title, items } = category;
			acc[title.toLowerCase()] = items;
			return acc;
		}, {});
	}
);

export const selectCategoriesIsLoading = createSelector(
	[selectCategoryReducer],
	(categoriesSlice) => {
		return categoriesSlice.isLoading;
	}
);
