import agent from '../agent'


export function playersHasErroed(bool, error){
	return {
		type: 'PLAYERS_HAS_ERROED',
		hasErroed: bool,
		error
	}
}

export function playersAreLoading(bool){
	return {
		type: 'PLAYERS_ARE_LOADING',
		loading: bool
	}
}

export function playersFetchDataSuccess(players){
	return {
		type: 'PLAYERS_FETCH_DATA_SUCCESS',
		players 
	};
}


export function playersFetchData(payload){

	return (dispatch) => {
		dispatch(playersAreLoading(true));

		payload.then(
			res =>{
				// console.log(Object.entries(res))
				// const players_list = Array.prototype.map.call(res, function(player){
    //   		return player.name
    // 		});

				dispatch(playersFetchDataSuccess(res))
				dispatch(playersAreLoading(false));
			},
			error =>{
				dispatch(playersHasErroed(true, error.response.body))
			}
		)

	};
}

