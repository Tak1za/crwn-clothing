import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartDropdown }) => (
	<div className="cart-icon" onClick={toggleCartDropdown}>
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count">0</span>
	</div>
);

const mapDispathToProps = dispath => ({
	toggleCartDropdown: () => dispath(toggleCartDropdown())
});

export default connect(null, mapDispathToProps)(CartIcon);
