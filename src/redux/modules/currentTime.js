export const types = {
  'FETCH_NEW_TIME': 'FETCH_NEW_TIME'
}

const initialState = Date.now()

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_NEW_TIME:
      return Date.now()
    default:
      return state
  }
}

export const actions = {
  updateTime: () => ({ type: types.FETCH_NEW_TIME })
}
