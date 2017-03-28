// i differenti tipi di azione che lo store supporta
export const types = {
  'NEW_DATA': 'NEW_DATA'
}

// stato iniziale dello store
const initialState = [{
  name: 'store vuoto',
  price: null,
  histoy: null
}]

// le uniche azioni che possono cambiare il contenuto dello store
export const actions = {
  newData: (questi) => ({
    type: types.NEW_DATA,
    payload: {
      received: questi
    }
  })
}

// come le azioni ricevute generano un nuovo stato
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.NEW_DATA:
      return action.payload.received
    default:
      return state
  }
}
