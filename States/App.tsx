import React,{useState} from 'react';
import {View, Text, Pressable, StyleSheet, TextInput} from 'react-native';

export default function App(){

//   const [count, setCount] = useState(0);

  const [name, setName] = useState('');
  const [greet, Setgreet] = useState('');

  const handleSubmit = () =>{
    Setgreet(`Hello ${name || "Stranger"}`)
  }

  return(
    <View style={styles.container}>
{/* //       <Text>Current Count is {count}</Text>
//       <Pressable onPress={() => setCount(count + 1)}>
//         <Text>Press +</Text>
//       </Pressable>
//       <Pressable onPress={() => setCount(count - 1)}>
//         <Text>Press -</Text>
//       </Pressable> */}

      <TextInput 
      placeholder='Write here'
      value={name}
      onChangeText={setName}
      />

      <Pressable onPress={handleSubmit}>
        <Text> press</Text>
      </Pressable>

      <Text>{greet}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})


