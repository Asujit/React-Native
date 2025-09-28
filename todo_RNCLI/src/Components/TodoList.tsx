import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Todo } from '../types';
import TodoItem from './TodoItem';

interface TodoListProps {
  todoList: Todo[];
  onDeleteTodo: (id: string) => void;
}

export default function TodoList({ todoList, onDeleteTodo }: TodoListProps) {
  return (
    <ScrollView style={styles.container}>
      {todoList.map(todo => (
        <TodoItem
          key={todo.id}
          onDelete={() => onDeleteTodo(todo.id)}
          todo={todo}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
