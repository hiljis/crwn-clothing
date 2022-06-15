import { Fragment } from 'react';

import './form-input.styles.scss';

const FormInput = ({ label, inputOptions }) => {
	return (
		<div className="form-group">
			<input className="form-input" {...inputOptions} />
			{label && (
				<label
					className={`
                ${inputOptions.value.length ? 'shrink' : ''} 
                form-input-label`}
					htmlFor={inputOptions.id}
				>
					{label}
				</label>
			)}
		</div>
	);
};

export default FormInput;
