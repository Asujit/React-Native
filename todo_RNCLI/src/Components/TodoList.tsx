import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Todo } from '../types';
import TodoItem from './TodoItem';

interface TodoListProps {
  todoList: Todo[];
  onDeleteTodo: (id: string) => void;
  onToggleTodo: (id: string) => void;
  onEditTodo: (id: string, newText: string) => void;
}

export default function TodoList({ todoList, onDeleteTodo, onToggleTodo, onEditTodo }: TodoListProps) {
  return (
    <ScrollView style={styles.container}>
      {todoList.map(todo => (
        <TodoItem
          key={todo.id}
          onDelete={() => onDeleteTodo(todo?.id)}
          onToggle ={() => onToggleTodo(todo?.id)}
          onEdit ={newtext => onEditTodo(todo?.id, newtext)}
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
