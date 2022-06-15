// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithPopup,
	signInWithRedirect,
	GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAu1VIOsjtKtslDu8iXjJu232PAKcLvjeU',
	authDomain: 'crwn-clothing-db-c710b.firebaseapp.com',
	projectId: 'crwn-clothing-db-c710b',
	storageBucket: 'crwn-clothing-db-c710b.appspot.com',
	messagingSenderId: '111985305784',
	appId: '1:111985305784:web:ba3186da3e92617b9fac4d',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account',
});
export { provider };

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	try {
		const userDocRef = doc(db, 'users', userAuth.uid);
		const userSnapShot = await getDoc(userDocRef);

		if (!userSnapShot.exists()) {
			const { displayName, email } = userAuth;
			const createdAt = new Date().toISOString();

			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			});
		}

		return userDocRef;
	} catch (error) {
		throw error;
	}
};
