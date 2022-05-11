import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/store/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
      <Provider store={store}>
          <NavigationContainer>
         {/* Rest of your app code */}
         </NavigationContainer>
        </Provider>
    );
}
