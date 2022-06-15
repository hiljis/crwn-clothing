import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
	google: 'google-sign-in',
	inverted: 'inverted',
	default: '',
};

const Button = ({ text, buttonType, ...otherProps }) => {
	return (
		<button
			className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
			{...otherProps}
		>
			{text}
		</button>
	);
};

export default Button;
