// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithPopup,
	signInWithRedirect,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = async () => {
	try {
		const userCredentials = await signInWithPopup(auth, googleProvider);
		return userCredentials;
	} catch (err) {
		throw err;
	}
};
export const signInWithGoogleRedirect = async () => {
	try {
		const userCredentials = await signInWithRedirect(auth, googleProvider);
		return userCredentials;
	} catch (err) {
		throw err;
	}
};

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	if (!userAuth) return;
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

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	try {
		const userCredentials = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		return userCredentials;
	} catch (err) {
		throw err;
	}
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	try {
		const userCredentials = await signInWithEmailAndPassword(
			auth,
			email,
			password
		);
		return userCredentials;
	} catch (err) {
		throw err;
	}
};

export const signOutUser = async () => {
	try {
		await signOut(auth);
	} catch (err) {
		throw err;
	}
};

export const onAuthStateChangedListener = (callback) => {
	return onAuthStateChanged(auth, callback);
};
