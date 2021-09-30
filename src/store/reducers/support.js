import * as types from '@store/actionTypes'

const initialState = {
  loading: false,
  error: {
    visible: false,
    title: '',
    message: '',
    onOk: () => {}
  },
  success: {
    visible: false,
    title: '',
    message: ''
  },
  confirm: {
    visible: false,
    title: '',
    message: '',
    onOk: () => {},
    onCancel: () => {}
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUPPORT_LOADING_SHOW:
      return Object.assign({}, state, {
        loading: true
      })
    case types.SUPPORT_LOADING_HIDE:
      return Object.assign({}, state, {
        loading: false
      })
    case types.SUPPORT_ERROR_SHOW:
      return Object.assign({}, state, {
        error: {
          visible: true,
          title: action.title,
          message: action.message,
          onOk: action.onOk
        }
      })
    case types.SUPPORT_ERROR_HIDE:
      return Object.assign({}, state, {
        error: initialState.error
      })
    case types.SUPPORT_SUCCESS_SHOW:
      return Object.assign({}, state, {
        success: {
          visible: true,
          title: action.title,
          message: action.message
        }
      })
    case types.SUPPORT_SUCCESS_HIDE:
      return Object.assign({}, state, {
        success: initialState.success
      })
    case types.SUPPORT_CONFIRM_SHOW:
      return Object.assign({}, state, {
        confirm: {
          visible: true,
          title: action.title,
          message: action.message,
          onOk: action.onOk,
          onCancel: action.onCancel
        }
      })
    case types.SUPPORT_CONFIRM_HIDE:
      return Object.assign({}, state, {
        confirm: initialState.confirm
      })
    default:
      return state
  }
}

export default reducer
