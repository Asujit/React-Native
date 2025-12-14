// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// export default function index() {
//   return (
//     <View style={{flex:1,justifyContent:'space-around', alignItems:"stretch",flexDirection:'row',height:200, backgroundColor:'yellow'}}>
//       <View style={{backgroundColor:"red",flex:1, justifyContent:"center",}}>
//         <Text>1</Text>
//       </View>
//       <View style={{backgroundColor:"green",flex:0.5, justifyContent:"center",}}>
//         <Text>2</Text>
//       </View>
//       <View style={{backgroundColor:"blue",flex:0.25, justifyContent:"center",}}>
//         <Text>3

//         </Text>
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})


import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, {useState} from 'react'

export default function index() {
  const [enteredText, setEnteredText] = useState('');

  function goalsInput(text:string){
    setEnteredText(text)
    // console.log(text)
  }

  function addGoals(){
    console.log(enteredText)
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Career Goals' onChangeText={goalsInput}/>
        <Button title='Add' onPress={addGoals}/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goals ...</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    flex:1,
    padding:15
  },
  inputContainer:{
    flex:1,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  input:{
    borderWidth:1,
    borderColor:"#000",
    width:'80%'
  },
  goalsContainer:{
    flex:5
  }
})