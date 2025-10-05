import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home';
import StackNavigation from './Components/Stack/StackNavigation';
import TabNavigation from './Components/tab/TabNavigation';
import DrawerNavigation from './Components/drawer/DrawerNavigation';

export type RootStackParams ={
    Home : undefined;
    StackDemo : undefined;
    TabsDemo : undefined;
    DrawerDemo : undefined;
}


const Stack = createStackNavigator<RootStackParams>();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name="StackDemo" component={StackNavigation} />
        <Stack.Screen name="TabsDemo" component={TabNavigation} />
        <Stack.Screen name="DrawerDemo" component={DrawerNavigation} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})