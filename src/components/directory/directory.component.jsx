import DirectoryCategory from './directory-category/directory-category.component';

import './directory.styles.scss';

const Directory = ({ categories }) => {
	return (
		<div className="directory-container">
			{categories.map((category) => {
				return (
					<DirectoryCategory key={category.id} category={category} />
				);
			})}
		</div>
	);
};

export default Directory;
