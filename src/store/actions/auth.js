import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_UPDATE_USER, AUTH_ADD_ADDRESS } from '@store/actionTypes'

export const login = (user) => {
  return {
    type: AUTH_LOGIN,
    user
  }
}

export const logout = () => {
  return dispatch => {
    dispatch({
      type: AUTH_LOGOUT
    })
  }
}

export const updateUser = (user) => {
  return {
    type: AUTH_UPDATE_USER,
    user
  }
}
export const addAddress = (user) => {
  return {
    type: AUTH_ADD_ADDRESS,
    user
  }
}
