import { StatusBar } from 'expo-status-bar';
import React from 'react';
import StackNavigator from './src/navigation/StackNavigator';
import {Provider} from 'react-redux';
import store from './src/redux/store'
function App() {
  return (
    <>
      <StackNavigator/>
    </>
  );
}


export default () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}