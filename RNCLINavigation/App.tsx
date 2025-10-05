import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import RootNavigator from './src/RootNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  )
}
