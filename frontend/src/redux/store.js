import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer } from './reducers/products';

const reducers = combineReducers({
	productList : productListReducer
});

const initialState = {};

const middleware = [
	thunk
];

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
