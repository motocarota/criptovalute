import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import './index.css';

ReactDOM.render(
  <Provider store={createStore(AppContainer)}>
    <AppContainer />
  </Provider>  ,
  document.getElementById('root')
);
