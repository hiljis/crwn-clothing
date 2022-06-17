import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../contexts/user.context';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown-component';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

	const signOutHandler = async () => {
		try {
			await signOutUser();
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<Fragment>
			<div className="navigation">
				<Link className="logo-container" to={'/'}>
					<CrwnLogo />
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to={'/shop'}>
						SHOP
					</Link>
					{currentUser ? (
						<Link
							className="nav-link"
							onClick={signOutHandler}
							to={'/'}
						>
							SIGN OUT
						</Link>
					) : (
						<Link className="nav-link" to={'/auth'}>
							SIGN IN
						</Link>
					)}
					<CartIcon />
				</div>
				{isCartOpen && <CartDropdown />}
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
