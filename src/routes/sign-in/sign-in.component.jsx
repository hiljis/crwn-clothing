import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
	auth,
	signInWithGooglePopup,
	signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils';

import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
	useEffect(() => {
		async function getGoogleRedirectResult() {
			try {
				const response = await getRedirectResult(auth);
				if (response) {
					const userDocRef = await createUserDocumentFromAuth(
						response.user
					);
				}
			} catch (err) {
				console.error(err);
			}
		}
		getGoogleRedirectResult();
	}, []);

	const logGooglePopupUser = async () => {
		try {
			const { user } = await signInWithGooglePopup();
			const userDocRef = await createUserDocumentFromAuth(user);
		} catch (error) {
			console.error(error);
		}
	};

	const logGoogleRedirectUser = async () => {
		try {
			const { user } = await signInWithGoogleRedirect();
			// const userDocRef = await createUserDocumentFromAuth(user);
			console.log(user);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<h1>Sign In Page</h1>
			<button onClick={logGooglePopupUser}>
				Sign in with Google Popup
			</button>
			<button onClick={logGoogleRedirectUser}>
				Sign in with Google Redirect
			</button>
			<SignUpForm />
		</div>
	);
};

export default SignIn;
