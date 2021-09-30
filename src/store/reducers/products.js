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
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  productList: [],
  list: [],
  info: '',
  categoryInfo: '',
  AllProductList: [],
  SubCategoryList: [],
  BrandList: [],
  Review:[],
  orderItems:[],
  cartItems:[]
}

const updateCategoryList = (state, action) => {
  return Object.assign({}, state, {
    productList: action.productsCategory
  })
}

const updateProductList = (state, action) => { 
  /*let AllProductList = [...state.AllProductList]
   action.Products.forEach(item => {
    let index = AllProductList.findIndex(r => r.id === item.id)
    if (index === -1) {
      index = AllProductList.push(Utility.create(item)) - 1
    } else {
      AllProductList[index] = Utility.update(item, AllProductList[index])
    }
  })*/
  return Object.assign({}, state, {
    AllProductList: action.Products
  })
}

const updateBrandList = (state, action) => {
  return Object.assign({}, state, {
    BrandList: action.name
  })
}

const updateSubCategoryList = (state, action) => {
  return Object.assign({}, state, {
    SubCategoryList: action.SubCategory
  })
}

const updateCategoryInfo = (state, action) => {
  return Object.assign({}, state, {
    info:action.productsInfo
  })
  
}
const updateProductReview = (state, action) => {
  return Object.assign({}, state, {
    Review:action.productsReview
  })
  
}

const addtoCart = (state, action) => {
  let cartItems = [...state.cartItems, action.product]
  
  return Object.assign({}, state, {
    cartItems
  }, async () => {
    await AsyncStorage.setItem('MyCarts', JSON.stringify(cartItems))
  })
}
const removefromCart = (state, action) => {
  let cartItems = [...state.cartItems]
  cartItems = cartItems.filter(r => r.id !== action.id)
  return Object.assign({}, state, {
    cartItems
  })
}
const clearCart = (state, action) => {
  return Object.assign({}, state, {
    cartItems : action.product
  })
}
const myOrders = async (state, action) => {
  let orderItems = [...state.orderItems, action.product]
  return Object.assign({}, state, {
    orderItems
  }, async () => {
    await AsyncStorage.setItem('MyOrders', JSON.stringify(orderItems))
  })
}
const reducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case CATEGORY_LIST:
      return updateCategoryList(state, action)
    case CATEGORY_INFO:
      return updateCategoryInfo(state, action)
    case PRODUCT_LIST:
      return updateProductList(state, action)
    case PRODUCT_REVIEW:
      return updateProductReview(state, action)
    case BRAND_LIST:
      return updateBrandList(state, action)
    case SUB_CATEGORY_LIST:
      return updateSubCategoryList(state, action)
    case MY_ORDERS:
      return myOrders(state, action)
    case ADD_CART:
      return addtoCart(state, action)
    case REMOVE_CART:
      return removefromCart(state, action)
    case CLEAR_CART:
      return clearCart(state, action)
    default:
      return state
  }
}

export default reducer
