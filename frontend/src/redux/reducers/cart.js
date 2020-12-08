import { CART_ADD_ITEM } from '../types';

const initialState = {
	cartItems : []
};

export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case CART_ADD_ITEM:
			const item = action.paylod;

			const isExistInCart = state.cartItems.find((x) => x.product === item.product);
			if (isExistInCart) {
				return {
					...state,
					cartItems : state.cartItems.map(
						(x) =>

								x.product === isExistInCart.product ? item :
								x
					)
				};
			}
			else {
				return {
					...state,
					cartItems : [
						...state.cartItems,
						item
					]
				};
			}
		default:
			return state;
	}
};
