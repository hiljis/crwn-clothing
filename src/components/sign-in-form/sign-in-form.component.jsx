import { useState, useEffect } from 'react';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { getRedirectResult } from 'firebase/auth';
import {
	auth,
	signInAuthUserWithEmailAndPassword,
	signInWithGooglePopup,
	signInWithGoogleRedirect,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import {
	SignInContainer,
	ButtonsContainer,
	ButtonsAltContainer,
	Header,
} from './sign-in-form.styles.jsx';

const EMAIL_PASSWORD_MODE = 1;
const GOOGLE_POPUP_MODE = 2;
const GOOGLE_REDIRECT_MODE = 3;

const defaultFormFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const clearForm = () => {
		setFormFields({
			email: '',
			password: '',
		});
	};

	useEffect(() => {
		async function getGoogleRedirectResult() {
			try {
				const userCredentials = await getRedirectResult(auth);
				if (userCredentials) {
					await createUserDocumentFromAuth(userCredentials.user);
				}
			} catch (err) {
				console.error(err);
			}
		}
		getGoogleRedirectResult();
	}, []);

	const signInWith = async (signInMode) => {
		try {
			if (signInMode === EMAIL_PASSWORD_MODE) {
				await signInAuthUserWithEmailAndPassword(email, password);
			} else if (signInMode === GOOGLE_POPUP_MODE) {
				await signInWithGooglePopup();
			} else if (signInMode === GOOGLE_REDIRECT_MODE) {
				await signInWithGoogleRedirect();
			}
		} catch (err) {
			console.error(err.message);
		} finally {
			clearForm();
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		signInWith(EMAIL_PASSWORD_MODE);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<SignInContainer>
			<Header>Already have an account</Header>
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
				<ButtonsContainer>
					<Button buttonType={BUTTON_TYPE_CLASSES.base} type="submit">
						Sign in
					</Button>
					<ButtonsAltContainer>
						<Button
							type="button"
							buttonType={BUTTON_TYPE_CLASSES.google}
							onClick={() => signInWith(GOOGLE_POPUP_MODE)}
						>
							Sign In with Google
						</Button>
						<Button
							type="button"
							buttonType={BUTTON_TYPE_CLASSES.google}
							onClick={() => signInWith(GOOGLE_REDIRECT_MODE)}
						>
							Sign In with Google
						</Button>
					</ButtonsAltContainer>
				</ButtonsContainer>
			</form>
		</SignInContainer>
	);
};

export default SignInForm;
