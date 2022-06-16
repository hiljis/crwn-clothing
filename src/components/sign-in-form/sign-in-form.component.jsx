import { useState } from 'react';

import './sign-in-form.styles.scss';
import FormInput from '../form-input/form-input.component';
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';

import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
	auth,
	signInAuthUserWithEmailAndPassword,
	signInWithGooglePopup,
	signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	useEffect(() => {
		async function getGoogleRedirectResult() {
			try {
				const response = await getRedirectResult(auth);
				if (response) {
					await createUserDocumentFromAuth(response.user);
				}
			} catch (err) {
				console.error(err);
			}
		}
		getGoogleRedirectResult();
	}, []);

	const clearForm = () => {
		setFormFields({
			email: '',
			password: '',
		});
	};

	const signInGooglePopup = async () => {
		try {
			const { user } = await signInWithGooglePopup();
			await createUserDocumentFromAuth(user);
		} catch (err) {
			console.error(err.message);
		}
	};

	const signInGoogleRedirect = async () => {
		try {
			const { user } = await signInWithGoogleRedirect();
			await createUserDocumentFromAuth(user);
			console.log(user);
		} catch (err) {
			console.error(err.message);
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const { user } = await signInAuthUserWithEmailAndPassword(
				email,
				password
			);
			console.log(user);
			// await createUserDocumentFromAuth(user);
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
		<div className="sign-in-container">
			<h2>Already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Email"
					inputOptions={{
						id: 'signin-email',
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
						id: 'signin-password',
						name: 'password',
						type: 'password',
						value: password,
						required: true,
						onChange: handleChange,
					}}
				/>
				<div className="buttons-container">
					<Button buttonType="default" type="submit">
						Sign in
					</Button>
					<div className="buttons-alt-container">
						<Button
							type="button"
							buttonType="google"
							onClick={signInGooglePopup}
						>
							Sign In with Google
						</Button>
						<Button
							type="button"
							buttonType="google"
							onClick={signInGoogleRedirect}
						>
							Sign In with Google
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
