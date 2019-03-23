import { applyMiddleware, createStore, combineReducers } from 'redux';
import { promiseMiddleware } from './middleware';
import thunk from 'redux-thunk'

import playersList from './reducers/playersList'


const reducer = combineReducers({playersList});

const middleware = applyMiddleware(thunk);

const store = createStore(reducer, middleware);

export default store;