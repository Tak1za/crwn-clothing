import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartDropdown, itemCount }) => (
	<div
		className="cart-icon"
		onClick={itemCount !== 0 ? toggleCartDropdown : null}
	>
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count">{itemCount}</span>
	</div>
);

const mapStateToProps = state => ({
	itemCount: selectCartItemsCount(state)
});

const mapDispathToProps = dispath => ({
	toggleCartDropdown: () => dispath(toggleCartDropdown())
});

export default connect(mapStateToProps, mapDispathToProps)(CartIcon);
