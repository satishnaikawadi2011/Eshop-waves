import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productDetailsReducer, productListReducer } from './reducers/products';
import { cartReducer } from './reducers/cart';
import { userLoginReducer, userRegisterReducer } from './reducers/user';

const reducers = combineReducers({
	productList    : productListReducer,
	productDetails : productDetailsReducer,
	cart           : cartReducer,
	userLogin      : userLoginReducer,
	userRegister   : userRegisterReducer
});

const cartItemsFromStorage =
	localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) :
	[];

const userInfoFromStorage =
	localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) :
	null;

const initialState = {
	cart      : { cartItems: cartItemsFromStorage },
	userLogin : { userInfo: userInfoFromStorage }
};

const middleware = [
	thunk
];

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
