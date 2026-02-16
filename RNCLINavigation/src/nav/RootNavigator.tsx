import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import Profile from '../screens/Profile';
import TabsNav from './TabsNav';
import DrawerNav from './DrawerNav';

const Stack = createStackNavigator();

const RootNavigator = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={DrawerNav} />
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
};

export default RootNavigator ;