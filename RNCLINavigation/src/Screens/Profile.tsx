import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { custom } from '../context/UserContext';

export default function Profile() {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState(null);
  const {name, newName} = custom();

  const submit = async () => {
    try {
      const api = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: title,
        body: body,
        userId: 5,
      });
      setResponse(api.data);
      setTitle('');
      setBody('');
    } catch (error) {
      console.log(error);
    } finally {
      console.log('Exit !!');
    }
  };

  return (
    <View style={styles.container}>
      {/* Navigation button */}
      <Pressable
        style={({ pressed }) => [styles.navButton, pressed && styles.navButtonPressed]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.navButtonText}>← Back</Text>
      </Pressable>

      <Text>Hello, {name}</Text>

      {/* Input fields */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter title"
          placeholderTextColor="#999"
          value={title}
          onChangeText={setTitle}
        />

        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Enter body"
          placeholderTextColor="#999"
          value={body}
          onChangeText={setBody}
          multiline
          numberOfLines={4}
        />
      </View>

      {/* Submit button */}
      <Pressable
        style={({ pressed }) => [styles.submitButton, pressed && styles.submitButtonPressed]}
        onPress={submit}
      >
        <Text style={styles.submitButtonText}>Create Post</Text>
      </Pressable>

      {/* Response display */}
      {response && (
        <View style={styles.responseContainer}>
          <Text style={styles.responseLabel}>Created Post:</Text>
          <Text style={styles.responseText}>ID: {response.id}</Text>
          <Text style={styles.responseText}>Title: {response.title}</Text>
          <Text style={styles.responseText}>Body: {response.body}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  navButton: {
    alignSelf: 'flex-start',
    marginBottom: 30,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#6c757d',
    borderRadius: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  navButtonPressed: {
    backgroundColor: '#545b62',
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  submitButtonPressed: {
    backgroundColor: '#0056b3',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  responseContainer: {
    backgroundColor: '#d1ecf1',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#bee5eb',
  },
  responseLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0c5460',
    marginBottom: 8,
  },
  responseText: {
    fontSize: 16,
    color: '#0c5460',
    marginBottom: 4,
  },
});