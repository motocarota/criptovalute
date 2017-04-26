// import Api from '../../components/Api'
// i differenti tipi di azione che lo store supporta
export const types = {
  NEW_DATA_REQUESTED: 'NEW_DATA_REQUESTED',
  NEW_DATA: 'NEW_DATA'
}

// stato iniziale dello store
const initialState = {}

// le uniche azioni che possono cambiare il contenuto dello store

export const actions = {
  newData: (symbol, received) => ({
    type: types.NEW_DATA,
    payload: {
      received,
      symbol
    }
  }),
  fetchData: symbol => ({
    type: types.NEW_DATA_REQUESTED,
    payload: {
      symbol
    }
  })
}

// come le azioni ricevute generano un nuovo stato
export const reducer = (state = initialState, action = {}) => {
  const { type, payload = {} } = action
  switch (type) {
    case types.NEW_DATA:
      return {
        ...state,
        [payload.symbol]: payload.received
      }

    default:
      return state
  }
}
