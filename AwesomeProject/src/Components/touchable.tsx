import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

export default function Touchable() {
  const [count, setCount] = useState(0);
  const [high, setHigh] = useState(0);
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>touchable</Text>

      <TouchableOpacity
        style={[styles.btn, { backgroundColor: 'navy' }]}
        onPress={() => setCount(count + 1)}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
          Opacity {count}
        </Text>
      </TouchableOpacity>
      <TouchableHighlight
        style={[styles.btn, { backgroundColor: 'orange' }]}
        onPress={() => setHigh(high + 1)}
        underlayColor={"gray"}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
          Highlight {high}
        </Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});
