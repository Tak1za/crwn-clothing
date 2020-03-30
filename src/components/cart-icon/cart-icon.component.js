import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartDropdown, cartItems }) => (
	<div className="cart-icon" onClick={cartItems.length !== 0 ? toggleCartDropdown: null} >
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count">{cartItems.length}</span>
	</div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
	cartItems
});

const mapDispathToProps = dispath => ({
	toggleCartDropdown: () => dispath(toggleCartDropdown())
});

export default connect(mapStateToProps, mapDispathToProps)(CartIcon);
