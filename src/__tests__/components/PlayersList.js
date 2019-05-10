import React from 'react';
import { shallow, render } from  'enzyme';
import configureStore from 'redux-mock-store';
import { PlayersList } from '../../components/PlayersList';

const mockStore = configureStore()

it('Render PlayersList', () => {

	const store = mockStore({players: []})

	const wrapper = shallow(<PlayersList players=[{}]>);

	console.log("Hola como estan")

	// const wrapper = render(<ConnectedProductList store={store}>)

	// expect(wrapper.find(".products").length).toBe(0);

});

