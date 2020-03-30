import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crwn.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/card-dropdown.component';

const Header = ({ currentUser, cartDropdownHidden }) => (
	<div className="header">
		<Link to="/" className="logo-container">
			<Logo className="logo" />
		</Link>
		<div className="options">
			<Link to="/shop" className="option">
				SHOP
			</Link>
			<Link to="/shop" className="option">
				CONTACT
			</Link>
			{currentUser ? (
				<div className="option" onClick={() => auth.signOut()}>
					SIGN OUT
				</div>
			) : (
				<Link to="/signin" className="option">
					SIGN IN
				</Link>
			)}
			<CartIcon />
		</div>
		{cartDropdownHidden ? null : <CartDropdown />}
	</div>
);

const mapStateToProps = ({
	user: { currentUser },
	cart: { cartDropdownHidden }
}) => ({
	currentUser,
	cartDropdownHidden
});

export default connect(mapStateToProps)(Header);
