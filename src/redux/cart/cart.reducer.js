import { CartActionTypes } from './cart.types';

const INITIAL_STATE = {
	cartDropdownHidden: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_DROPDOWN:
			return {
				...state,
				cartDropdownHidden: !state.cartDropdownHidden
			};
		default:
			return state;
	}
};

export default cartReducer;
