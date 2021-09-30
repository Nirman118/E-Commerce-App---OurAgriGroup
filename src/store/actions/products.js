import {
  CATEGORY_LIST,
  CATEGORY_INFO,
  PRODUCT_LIST,
  PRODUCT_REVIEW,
  SUB_CATEGORY_LIST,
  BRAND_LIST,
  MY_ORDERS,
  CLEAR_CART,
  ADD_CART, REMOVE_CART
} from '@store/actionTypes'

export const updateCategoryList = (productsCategory) => {
  return async dispatch => {
    await dispatch({
      type: CATEGORY_LIST,
      productsCategory
    })
  }
}
export const updateProductList = (Products)=> {
   return async dispatch => {
     await dispatch ({
        type: PRODUCT_LIST,
        Products
     })
   }
}
export const updateProductReview = (productsReview) => {
  return async dispatch => {
    await dispatch({
      type: PRODUCT_REVIEW,
      productsReview
    })
  }
}
export const updateSubCategoryList = (SubCategory) => {
  return async dispatch => {
    await dispatch({
      type: SUB_CATEGORY_LIST,
      SubCategory
    })
     
  }
}   
export const updateBrandList = (name)=> {
  return async dispatch => {
    await dispatch ({
       type: BRAND_LIST,
       name
    })
  }
}
export const updateCategoryInfo = (productsInfo) => {
  return async dispatch => {
    await dispatch({
      type: CATEGORY_INFO,
      productsInfo
    })
  }
}
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
export const clearCart = ( product) => {
  return {
    type: CLEAR_CART,
    product
  }
}
export const myOrders = ( product) => {
  return {
    type: MY_ORDERS,
    product
  }
}