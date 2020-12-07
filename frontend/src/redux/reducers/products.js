import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from '../types';

const productListInitialState = {
	products : []
};

export const productListReducer = (state = productListInitialState, action) => {
	switch (action.type) {
		case PRODUCT_LIST_REQUEST:
			return { ...state, loading: true, products: [] };
		case PRODUCT_LIST_SUCCESS:
			return { ...state, loading: false, products: action.payload };
		case PRODUCT_LIST_FAIL:
			return { ...state, loading: true, error: action.payload };
		default:
			return state;
	}
};
