import { useState } from 'react';

import './sign-up-form.styles.scss';
import FormInput from '../form-input/form-input.component';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';

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
			if (password !== passwordConfirm) {
				throw new Error('Passwords do not match!');
			}

			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);
			user.displayName = displayName;
			const userDocRef = await createUserDocumentFromAuth(user);
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
		<div className="sign-up-container">
			<h2>Don't have an account</h2>
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

				<Button buttonType="default" type="submit">
					Sign Up
				</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
