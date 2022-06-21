import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { Header, SignUpContainer } from './sign-up-form.styles.jsx';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	passwordConfirm: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, passwordConfirm } = formFields;

	const clearForm = () => {
		setFormFields({
			displayName: '',
			email: '',
			password: '',
			passwordConfirm: '',
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			if (password !== passwordConfirm)
				throw new Error('Passwords do not match!');

			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);
			user.displayName = displayName;
			await createUserDocumentFromAuth(user);
		} catch (err) {
			console.error(err.message);
		} finally {
			clearForm();
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<SignUpContainer>
			<Header>Don't have an account</Header>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					inputOptions={{
						id: 'signup-displayName',
						name: 'displayName',
						type: 'text',
						value: displayName,
						required: true,
						onChange: handleChange,
					}}
				/>

				<FormInput
					label="Email"
					inputOptions={{
						id: 'signup-email',
						name: 'email',
						type: 'email',
						value: email,
						required: true,
						onChange: handleChange,
					}}
				/>

				<FormInput
					label="Password"
					inputOptions={{
						id: 'signup-password',
						name: 'password',
						type: 'password',
						value: password,
						required: true,
						onChange: handleChange,
					}}
				/>

				<FormInput
					label="Confirm Password"
					inputOptions={{
						id: 'signup-password-confirm',
						name: 'passwordConfirm',
						type: 'password',
						value: passwordConfirm,
						required: true,
						onChange: handleChange,
					}}
				/>

				<Button buttonType={BUTTON_TYPE_CLASSES.base} type="submit">
					Sign Up
				</Button>
			</form>
		</SignUpContainer>
	);
};

export default SignUpForm;
