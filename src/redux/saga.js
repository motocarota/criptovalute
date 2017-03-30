import { call, put, takeLatest } from 'redux-saga/effects'
import Api from '../api/Api'
import { types, actions } from '../redux/modules/data'
import dataAdapter from '../adapters/data.adapter'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
   try {
      const data = yield call(Api)
      console.table(data)
      const convertedList = data.map(dataAdapter)
      console.table(convertedList)
      yield put(actions.newData(convertedList))
   } catch (e) {
      yield console.warn('errore')
   }
}

function* saga() {
  yield takeLatest(types.NEW_DATA_REQUESTED, fetchUser)
}


// const list = []

export default saga