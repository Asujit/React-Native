import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { custom } from '../context/UserContext';

export default function Menu() {
  const navigation = useNavigation();
  const [id, setId] = useState('');
  const [newtitle, setNewtitle] = useState('');
  const [response, setResponse] = useState(null);
  const {name, newName} = custom();

  const upload = async () => {
    try {
      const api = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        title: newtitle,
      });
      setResponse(api.data);
      setNewtitle('');
      setId('');
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
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.navButtonText}>Profile</Text>
      </Pressable>
      

      <Text>Hello , {name}</Text>

      {/* Input fields */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter post ID"
          placeholderTextColor="#999"
          value={id}
          onChangeText={setId}
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="Enter new title"
          placeholderTextColor="#999"
          value={newtitle}
          onChangeText={setNewtitle}
        />
      </View>

      {/* Update button */}
      <Pressable
        style={({ pressed }) => [styles.updateButton, pressed && styles.updateButtonPressed]}
        onPress={upload}
      >
        <Text style={styles.updateButtonText}>Update Post</Text>
      </Pressable>

      {/* Response display */}
      {response && (
        <View style={styles.responseContainer}>
          <Text style={styles.responseLabel}>Updated Post:</Text>
          <Text style={styles.responseText}>ID: {response.id}</Text>
          <Text style={styles.responseText}>Title: {response.title}</Text>
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
  updateButton: {
    backgroundColor: '#28a745',
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
  updateButtonPressed: {
    backgroundColor: '#218838',
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  responseContainer: {
    backgroundColor: '#d4edda',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#c3e6cb',
  },
  responseLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#155724',
    marginBottom: 8,
  },
  responseText: {
    fontSize: 16,
    color: '#155724',
    marginBottom: 4,
  },
});