import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Todo } from '../types'
import $$ProgressBarAndroidNativeComponent from 'react-native/types_generated/Libraries/Components/ProgressBarAndroid/ProgressBarAndroidNativeComponent'

interface TodoListitems {
    todo : Todo;
    onDelete : () =>void;
}

export default function TodoItem({todo, onDelete}:TodoListitems) {
    //console.log(todo, "todo item component")
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.todotext}>
        <Text style={[styles.text, todo?.completed && styles.completeText]}>{todo.text}</Text>
      </TouchableOpacity>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={[styles.btn,{backgroundColor:"#5384ffff"}]}>
            <Text style={{color:"#fff", fontWeight:"bold"}}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, {backgroundColor:"#f41d1dff"}]} onPress={onDelete}>
            <Text style={{color:"#fff", fontWeight:"bold"}}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:'center',
        paddingVertical:20,
        borderBottomWidth:1,
        borderBottomColor:"#a8a6a6ff",
        width:"100%",
        justifyContent:"space-between"
    },
    todotext:{
        flex:1
    },
    text:{
        fontSize:18,
        fontWeight:"bold",
        color:"#000"
    },
    completeText:{
        textDecorationLine:"line-through",
        color:"#888"
    },
    btnContainer:{
        flexDirection:"row",
        justifyContent:"space-around",
        width:"30%"
    },
    btn:{
        width:'47%',
        borderRadius:5,
        alignItems:"center",
        height:30,
        justifyContent:"center",
        borderWidth:0.5,
        borderColor:"#868585ff"
    }
})