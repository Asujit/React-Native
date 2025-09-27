import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

export default function TextInputComp() {
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>TextInput</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter text"
        placeholderTextColor={'#000'}
        value={value}
        onChangeText={setValue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10%',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  input: {
    height: '20%',
    width: '80%',
    borderColor: '#000',
    borderWidth: 1,
  },
});
