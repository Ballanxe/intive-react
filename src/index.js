import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, hashHistory, IndexRoute } from 'react-router'
// import './index.css';
import configureStore from './store/configureStore'
import Root from './components/Root'


const store = configureStore();

ReactDOM.render(<Root store={store} />,document.getElementById('root'));