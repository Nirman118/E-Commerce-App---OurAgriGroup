import * as types from '@store/actionTypes'

export const showLoading = () => {
  return {
    type: types.SUPPORT_LOADING_SHOW
  }
}
export const hideLoading = () => {
  return {
    type: types.SUPPORT_LOADING_HIDE
  }
}

export const showFormError = (errors) => {
  return dispatch => {
    dispatch(showError(errors.map(e => e.message).join('\n')))
  }
}
export const showError = (message, onOk) => {
  return dispatch => {
    dispatch({
      type: types.SUPPORT_ERROR_SHOW,
      message,
      onOk: onOk || (() => dispatch(hideError()))
    })
  }
}
export const hideError = () => {
  return {
    type: types.SUPPORT_ERROR_HIDE
  }
}

export const showSuccess = (message) => {
  return {
    type: types.SUPPORT_SUCCESS_SHOW,
    message
  }
}
export const hideSuccess = () => {
  return {
    type: types.SUPPORT_SUCCESS_HIDE
  }
}

export const showConfirm = (message, onOk, onCancel) => {
  return dispatch => {
    dispatch({
      type: types.SUPPORT_CONFIRM_SHOW,
      message,
      onOk: () => {
        dispatch(hideConfirm())
        onOk()
      },
      onCancel: onCancel || (() => dispatch(hideConfirm()))
    })
  }
}
export const hideConfirm = () => {
  return {
    type: types.SUPPORT_CONFIRM_HIDE
  }
}
