import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../utils/testUtils';
import PlayersSearch from '../../players/components/PlayersSearch';
import playersState from '../../players/model'



const setup = (initialState={}, props={}) => {
	const fullState = {
		players:{
			...initialState
		}
	}
	const store = storeFactory(fullState);
	const wrapper = shallow(<PlayersSearch store={store} props={props} />).dive().dive()
	return wrapper 
}


describe('testing PlayersSearch component', () => {

	const onChangeFieldMock = jest.fn()
	const onSubmitFormMock = jest.fn()
	const props = {
		onChangeField: onChangeFieldMock,
		onSubmitForm: onSubmitFormMock
	}

	let wrapper;
	beforeEach(() => {

		wrapper = setup(playersState, props)

	})

	test('renders without crashing', () => {

		const component = findByTestAttr(wrapper,"players-search")
		expect(component.length).toBe(1)
	})

	test('test `updatePlayersFilter` action creator to be function', () => {

		const onSubmitFormProp = wrapper.instance().props.actions.updatePlayersFilter 
		expect(onSubmitFormProp).toBeInstanceOf(Function)
	})
	

})


