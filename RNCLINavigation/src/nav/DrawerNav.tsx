import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, StyleSheet, Switch } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggleTheme } from '../store/themeSlice';
import TabsNav from './TabsNav';
import Menu from '../screens/Menu';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={[
        styles.drawerContent,
        { backgroundColor: isDarkMode ? '#333' : '#fff' },
      ]}
    >
      <View style={[styles.drawerHeader, isDarkMode && styles.drawerHeaderDark]}>
        <View style={styles.userAvatar}>
          <Text style={styles.avatarText}>JD</Text>
        </View>
        <Text style={[styles.userName, isDarkMode && styles.textLight]}>John Doe</Text>
        <Text style={[styles.userEmail, isDarkMode && styles.textLight]}>
          john.doe@example.com
        </Text>
      </View>

      <View style={styles.drawerItems}>
        <DrawerItemList {...props} />
      </View>

      <View style={styles.toggleContainer}>
        <MaterialIcons
          name={isDarkMode ? 'dark-mode' : 'light-mode'}
          size={24}
          color={isDarkMode ? '#fff' : '#333'}
        />
        <Text style={[styles.toggleLabel, isDarkMode && styles.textLight]}>
          Dark Mode
        </Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => dispatch(toggleTheme())}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>

      <DrawerItem
        label="Logout"
        icon={({ color, size }) => <MaterialIcons name="logout" color={color} size={size} />}
        onPress={() => alert('Logout pressed')}
        labelStyle={[styles.logoutLabel, isDarkMode && styles.textLight]}
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
        drawerActiveTintColor: '#0066cc',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: { fontSize: 16, marginLeft: -20 },
        drawerStyle: {
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
          drawerIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />,
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
          drawerIcon: ({ color, size }) => <MaterialIcons name="person" color={color} size={size} />,
          title: 'Profile',
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContent: { flex: 1 },
  drawerHeader: {
    backgroundColor: '#0066cc',
    padding: 20,
    paddingTop: 40,
    marginBottom: 10,
    borderBottomRightRadius: 20,
  },
  drawerHeaderDark: { backgroundColor: '#1a3a5c' },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarText: { fontSize: 24, fontWeight: 'bold', color: '#0066cc' },
  userName: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  userEmail: { color: '#e0e0e0', fontSize: 14 },
  drawerItems: { flex: 1, paddingTop: 10 },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop: 10,
  },
  toggleLabel: { flex: 1, fontSize: 16, marginLeft: 16, color: '#333' },
  textLight: { color: '#fff' },
  logoutLabel: { fontSize: 16, marginLeft: 20 },
});

export default DrawerNav;