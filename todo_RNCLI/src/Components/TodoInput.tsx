import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

interface TodoInputProps{
    onAddTodo :(text:string) => void
}

export default function TodoInput({onAddTodo} : TodoInputProps) {
  const [text, setText] = useState('');
  const handleAddTodo =()=>{
    if(text.trim()){
        onAddTodo(text.trim())
        setText('')
    }
  }
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter task"
        style={styles.input}
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity style={styles.btn} onPress={handleAddTodo}>
        <Text style={styles.text}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '100%',
    flexDirection:'row',
    justifyContent:'flex-end'
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    height: 50,
    padding: 5,
    marginRight: '2%',
    width:'80%',
    borderRadius:10
  },
  btn:{
    height:50,
    backgroundColor:'gray',
    width:'18%',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    color:"#fff",
    fontWeight:"bold",
    // fontSize:12
  }
});
