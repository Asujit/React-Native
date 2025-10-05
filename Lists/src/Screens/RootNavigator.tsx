import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import FlatListScreen from './FlatListScreen';
import SectionListScreen from './SectionListScreen';



export type RootStack = {
    Home : undefined;
    FlatListScreen : undefined;
    SectionListScreen : undefined;
}

const Stack = createStackNavigator<RootStack>();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='FlatListScreen' component={FlatListScreen} />
        <Stack.Screen name='SectionListScreen' component={SectionListScreen} />
    </Stack.Navigator>
  )
}
