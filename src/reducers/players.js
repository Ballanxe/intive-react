import defaultState from '../store/initialStates/player.js'


export function playersReducer(state=defaultState, action) {
  switch(action.type) {
    case "UPDATE_PLAYER_SEARCH":

      return {
        ...state,
        ...action.data,
      };
    case "PLAYERS_HAS_ERROED":
      return {
        ...state,
        errors: {
          ...state.errors,
          submit_error: action.error,
          submit: true
        }
      };
    case "PLAYERS_ARE_LOADING":
      return {
        ...state,
        loading: true
      };

    case "PLAYERS_FETCH_DATA_SUCCESS":
      return {
        ...state,
        players: action.players
      };

    default:
     return state;
  }
}

