import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../utils/testUtils';
import PlayersList from '../../players/components/PlayersList';



const setup = (props={}) => {

	const wrapper = shallow(<PlayersList {...props}/>).dive()

	// console.log(wrapper.debug());
	return wrapper
}


test('renders without players', () => {

	const defaultProps = { allPlayers:null, searchPlayers:null, classes:{} };
	const wrapper = setup(defaultProps);
	const component = findByTestAttr(wrapper,"no-all-players")
	expect(component.length).toBe(1)
})

test('renders with all players and without search players', () => {

	const defaultProps = { allPlayers:[], searchPlayers:null, classes:{} };
	const wrapper = setup(defaultProps);
	const component = findByTestAttr(wrapper,"no-search-players")
	expect(component.length).toBe(1)
})

test('renders with search players and with all players', () => {

	const players = [{
		contractUntil : "2022-06-30",
		dateOfBirth : "1993-05-13",
		jerseyNumber : 9,
		name : "Romelu Lukaku",
		nationality : "Belgium",
		position : "Centre-Forward"
	}]

	const searchedPlayers = [{
		contractUntil : "2019-06-30",
		dateOfBirth : "1990-11-07",
		jerseyNumber : 1,
		name : "David de Gea",
		nationality : "Spain",
		position: "Keeper"
	}]

	const defaultProps = { allPlayers: players, searchPlayers: players, classes:{} }
	const wrapper = setup(defaultProps)
	const component = findByTestAttr(wrapper, 'players-fetched')
	expect(component.length).toBe(1)

})