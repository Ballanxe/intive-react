import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import promiseMiddleware from '../middleware/promiseMiddleware'
import formValidationMiddleware from '../middleware/formValidationMiddleware'
import ValidateInputsMiddleware from '../middleware/ValidateInputsMiddleware'
import rootReducer from '../reducers'


export default function configureStore(initialState){
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(thunk,
			formValidationMiddleware
			)
	);
}

