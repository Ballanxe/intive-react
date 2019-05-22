import * as a from '../../players/actions'
import * as t from '../../players/actionTypes';
import { searchedPlayersSelector } from '../../players/selectors';
import { storeFactory } from '../../utils/testUtils';
import initialState from '../../players/model'


describe('testing search filter', () => {

	let store
	const playersState = initialState
	beforeEach(() => {
		store = storeFactory({
			players: {
				...playersState,
				all_players: [{
					age: 26,
					contractUntil : "2022-06-30",
					dateOfBirth : "1993-05-13",
					jerseyNumber : 9,
					name : "Romelu Lukaku",
					nationality : "Belgium",
					position : "Centre-Forward"
				}]
			}
		})
	})
	// name error
	// age error
	// no players found
	// players found 

	describe('should find player', () => {

		let searchPam;
		beforeEach(() => {
			searchPam = {
				player_name: 'Romelu',
				position: 'Centre-Forward',
				age:'26'
			}
		})


		const baseExpectedState = {
				players: {
					...playersState,
					player_name: 'Romelu',
					position: 'Centre-Forward',
					age:'26',
					all_players: [{
						age: 26,
						contractUntil : "2022-06-30",
						dateOfBirth : "1993-05-13",
						jerseyNumber : 9,
						name : "Romelu Lukaku",
						nationality : "Belgium",
						position : "Centre-Forward"
					}]
				}
			}

		test('should update state with params', () => {
			store.dispatch(a.updatePlayersFilter(searchPam))
			const state = store.getState()


			expect(state).toEqual(baseExpectedState)

		})

		test('Should return a match by all params', () => {
			store.dispatch(a.updatePlayersFilter(searchPam))
			const state = store.getState()

			const searchPlayers = searchedPlayersSelector(state.players)
			const expectedPlayer = [{
				age: 26,
				contractUntil : "2022-06-30",
				dateOfBirth : "1993-05-13",
				jerseyNumber : 9,
				name : "Romelu Lukaku",
				nationality : "Belgium",
				position : "Centre-Forward"
			}]
			expect(searchPlayers).toEqual(expectedPlayer)

		})

		test('Should return a match just by name', () => {

			searchPam.age = ''
			searchPam.position = ''
			store.dispatch(a.updatePlayersFilter(searchPam))
			const state = store.getState()

			const searchPlayers = searchedPlayersSelector(state.players)
			const expectedPlayer = [{
				age: 26,
				contractUntil : "2022-06-30",
				dateOfBirth : "1993-05-13",
				jerseyNumber : 9,
				name : "Romelu Lukaku",
				nationality : "Belgium",
				position : "Centre-Forward"
			}]
			expect(searchPlayers).toEqual(expectedPlayer)
		})
		test('Should return a match just by age', () => {

			searchPam.player_name = ''
			searchPam.position = ''
			store.dispatch(a.updatePlayersFilter(searchPam))
			const state = store.getState()

			const searchPlayers = searchedPlayersSelector(state.players)
			const expectedPlayer = [{
				age: 26,
				contractUntil : "2022-06-30",
				dateOfBirth : "1993-05-13",
				jerseyNumber : 9,
				name : "Romelu Lukaku",
				nationality : "Belgium",
				position : "Centre-Forward"
			}]
			expect(searchPlayers).toEqual(expectedPlayer)
		})
		test('Should return a match just by position', () => {

			searchPam.player_name = ''
			searchPam.age = ''
			store.dispatch(a.updatePlayersFilter(searchPam))
			const state = store.getState()
			const searchPlayers = searchedPlayersSelector(state.players)
			const expectedPlayer = [{
				age: 26,
				contractUntil : "2022-06-30",
				dateOfBirth : "1993-05-13",
				jerseyNumber : 9,
				name : "Romelu Lukaku",
				nationality : "Belgium",
				position : "Centre-Forward"
			}]
			expect(searchPlayers).toEqual(expectedPlayer)
		})

		test('Should error on invalid player name and invalid age', () => {
			searchPam.player_name = 'no numbers 123'
			searchPam.age = 'no letters'
			store.dispatch(a.updatePlayersFilter(searchPam))
			const expectedErrors = { player_name: true, age: true }
			const state = store.getState()
			expect(state.players.errors).toEqual(expectedErrors)
		})

		test('Should error no valid age higher than 80`', () => {
			searchPam.age = '81'
			store.dispatch(a.updatePlayersFilter(searchPam))
			const expectedErrors = { player_name: false, age: true }
			const state = store.getState()
			expect(state.players.errors).toEqual(expectedErrors)
		})
		test('Should error no valid age lower than 18', () => {
			searchPam.age = '17'
			store.dispatch(a.updatePlayersFilter(searchPam))
			const expectedErrors = { player_name: false, age: true }
			const state = store.getState()
			expect(state.players.errors).toEqual(expectedErrors)
		})
		test('Should return no match', () => {
			const noMatchPam = {
				player_name: 'abcd',
				position:'Centre-Forward',
				age:'50'
			}
			store.dispatch(a.updatePlayersFilter(noMatchPam))
			const state = store.getState()
			const playersResult = searchedPlayersSelector(state.players) 
			expect(playersResult.length).toBe(0)
		})
			

	})
})