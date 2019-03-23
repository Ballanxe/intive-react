import { combineReducers } from 'redux';
import { playersHasErroed, playersAreLoading, playesrSuccessPayload } from './playersList'


export default combineReducers({
	playersHasErroed,
	playersAreLoading,
	playesrSuccessPayload
});