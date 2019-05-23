import * as t from './actionTypes';
import axios from 'axios';



/**
	* Action creator when error on fetching players from server
	* @function fetchHasErroed
	* @param {boolean} bool - true when error occurs false otherwise
	* @param {string} error - The error message to be shown
	* @returns {object} - Returns the action 
*/
function fetchHasErroed(bool, error){
	return {
		type: t.FETCH_HAS_ERROED,
		hasErroed: bool,
		error
	}
}
/**
	* Action creator when error on fetching players from server
	* @function playersAreLoading
	* @param {boolean} bool - true when data is loading
	* @returns {object} - Returns the action 
*/
function playersAreLoading(bool){
	return {
		type: t.ARE_LOADING,
		loading: bool
	}
}

/**
 * Action creator when players are loading
 * @param {array} [players] [the fetched data array]
 * @return {object} - the correspondent action
 */

function playersFetchDataSuccess(players){
	return {
		type: t.FETCH_DATA_SUCCESS,
		players 
	};
}


/**
 * Fetch players data from the server and returns the action creator to be dispatched
 * @return {Promise} - The promise with the data or the error
 */
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

/**
 *	Action creator to be dispatched when updating players search
 *	@params	{object} searchParam - Object with the valid input data
 *	@returns {'object'} Action to be dispatched 
 */

export function updatePlayersFilter(searchPam){

	return {
		type: t.UPDATE_FILTER,
		searchPam
	}
}

/**
 * Action creator to be dispatched by the middleware when finding a field error
 * @param {object} errors - object with the errors of the fields 
 * @returns {object} - action to be dispatched 
 */
export function searchPlayersValidationError(errors) {
  return {
    type: t.SEARCH_VALIDATION_ERROR,
    errors
  }
}