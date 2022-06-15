import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
	const logGoogleUser = async () => {
		try {
			const { user } = await signInWithGooglePopup();
			const userDocRef = await createUserDocumentFromAuth(user);
		} catch (error) {
			// Handle Errors here.
			// const errorCode = error.code;
			// const errorMessage = error.message;
			// The email of the user's account used.
			// const email = error.customData.email;
			// The AuthCredential type that was used.
			// const credential = provider.credentialFromError(error);
			console.error(error);
		}
	};

	return (
		<div>
			<h1>Sign In Page</h1>
			<button onClick={logGoogleUser}>Sign in with Google Popup</button>
		</div>
	);
};

export default SignIn;
