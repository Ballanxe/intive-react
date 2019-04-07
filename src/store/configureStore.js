import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import promiseMiddleware from '../middleware/promiseMiddleware'
import rootReducer from '../reducers'
import persistStore from 'redux-persist'


export default function configureStore(initialState){
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(thunk)
	);
}

