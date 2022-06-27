import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown-component';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

import { signOutStart } from '../../store/user/user.action';

import {
	NavigationContainer,
	LogoContainer,
	NavLinksContainer,
	NavLink,
} from './navigation.styles.jsx';

const Navigation = () => {
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);
	const isCartOpen = useSelector(selectIsCartOpen);

	const signOutHandler = async () => {
		try {
			await dispatch(signOutStart());
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to={'/'}>
					<CrwnLogo />
				</LogoContainer>
				<NavLinksContainer>
					<NavLink to={'/shop'}>SHOP</NavLink>
					{currentUser ? (
						<NavLink as="span" onClick={signOutHandler} to={'/'}>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink to={'/auth'}>SIGN IN</NavLink>
					)}
					<CartIcon />
				</NavLinksContainer>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
