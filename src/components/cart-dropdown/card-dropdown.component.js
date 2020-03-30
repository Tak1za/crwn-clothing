import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';

const CartDropdown = ({ cartItems }) => (
	<div className="cart-dropdown">
		{cartItems.map(item => (
			<div className="item-holder">
				<div className="cart-items">
					{item.name} - {item.quantity}
					<img
						alt={item.name}
						className="image"
						src={`${item.imageUrl}`}
					/>
				</div>
			</div>
		))}
		<CustomButton>CHECKOUT</CustomButton>
	</div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
	cartItems
});

export default connect(mapStateToProps, null)(CartDropdown);
