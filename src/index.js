import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// REDUX IMPLEMENTATION //

import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux'; // connects store with app

const myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);




ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);