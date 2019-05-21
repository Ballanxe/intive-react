import moxios from 'moxios';
import axios from 'axios';
import configureStore from 'redux-mock-store';
import { middlewares } from '../../store/configureStore';

import * as a from '../../players/actions'
import * as t from '../../players/actionTypes';
import { storeFactory } from '../../utils/testUtils';
import initialState from '../../players/model'



describe('playersFetchData', () => {

	let store;
	beforeEach(() => {
		const playersState = {players:{...initialState}}
		store = storeFactory(playersState)
		moxios.install();
	})

	afterEach(() => {
		moxios.uninstall();
	})

	test('should fetch players successfully ', () => {

		const expectedResponse = [{
					age: 26,
					contractUntil : "2022-06-30",
					dateOfBirth : "1993-05-13",
					jerseyNumber : 9,
					name : "Romelu Lukaku",
					nationality : "Belgium",
					position : "Centre-Forward"
				}]
		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status:200,
				response: [{
					contractUntil : "2022-06-30",
					dateOfBirth : "1993-05-13",
					jerseyNumber : 9,
					name : "Romelu Lukaku",
					nationality : "Belgium",
					position : "Centre-Forward"
				}]
			});
		});

		return store.dispatch(a.playersFetchData()).then(() => {

			const newState = store.getState()
			expect(newState.players.all_players).toEqual(expectedResponse)

		})

	})

	test('should error on fetching players', () => {
		const errorResp = {
		    status: 400,
		    response: { error: 'invalid data' }
		}
		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith(errorResp);
		});

		return store.dispatch(a.playersFetchData()).then(() => {

			const newState = store.getState()
			expect(newState.players.hasErroed).toBe(true)
			expect(newState.players.errors.submit_error).toEqual(errorResp.response.error)

		})
	})


})

describe('testing players search actions', () => {

	test('should return action with type `UPDATE FILTER`', () => {
		const searchPam = {
			player_name: 'test name',
			position: 'test position',
			age: 23
		}
		const expectedAction = {
			type: t.UPDATE_FILTER,
			searchPam
		}
		const action = a.updatePlayersFilter(searchPam)
		expect(action).toEqual(expectedAction)


	})
	test('should return action with type `SEARCH_VALIDATION_ERROR`', () => {
		const testErrors = {player_name: false, age:true}
		const action = a.searchPlayersValidationError(testErrors)
		const expectedAction = {
			type: t.SEARCH_VALIDATION_ERROR,
			errors: testErrors
		}
		expect(action).toEqual(expectedAction)
	})

})