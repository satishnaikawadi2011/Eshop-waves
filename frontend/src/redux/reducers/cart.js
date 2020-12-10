import filter_array_values from '../../utils/filterArray';
import { CART_ADD_ITEM } from '../types';

const initialState = {
	cartItems : []
};

export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case CART_ADD_ITEM:
			const item = action.payload;
			const cartItems = filter_array_values(state.cartItems);
			const existItem = cartItems.find((x) => x.product === item.product);
			if (existItem) {
				return {
					...state,
					cartItems : cartItems.map(
						(x) =>

								x.product === existItem.product ? item :
								x
					)
				};
			}
			else {
				return {
					...state,
					cartItems : [
						...cartItems,
						item
					]
				};
			}
		default:
			return state;
	}
};
