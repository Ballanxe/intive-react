import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../utils/testUtils';
import App, { UnconnectedApp } from '../../App';


/**
* Factory function to create a ShallowWrapper for the GuessedWords component.
* @function setup
* @param {object} initialState - Initial state for this setup
* @returns {shallowWrapper}
*/
const setup = (initialState={}, props={}) => {
	const store = storeFactory(initialState);
	const wrapper = shallow(<App store={store} props={props}/>).dive().dive()
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

		wrapper = setup(initialState,{});
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
	test('`updatePlayersFilter` should be a function on the props', () => {

		const getUpdatePlayersFilter = wrapper.instance().props.actions.updatePlayersFilter

		expect(getUpdatePlayersFilter).toBeInstanceOf(Function)
	})
	test('`playersFetchData` should be a function on the props', () => {

		const getPlayersFetchData = wrapper.instance().props.actions.playersFetchData

		expect(getPlayersFetchData).toBeInstanceOf(Function)
	})
	test('`playersFetchData` shuld run on `componentDidMount`', () => {
		const playersFetchDataMock = jest.fn()
		wrapper.instance().props.actions.playersFetchData = playersFetchDataMock
		wrapper.instance().componentDidMount()
		const playersFetchDataCallCount = playersFetchDataMock.mock.calls.length
		expect(playersFetchDataCallCount).toBe(1)
	})

})



