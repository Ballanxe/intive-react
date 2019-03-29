import { combineReducers } from 'redux';
import { playersHasErroed, playersAreLoading, playesrSuccessPayload, PlayersSearch } from './playersList'


export default combineReducers({
	playersHasErroed,
	playersAreLoading,
	playesrSuccessPayload,
	PlayersSearch
});