import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ itemCount, toggleCartDropdown }) => (
	<div
		className="cart-icon"
		onClick={toggleCartDropdown}
	>
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count">{itemCount}</span>
	</div>
);

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount
});

const mapDispathToProps = dispath => ({
	toggleCartDropdown: () => dispath(toggleCartDropdown())
});

export default connect(mapStateToProps, mapDispathToProps)(CartIcon);
