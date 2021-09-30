import * as types from '@store/actionTypes'

const initialState = {
  connectionType: '',
  connectionEffectiveType: '',
  isConnected: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.NETWORK_CONNECTION_STATUS:
      return Object.assign({}, state, {
        connectionType: action.connectionType,
        connectionEffectiveType: action.connectionEffectiveType,
        isConnected: action.isConnected
      })
    default:
      return state
  }
}

export default reducer
