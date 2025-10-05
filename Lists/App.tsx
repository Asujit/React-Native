import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/Screens/RootNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  )
}
