import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import formValidationMiddleware from '../middleware/formValidationMiddleware'
import rootReducer from '../rootReducer'

export const middlewares = [thunk,formValidationMiddleware];

export default function configureStore(initialState){
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(...middlewares)
	);
}

