import defaultState from './model';
import { getPlayersAge } from './utils'
import * as t from './actionTypes';

export default function playersReducer(state=defaultState, action) {

  switch(action.type) {

    case t.SEARCH_VALIDATION_ERROR:

      return {
        ...state,
        errors:{
          ...action.errors

        }
        
      }
    case t.UPDATE_FILTER:

      return {
        ...state,
        ...action.searchPam,
        errors: {
          player_name: false,
          age:false,
        }
      };
    case t.FETCH_HAS_ERROED:
      return {
        ...state,
        errors: {
          ...state.errors,
          submit_error: action.error,
        },
        hasErroed: true
      };
    case t.ARE_LOADING:
      return {
        ...state,
        loading: true
      };

    case t.FETCH_DATA_SUCCESS:
      return {
        ...state,
        all_players: getPlayersAge(action.players)  
      };

    default:
     return state;
  }
}