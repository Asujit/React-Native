import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function Basics() {
  const [count, setCount] = useState<number>(0);
  return (
    <View>
      <Text style={style.text}>Hello</Text>
      <Image
        style={style.img}
        source={{ uri: 'https://picsum.photos/200/300' }}
      />
      <Image style={style.img} source={require('../../assets/escanor.jpg')} />
      <Image style={style.img} source={require('../../assets/escanor.jpg')} />
      <Image style={style.img} source={require('../../assets/escanor.jpg')} />
      <Button
        title="Click Me"
        onPress={() => setCount(count + 1)}
        color={'black'}
      />
      <Text>Count is {count}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
  },
  img: {
    marginTop: '5%',
    height: 300,
    width: 200,
  },
});
