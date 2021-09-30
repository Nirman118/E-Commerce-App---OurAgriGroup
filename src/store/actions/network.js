import * as types from '@store/actionTypes'

export const connectionState = (connectionType, connectionEffectiveType, isConnected) => {
  return {
    type: types.NETWORK_CONNECTION_STATUS,
    connectionType,
    connectionEffectiveType,
    isConnected
  }
}
