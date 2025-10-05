import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import {RootStackParams} from '../RootNavigator'


type HomeNavigationProps = StackNavigationProp<RootStackParams>

export default function Home() {
  const navigation = useNavigation<HomeNavigationProps>();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('StackDemo')}>
        <Text>Stack Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('TabsDemo')}>
        <Text>Tabs Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('DrawerDemo')}>
        <Text>Drawer Demo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
