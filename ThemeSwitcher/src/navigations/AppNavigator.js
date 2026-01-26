import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { selectThemeColors } from '../store/themeSlice';
import BottomTabNavigator from './BottomTabNavigator';
import NestedScreen from '../screens/NestedScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const colors = useSelector(selectThemeColors);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#FFFFFF',
        }}
      >
        <Stack.Screen 
          name="MainTabs" 
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Nested" 
          component={NestedScreen}
          options={{ title: 'Nested Screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;