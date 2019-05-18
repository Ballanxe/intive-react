import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../rootReducer';
import { middlewares } from '../store/configureStore';

import players from '../players'
import playersReducer from '../players/reducer'

/**
* Create a testing store with imported reducers, middlewares, and initial state.
* globals: rootReducer.
* @param {object} initialState - Initial state for store.
* @function storeFactory
* @returns {Store} - Redux store.
*/


// Instead of passing the actual Store, you can use a package named redux-mock-store
// This is recommended if you want to test intermediate actions as loading while wating
// a response 
// const playersReducer = players.reducer
export const storeFactory = (initialState) => {
	const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
	return createStoreWithMiddleware(
		rootReducer, 
		initialState
	); 
}

/**
	 * Return node (s) with the given data-test attribute.
	 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
	 * @param {string} val - Value of data-test attribute for search.
	 * @returns {ShallowWrapper}
*/
export const findByTestAttr = (wrapper, value) => {
	return wrapper.find(`[data-test="${value}"]`)
};

export const checkProps = (component, conformingProps) => {
	const propError = checkPropTypes(

		component.propTypes,
		conformingProps,
		'prop',
		component.name
	);
	expect(propError).toBeUndefined();
}