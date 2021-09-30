import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import reducers from './reducers'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}
const persistReducers = persistCombineReducers(persistConfig, reducers)

const middleware = [thunk]
const store = createStore(persistReducers, applyMiddleware(...middleware))
const persistor = persistStore(store)

export { store, persistor }
