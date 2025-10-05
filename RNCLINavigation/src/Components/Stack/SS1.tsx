import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParams } from './StackNavigation';

type ScreenOneProps = StackNavigationProp<StackParams, 'Screen1'>;

export default function SS1() {
  const navigation = useNavigation<ScreenOneProps>();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Screen2', { id: 5, name: 'Chips' })}
      >
        <Text>Navigate to Screen 2</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
