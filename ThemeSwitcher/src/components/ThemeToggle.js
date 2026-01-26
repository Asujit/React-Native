import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme, selectThemeMode } from '../store/themeSlice';
import { Ionicons } from '@expo/vector-icons';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector(selectThemeMode);

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => dispatch(toggleTheme())}
      activeOpacity={0.7}
    >
      <Ionicons
        name={themeMode === 'light' ? 'moon' : 'sunny'}
        size={24}
        color={themeMode === 'light' ? '#000' : '#FFD700'}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
});

export default ThemeToggle;