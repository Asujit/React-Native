import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Profile() {
    const navigation = useNavigation();

  return (
    <View>
          <Pressable onPress={() => navigation.goBack()}>
            <Text>Profile</Text>
          </Pressable>
        </View>
  )
}

const styles = StyleSheet.create({})