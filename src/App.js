import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { onAuthStateChangedListener } from './utils/firebase/firebase.utils';
import { createUserDocumentFromAuth } from './utils/firebase/firebase.utils';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './components/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { setCurrentUser } from './store/user/user.action';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		// Starts listening when this component has mount.
		const unsubscribe = onAuthStateChangedListener(async (user) => {
			try {
				if (user) {
					await createUserDocumentFromAuth(user);
				}
				dispatch(setCurrentUser(user));
			} catch (err) {
				console.error(err.message);
			}
		});
		// Stops listening when this component unmounts (when we close the application).
		return unsubscribe;
	});

	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index={true} element={<Home />} />
				<Route path={'shop/*'} element={<Shop />} />
				<Route path={'auth'} element={<Authentication />} />
				<Route path={'checkout'} element={<Checkout />} />
			</Route>
		</Routes>
	);
};

export default App;
