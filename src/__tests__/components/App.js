import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../utils/testUtils';
import App from '../../App';


/**
* Factory function to create a ShallowWrapper for the GuessedWords component.
* @function setup
* @param {object} initialState - Initial state for this setup
* @returns {shallowWrapper}
*/
const setup = (initialState={}) => {
	const store = storeFactory(initialState);
	const wrapper = shallow(<App store={store}/>).dive().dive()
	return wrapper 
}

describe('render', () => {

	let wrapper;
	beforeEach(() => {
		const initialState = {

			players: {
				player_name: '',
				position: '',
				age:'',
				all_players:[],
				search_players: [],
				errors: {
					player_name: '',
					age:'',
				},
				loading: false,
				hasErroed: false	
			}

		}

		wrapper = setup(initialState);
	})

	test('render without crashing', () => {

		const component = findByTestAttr(wrapper, 'main-component')
		expect(component.length).toBe(1)

	})
	test('render AppBar', () => {

		const component = findByTestAttr(wrapper.dive(), 'app-bar')
		expect(component.length).toBe(1)

	})
	test('render players container', () => {

		const component = findByTestAttr(wrapper.dive(), 'players-container')
		expect(component.length).toBe(1)

	})

})


