import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";


export default function Basic(){
    const [count, setCount] =useState<number>(0);
    return(
            <View style={style.container}>
            <Text style={style.text}>Hello</Text>
            <Image style={style.img} source={{uri:'https://picsum.photos/200/300'}}/>
            <Image style={style.img} source={require('../../assets/escanor.jpg')}/>
            <Button title="Click Me"onPress={() => setCount(count +1)} color={"black"}/>
            <Text>Count is {count}</Text>
        
            </View>
    )
}


const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  text:{
    fontWeight:"bold",
    fontSize:20,
    alignSelf:'center'
  },
  img:{
    marginTop:'5%',
    height:"40%",
    width:'80%'
  }
})
