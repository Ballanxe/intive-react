import playersReducer from '../../players/reducer'
import * as t from '../../players/actionTypes';

test('returns default initial state of `false` when no action is passed', () =>{

	// Make sure the test pass object to the action 
	const newState = playersReducer(undefined, {});

	const expectedState = {
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
	expect(newState).toEqual(expectedState);

})

test('return state of true upon receiving an action of FETCH_HAS_ERROED', () => {

	const newState = playersReducer(undefined, { type: t.FETCH_HAS_ERROED, error:'test error' });

	const expectedState = {
		player_name: '',
		position: '',
		age:'',
		all_players:[],
		search_players: [],
		errors: {
		  player_name: '',
		  age:'',
		  submit_error: 'test error',
		},
		loading: false,
		hasErroed: false
	}
	expect(newState).toEqual(expectedState)
})

test('return state of true upon receiving an action of FETCH_DATA_SUCCESS', () => {

	const newState = playersReducer(undefined, { type: t.FETCH_DATA_SUCCESS, players: [{name:'test name', dateOfBirth: '1981-07-28'}] });

	const expectedState = {
		player_name: '',
		position: '',
		age:'',
		all_players:[{
			name:'test name',
			dateOfBirth: '1981-07-28',
			age: 38
		}],
		search_players: [],
		errors: {
		  player_name: '',
		  age:'',
		},
		loading: false,
		hasErroed: false
	}
	expect(newState).toEqual(expectedState)
})

test('return state of true upon receiving an action of ARE_LOADING', () => {

	const newState = playersReducer(undefined, { type: t.ARE_LOADING, loading: true });
	const expectedState = {
		player_name: '',
		position: '',
		age:'',
		all_players:[],
		search_players: [],
		errors: {
		  player_name: '',
		  age:'',
		},
		loading: true,
		hasErroed: false
	}
	expect(newState).toEqual(expectedState)
})

test('return state of true upon receiving an action of UPDATE_FILTER', () => {

	const newState = playersReducer(undefined, { 
		type: t.UPDATE_FILTER, 
		searchPam: {
			player_name: 'test name',
			position: 'test position',
			age: 23
		}
	});

	const expectedState = {
		player_name: 'test name',
		position: 'test position',
		age:23,
		all_players:[],
		search_players: [],
		errors: {
		  playerName: null,
		  playerAge: null,
		},
		loading: false,
		hasErroed: false
	}
	expect(newState).toEqual(expectedState)
})


test('return state of true upon receiving an action of SEARCH_VALIDATION_ERROR', () => {

	const newState = playersReducer(undefined, { 
		type: t.SEARCH_VALIDATION_ERROR, 
		errors: { player_name: true,age: true,} 
	});
	const expectedState = {

	  player_name: '',
	  position: '',
	  age:'',
	  all_players:[],
	  search_players: [],
	  errors: {
	    player_name: true,
	    age: true,
	  },
	  loading: false,
	  hasErroed: false

	}

	expect(newState).toEqual(expectedState)
})


