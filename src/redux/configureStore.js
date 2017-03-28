import { createStore, bindActionCreators, combineReducers } from 'redux'
import * as currentTime from './modules/currentTime'
import * as data from './modules/data'

export const configureStore = () => {
  const mainReducer = combineReducers({
    data: data.reducer,
    currentTime: currentTime.reducer
  })
  const store = createStore(mainReducer)

  // DEBUG ONLY
  window.REDUX = store

  const actions = {
    currentTime: bindActionCreators(currentTime.actions, store.dispatch),
    data: bindActionCreators(data.actions, store.dispatch)
  }
  return { store, actions, mainReducer }
}

export default configureStore
