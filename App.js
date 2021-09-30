
import React from 'react';
import {View} from 'react-native';
import MainStackNavigator from './src/navigation/stackNavigator';
import DrawerNavigator from './src/navigation/drawerNavigation';

import { NavigationContainer } from '@react-navigation/native';
import { createStore, combineReducers, applyMiddleware } from 'redux'

import { Provider } from 'react-redux'
import reducers from '@store/reducers'

import thunk from 'redux-thunk'


const App = () => {
  const middleware = [thunk]
  const reducer = combineReducers(reducers)
  const store = createStore(reducer, applyMiddleware(...middleware))
  return(
    <Provider store={store} >
    <NavigationContainer>
      <DrawerNavigator
      />
    </NavigationContainer>
    </Provider>
  )
}
export default App;
