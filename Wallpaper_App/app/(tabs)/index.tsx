import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import First from '../First';
import Second from '../Second';
import { SafeAreaView } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function index() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Fisrt" component={First} />
      <Tab.Screen name="Second" component={Second} />
    </Tab.Navigator>
  );
}