import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Flexes() {
  return (
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Horizontal Boxes</Text>
      <View style={[styles.row]}>
        <View style={styles.red} />
        <View style={styles.green} />
        <View style={styles.blue} />
      </View>
       <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom:50 }}>Vertical Boxes</Text>
      <View style={[styles.column]}>
        <View style={styles.red} />
        <View style={styles.green} />
        <View style={styles.blue} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  column:{
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  red: {
    backgroundColor: 'red',
    borderRadius: 20,
    height: 50,
    width: 50,
  },
  green: {
    backgroundColor: 'green',
    borderRadius: 20,
    height: 50,
    width: 50,
  },
  blue: {
    backgroundColor: 'blue',
    borderRadius: 20,
    height: 50,
    width: 50,
  },
});
