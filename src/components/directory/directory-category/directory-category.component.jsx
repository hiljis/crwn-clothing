import {
	DirectoryCategoryContainer,
	BackgroundImage,
	Content,
} from './directory-category.styles.jsx';

const DirectoryCategory = ({ category }) => {
	const { title, imageUrl, route } = category;
	return (
		<DirectoryCategoryContainer to={route}>
			<BackgroundImage imageUrl={imageUrl}></BackgroundImage>
			<Content>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</Content>
		</DirectoryCategoryContainer>
	);
};

export default DirectoryCategory;
