import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabsOne from './TabsOne';
import TabsTwo from './TabsTwo';

type BottomTabsScreen ={
    TabScreenOne : undefined;
    TabScreenTwo : undefined;
}


const BottomTab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <BottomTab.Navigator>
        <BottomTab.Screen name='TabScreenOne' component={TabsOne} />
        <BottomTab.Screen name='TabScreenTwo' component={TabsTwo} />
    </BottomTab.Navigator>
  )
}

const styles = StyleSheet.create({})