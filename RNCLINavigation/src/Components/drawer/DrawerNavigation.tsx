import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerOne from './DrawerOne';
import DrawerTwo from './DrawerTwo';

type drawerScreens ={
    ScreenOne : undefined;
    ScreenTwo : undefined;
}

const Drawer = createDrawerNavigator<drawerScreens>();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name='ScreenOne' component={DrawerOne} />
        <Drawer.Screen name='ScreenTwo' component={DrawerTwo} />
    </Drawer.Navigator>
  )
}

