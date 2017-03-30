import { createStore, bindActionCreators, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import * as currentTime from './modules/currentTime'
import * as data from './modules/data'
import saga from './saga'

const sagaMiddleware = createSagaMiddleware()

export const configureStore = () => {
  const mainReducer = combineReducers({
    data: data.reducer,
    currentTime: currentTime.reducer
  })
const finalCreateStore = compose(
  applyMiddleware(sagaMiddleware)
)(createStore)

  const store = finalCreateStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

  // DEBUG ONLY
  window.REDUX = store

  sagaMiddleware.run(saga)

  const actions = {
    currentTime: bindActionCreators(currentTime.actions, store.dispatch),
    data: bindActionCreators(data.actions, store.dispatch)
  }
  return { store, actions, mainReducer }
}

export default configureStore
