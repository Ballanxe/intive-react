import * as t from './actionTypes';



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

export function playersFetchData(payload){

	return (dispatch) => {
		dispatch(playersAreLoading(true));
		payload.then(
			res =>{
				dispatch(playersFetchDataSuccess(res))
				dispatch(playersAreLoading(false));
			},
			error =>{
				dispatch(fetchHasErroed(true, error.response.body))
			}
		)			
	};
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