import * as t from '../players/actionTypes';
import { searchPlayersValidationError } from '../players/actions';
import searchPlayersValidationErrors from '../utils/searchPlayersValidationErrors';
import searchPlayerIsValid  from '../utils/searchPlayerIsValid';


/**
 * Middleware that finds errors on input fields and prevents
 * searching with invalid data
 * @param {function} dispatch - The dispatch functions from the store
 * @param {function} getState - The getState function from the store
 * @returns {function} - The corresponent action creator 
 */


const formValidationMiddleware = ({ dispatch, getState}) => next => action => {
  if (action.type !== t.UPDATE_FILTER) {
    return next(action)
  }
  const { searchPam } = action; 
  let errors = searchPlayersValidationErrors(searchPam)
  
  if (!searchPlayerIsValid(errors)) {
    dispatch(searchPlayersValidationError(errors))
  } else {
    next(action)
  }
};

export default formValidationMiddleware;