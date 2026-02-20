import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootNavigator from './src/nav/RootNavigator';
import { UserProvider } from './src/context/UserContext';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <UserProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </UserProvider>
    </Provider>
  );
}
