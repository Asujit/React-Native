import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Scroll() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Scroll View Component</Text>
      <ScrollView
        style={styles.scroll}
        nestedScrollEnabled={true}
        contentContainerStyle={styles.containt}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        {[...Array(20)].map((_, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.boxtext}>{index + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    textDecorationLine: 'underline',
  },
  scroll: {
    height: 200,
    backgroundColor: '#f0f0f0',
  },
  containt: {
    padding: 20,
  },
  box: {
    height: 40,
    marginBottom: 10,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignContent: 'center',
  },
  boxtext: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
