import { combineReducers } from 'redux';
import players from './players';


export default combineReducers({

  playersReducer: players.reducer,

});