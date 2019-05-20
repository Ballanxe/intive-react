import * as t from './actionTypes';
import axios from 'axios';



export function fetchHasErroed(bool, error){
	return {
		type: t.FETCH_HAS_ERROED,
		hasErroed: bool,
		error
	}
}

export function playersAreLoading(bool){
	return {
		type: t.ARE_LOADING,
		loading: bool
	}
}

export function playersFetchDataSuccess(players){
	return {
		type: t.FETCH_DATA_SUCCESS,
		players 
	};
}

export function playersFetchData(){

	return (dispatch) => {
		dispatch(playersAreLoading(true))
		return axios.get('https://football-players-b31f2.firebaseio.com/players.json?print=pretty')
			.then(res => {
				dispatch(playersFetchDataSuccess(res.data))
				dispatch(playersAreLoading(false));
			})
			.catch(error => {
				dispatch(fetchHasErroed(true, error.response.data.error))
			})
	}

}

export function updatePlayersFilter(searchPam){

	return {
		type: t.UPDATE_FILTER,
		searchPam
	}
}

export function searchPlayersValidationError(errors) {
  return {
    type: t.SEARCH_VALIDATION_ERROR,
    errors
  }
}