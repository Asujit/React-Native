import { Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'

export default function TouchableScreen() {

    const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>TouchableScreen</Text>
      <TouchableWithoutFeedback onPress={() => setCount(count+1)} >
        <View style={styles.btn}>
            <Text style={{color:"#ffffffff", fontSize:16, fontWeight:'bold'}}>Addition</Text>
        </View>
      </TouchableWithoutFeedback>
      <View>
        <Text style={{fontSize: 24, fontWeight:"bold",color:"purple"}}>{count}</Text>
      </View>
      <TouchableWithoutFeedback onPress={() => setCount(count-1)} >
        <View style={styles.btn}>
            <Text style={{color:"#fff", fontSize:16, fontWeight:'bold'}}>Substraction</Text>
        </View>
      </TouchableWithoutFeedback>

      <Pressable
      onPress={()=> setCount(count*2)}
      style={({pressed}) =>[
        styles.btn,
        {
            backgroundColor: pressed ? '#fb542b' : '#effb2b',
        }
      ]}
      >
        {({pressed}) => <Text style={[styles.btnText,{color:pressed ? "#000" : "red"}]}> {pressed ? "Pressed Now" : "Pressable"}</Text>}
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center"
    },
    header :{
        fontWeight:"bold",
        fontSize: 24
    },
    btn: {
        marginVertical: '10%',
        backgroundColor: "red",
        padding: 20,
        borderWidth:0.5,
        borderRadius: 10,
        width:'50%',
        alignItems:"center"
    },
    btnText:{
        fontSize:20,
        fontWeight:"bold"
    }
})