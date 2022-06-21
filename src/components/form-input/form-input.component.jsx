import { FormGroup, Input, FormInputLabel } from './form-input.styles.jsx';

const FormInput = ({ label, inputOptions }) => {
	return (
		<FormGroup>
			<Input {...inputOptions} />
			{label && (
				<FormInputLabel shrink={inputOptions.value.length}>
					{label}
				</FormInputLabel>
			)}
		</FormGroup>
	);
};

export default FormInput;
