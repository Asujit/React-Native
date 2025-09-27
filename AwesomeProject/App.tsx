import React, { useState } from "react";
import {StyleSheet, View } from "react-native";
import Basic from "./src/Components/Basics";



export default function App(): React.JSX.Element{
  return(
    <View style={style.container}>
      <Basic/>
    </View>
  )
}


const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
})
