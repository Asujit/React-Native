import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootNavigator from './src/nav/RootNavigator';
import { UserProvider } from './src/context/UserContext';

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </UserProvider>
  );
}
