import { ADD_CART, REMOVE_CART } from '@store/actionTypes'

export const addcart = ( product) => {
  return {
    type: ADD_CART,
    product
  }
}
export const removecart = (id) => {
  return {
    type: REMOVE_CART,
    id
  }
}
