import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { Todo } from '../types';

interface TodoEditProps {
  todo: Todo;
  onSave: (newText: string) => void;
  onCancel: () => void;
}

export default function TodoEdit({ todo, onSave, onCancel }: TodoEditProps) {
  const [text, setText] = useState(todo?.text);

  const handleSave = () =>{
    if(text.trim()){
        onSave(text.trim());
    }
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={text} onChangeText={setText} />
      <View style={styles.btnContainer}>
        <TouchableOpacity
        onPress={handleSave}
          style={[styles.btn, { backgroundColor: '#c4c5c8ff' }]}
        >
          <Text style={{ color: '#294af1ff', fontWeight: 'bold' }}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onCancel}
          style={[styles.btn, { backgroundColor: '#c4c5c8ff' }]}
        >
          <Text style={{ color: '#f10505ff', fontWeight: 'bold' }}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '30%',
  },
  btn: {
    width: '47%',
    borderRadius: 5,
    alignItems: 'center',
    height: 30,
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#868585ff',
  },
});
