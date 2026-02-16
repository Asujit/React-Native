import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import Profile from '../screens/Profile';
import TabsNav from './TabsNav';

const Drawer = createDrawerNavigator();

const DrawerNav = () =>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabsNav} />
            <Drawer.Screen name="Menu" component={Menu} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    )
}

export default DrawerNav;