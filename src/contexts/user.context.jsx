import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { onAuthStateChangedListener } from '../utils/firebase/firebase.utils';
import { createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';

// value you want to access
export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const value = { currentUser, setCurrentUser };
	const navigate = useNavigate();

	useEffect(() => {
		// Starts listening when this component has mount.
		const unsubscribe = onAuthStateChangedListener(async (user) => {
			try {
				if (user) {
					await createUserDocumentFromAuth(user);
				}
				setCurrentUser(user);
			} catch (err) {
				console.error(err.message);
			} finally {
				navigate('/');
			}
		});
		// Stops listening when this component unmounts (when we close the application).
		return unsubscribe;
	}, []);

	return (
		<UserContext.Provider value={value}>{children}</UserContext.Provider>
	);
};
