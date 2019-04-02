import {playersFetchData} from '../actions/players';

export function playersHasErroed(state = false, action){
  switch (action.type){
    case 'PLAYERS_HAS_ERROED':
      return action.hasErroed
    default:
      return state
  }
}


export function playersAreLoading(state = false, action){
  switch (action.type){
    case 'PLAYERS_ARE_LOADING':
      return action.loading
    default:
      return state
  }
}


export function playesrSuccessPayload(state = false, action){
  switch (action.type){
    case 'PLAYERS_FETCH_DATA_SUCCESS':
      return action.players
    default:
      return state
  }
}

export function playersSuccessSearch(state = false, action){
  switch (action.type){
    case 'PLAYERS_SUCCESS_SEARCH':
      return action.results
    default:
      return state
  }
}

