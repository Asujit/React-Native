import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

export default function App(){

  const [counter, setCounter] = useState(0);

  const increament= () =>{
    setCounter(counter+1);
  };

  const decrement=() =>{
    setCounter(counter-1);
  };

  const multiply=() =>{
    setCounter(counter*2);
  };

  const divide=() =>{
    setCounter(counter/2);
  };
  return(
    <View style={styles.container}>
      <Text>{counter}</Text>

      <View style={styles.btnContainer}>
        <Pressable
        onPress={increament}
        >
        <Text>Add</Text>
        </Pressable>

        <Pressable
        onPress={decrement}
        >
        <Text>Mius</Text>
        </Pressable>

        <Pressable
        onPress={multiply}
        >
        <Text>Multiply</Text>
        </Pressable>

        <Pressable
        onPress={divide}
        >
        <Text>Divide</Text>
        </Pressable>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"cyan",
    padding: 20
  },
  btnContainer:{
    flexDirection: 'row',
    gap: 10,
    
  }
})