export function playersHasErroed(bool){
	return {
		type: 'PLAYERS_HAS_ERROED',
		hasErroed: bool
	}
}

export function playersAreLoading(bool){
	return {
		type: 'PLAYERS_ARE_LOADING',
		loading: bool
	}
}

export function playersLoadingSuccess(payload){
	return {
		type: 'PLAYERS_ARE_LOADED',
		payload
	}
}

