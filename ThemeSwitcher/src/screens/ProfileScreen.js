import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { selectThemeColors, selectThemeMode, toggleTheme } from '../store/themeSlice';

const ProfileScreen = ({ navigation }) => {
  const colors = useSelector(selectThemeColors);
  const themeMode = useSelector(selectThemeMode);
  const dispatch = useDispatch();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>
        Profile Screen
      </Text>
      
      <View style={styles.themeRow}>
        <Text style={[styles.label, { color: colors.text }]}>
          Dark Mode
        </Text>
        <Switch
          value={themeMode === 'dark'}
          onValueChange={() => dispatch(toggleTheme())}
          trackColor={{ false: '#767577', true: colors.primary }}
          thumbColor={themeMode === 'dark' ? colors.primary : '#f4f3f4'}
        />
      </View>
      
      <Text style={[styles.info, { color: colors.text }]}>
        Profile content here
      </Text>
      
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={() => navigation.navigate('Nested')}
      >
        <Text style={styles.buttonText}>Go to Nested Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
  },
  themeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 15,
  },
  label: {
    fontSize: 18,
  },
  info: {
    fontSize: 16,
    marginBottom: 40,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ProfileScreen;