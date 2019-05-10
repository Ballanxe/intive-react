import { searchPlayersValidationError } from '../actions/players';
import searchPlayersValidationErrors    from '../utils/searchPlayersValidationErrors';
import searchPlayerIsValid             from '../utils/searchPlayerIsValid';

const formValidationMiddleware = ({ dispatch, getState}) => next => action => {
  if (action.type !== "UPDATE_PLAYERS_FILTER") {
    return next(action)
  }
  const { searchPam } = action; 
  let errors          = searchPlayersValidationErrors(searchPam)
  
  if (!searchPlayerIsValid(errors)) {
    dispatch(searchPlayersValidationError(errors))
  } else {
    next(action)
  }
};

export default formValidationMiddleware;