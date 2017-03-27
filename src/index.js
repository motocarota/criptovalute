import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import './index.css';
import configureStore from './redux/configureStore'

const {store, actions} = configureStore()

ReactDOM.render(
    <AppContainer store={store} actions={actions}/>,
  document.getElementById('root')
);
