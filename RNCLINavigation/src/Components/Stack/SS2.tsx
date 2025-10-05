import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParams } from './StackNavigation';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

type ScreenTwoProps = StackNavigationProp<StackParams, 'Screen2'>;


type ScreenTwoRouteProps = RouteProp<StackParams, 'Screen2'>

export default function SS2() {
    const navigation = useNavigation<ScreenTwoProps>();
    const route = useRoute<ScreenTwoRouteProps>();
  return (
    <View>
      <Text>SS2</Text>
      <Text>Item no.{route.params.id}</Text>
      <Text>Name of Item is {route.params.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
