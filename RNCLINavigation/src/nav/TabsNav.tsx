import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import Profile from '../screens/Profile';
import Animation from '../screens/Animation';

const Tabs = createBottomTabNavigator();

const TabsNav = () =>{
    return(
        <Tabs.Navigator screenOptions={{headerShown:false}}>
            <Tabs.Screen name="Home" component={Home} />
            <Tabs.Screen name="Menu" component={Menu} />
            <Tabs.Screen name="Profile" component={Profile} />
            <Tabs.Screen name="Animation" component={Animation} />
        </Tabs.Navigator>
    )
};

export default TabsNav;