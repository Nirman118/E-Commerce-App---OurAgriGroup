import { ADD_CART, REMOVE_CART } from '@store/actionTypes'

const initialState = {
  products: [],
  id: ''
}

const addtoCart = (state, action) => {
  let products = [...state.products]
   let index = products.push(action.product)
  return Object.assign({}, state, {
    products
  })
}
const removefromCart = (state, action) => {
  let products = [...state.products]
  products = products.filter(r => r.id !== action.id)
  console.log('list reducer', products)
  return Object.assign({}, state, {
    products
  })
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return addtoCart(state, action)
    case REMOVE_CART:
      return removefromCart(state, action)

    default:
      return state
  }
}

export default reducer
