import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TodoInput from './src/Components/TodoInput'
import { Todo } from './src/types';
import TodoList from './src/Components/TodoList';
import TodoItem from './src/Components/TodoItem';

export default function App() {

  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo =(text:string) =>{
    console.log(text);
    setTodoList([...todoList, {
      id : Date.now().toString(),
      text,
      completed : false
    }])
  }

  console.log(todoList)

  const deleteTodo = (id: string)=>{
    console.log("delete id:", id);
    setTodoList(todoList.filter(item => item.id !== id));
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>TODO App</Text>
      <TodoInput onAddTodo={addTodo}/>
      <TodoList onDeleteTodo={deleteTodo} todoList={todoList}/>
      {/* <TodoItem todo={}/> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    padding:20
  },
  header:{
    fontWeight:'bold',
    fontSize:24,
    marginTop:15
  }
})