import { combineReducers } from 'redux';
import playersReducer, * as playersSelectors  from './players';


export default combineReducers({

	playersReducer,

});

export const searchedPlayersSelector = (state) => playersSelectors.searchedPlayersSelector(state.playersReducer)

