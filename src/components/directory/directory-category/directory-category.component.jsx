import { Link } from 'react-router-dom';
import './directory-category.styles.scss';

const DirectoryCategory = ({ category }) => {
	const { title, imageUrl } = category;
	return (
		<Link className="directory-category" to={`shop/${title}`}>
			<div
				className="directory-category__background-img"
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<div className="directory-category__content">
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</Link>
	);
};

export default DirectoryCategory;
