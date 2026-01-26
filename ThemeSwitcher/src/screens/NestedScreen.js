import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { selectThemeColors, selectThemeMode } from '../store/themeSlice';

const NestedScreen = ({ navigation }) => {
  const colors = useSelector(selectThemeColors);
  const themeMode = useSelector(selectThemeMode);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>
        Nested Screen
      </Text>
      
      <Text style={[styles.info, { color: colors.text }]}>
        Current theme: {themeMode}
      </Text>
      
      <Text style={[styles.info, { color: colors.text }]}>
        Accessible from Home and Profile
      </Text>
      
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
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
  info: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    width: 150,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default NestedScreen;