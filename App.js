import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/store/store';
import { Provider } from 'react-redux';
import Navigation from './src/navigation'

export default function App() {
  return (
      //<Provider store={store}>
          <NavigationContainer>
         <Navigation/>
         </NavigationContainer>
       // </Provider>
    );
}
