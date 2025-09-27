import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Styling() {
  return (
    <View style={[styles.combine,{borderColor:'purple',height:200,marginBottom:20,backgroundColor:'#DFF1F7',}]}>
      <Text style={[styles.text,{color:'red'}]}>Styling</Text>
      <View style={[styles.combine,{borderColor:'blue',height:30,marginBottom:20,backgroundColor:'#ffe607ff'}]}>
        <Text style={[styles.text,{color:'green'}]}>Styling</Text>
      </View>
      <View style={[styles.combine,{borderColor:'black',height:30,marginBottom:20,backgroundColor:'#074d65ff'
        
      }]}>
        <Text style={[styles.text,{color:'#E33DF2'}]}>Styling</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    combine:{
        borderWidth:2,
        width:"100%",
        justifyContent:'center'
    },
    text:{
        fontWeight:'bold',
        alignSelf:"center"
    }
})