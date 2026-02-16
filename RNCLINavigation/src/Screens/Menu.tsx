import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Menu() {
    const navigation = useNavigation();

  return (
    <View>
          <Pressable onPress={() => navigation.navigate("Profile")}>
            <Text>Menu</Text>
          </Pressable>
        </View>
  )
}

const styles = StyleSheet.create({})