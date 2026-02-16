import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import Profile from '../screens/Profile';

const Tabs = createBottomTabNavigator();

const TabsNav = () =>{
    return(
        <Tabs.Navigator screenOptions={{headerShown:false}}>
            <Tabs.Screen name="Home" component={Home} />
            <Tabs.Screen name="Menu" component={Menu} />
            <Tabs.Screen name="Profile" component={Profile} />
        </Tabs.Navigator>
    )
};

export default TabsNav;