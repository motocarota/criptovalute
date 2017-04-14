import { call, put, take } from 'redux-saga/effects'
import Api from '../api/Api'
import { types, actions } from '../redux/modules/data'
// import dataAdapter from '../adapters/data.adapter'

function * saga(action) {
  while (true) {
    const req = yield take(types.NEW_DATA_REQUESTED)
    const res = yield call(Api.get, [req.payload])
    yield put(actions.newData(req.payload.symbol, res.data))
  }
}

export default saga