import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_UPDATE_USER, AUTH_ADD_ADDRESS } from '@store/actionTypes'

const initialState = {
  isLoggedIn: false,
  user: null,
  address: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return Object.assign({}, state, {
        isLoggedIn: true,
        user: action.user
      })
    case AUTH_ADD_ADDRESS:
      return Object.assign({}, state, {
        address: action.user
      })
    case AUTH_LOGOUT:
      return Object.assign({}, state, initialState)
    case AUTH_UPDATE_USER:
      return Object.assign({}, state, {
        user: action.user
      })
    default:
      return state
  }
}

export default reducer
