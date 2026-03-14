import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import Profile from '../screens/Profile';
import Animation from '../screens/Animation';
import TabsNav from './TabsNav';
import DrawerNav from './DrawerNav';

const Stack = createStackNavigator();

const RootNavigator = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} id="RootStack">
            <Stack.Screen name="Home" component={DrawerNav} />
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Animation" component={Animation} />
        </Stack.Navigator>
    )
};

export default RootNavigator ;