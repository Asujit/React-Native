import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Image, StyleSheet } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import Profile from '../screens/Profile';
import TabsNav from './TabsNav';

const Drawer = createDrawerNavigator();

// Custom drawer content component
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
      {/* Header section with user info */}
      <View style={styles.drawerHeader}>
        <View style={styles.userAvatar}>
          <Text style={styles.avatarText}>JD</Text>
        </View>
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userEmail}>john.doe@example.com</Text>
      </View>

      {/* Default drawer items (Home, Menu, Profile) */}
      <View style={styles.drawerItems}>
        <DrawerItemList {...props} />
      </View>

      {/* Additional custom item (e.g., Logout) */}
      <DrawerItem
        label="Logout"
        icon={({ color, size }) => <MaterialIcons name="logout" color={color} size={size} />}
        onPress={() => alert('Logout pressed')}
        labelStyle={styles.logoutLabel}
      />
    </DrawerContentScrollView>
  );
}

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#e6f0ff',
        // headerShown: false,
        drawerActiveTintColor: '#0066cc',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          fontSize: 16,
          marginLeft: -20, // adjust icon spacing
        },
        drawerStyle: {
          backgroundColor: '#fff',
          width: 280,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          shadowColor: '#000',
          shadowOffset: { width: 2, height: 0 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={TabsNav}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
          title: 'Home',
        }}
      />
      <Drawer.Screen
        name="Menu"
        component={Menu}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="restaurant-menu" color={color} size={size} />
          ),
          title: 'Menu',
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
          title: 'Profile',
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#0066cc',
    padding: 20,
    paddingTop: 40,
    marginBottom: 10,
    borderBottomRightRadius: 20,
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0066cc',
  },
  userName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userEmail: {
    color: '#e0e0e0',
    fontSize: 14,
  },
  drawerItems: {
    flex: 1,
    paddingTop: 10,
  },
  logoutLabel: {
    fontSize: 16,
    marginLeft: 20,
  },
});

export default DrawerNav;