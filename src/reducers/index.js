import { combineReducers } from 'redux';
import { playersHasErroed, playersAreLoading, playesrSuccessPayload, playersSuccessSearch } from './playersList'


export default combineReducers({
	playersHasErroed,
	playersAreLoading,
	playesrSuccessPayload,
	playersSuccessSearch
});