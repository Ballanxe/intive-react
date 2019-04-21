import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunkPromiseMiddleware from 'redux-thunk-promise';
// import { promiseMiddleware } from './middleware';
import thunk from 'redux-thunk'

import playersList from './reducers/playersList'


const reducer = combineReducers({playersList});

// Probar si funciona sin thunkPromiseMiddleware
const middleware = applyMiddleware(thunk,thunkPromiseMiddleware);

const store = createStore(reducer, middleware);

export default store;