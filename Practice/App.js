import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
  TextInput,
  Button,
  Alert,
  Switch,
  ActivityIndicator,
  Modal
} from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [comment, setComment] = useState('')
  const [enabled, setEnabled] = useState(false)
  const [modal, setModal] = useState(false)

  const toggle = () => {
    setEnabled(previous => !previous)
  }

  const DATA = [
    { id: 1, title: "First" },
    { id: 2, title: "Second" },
    { id: 3, title: "Third" },
    { id: 4, title: "Fourth" },
    { id: 5, title: "Fifth" },
    { id: 6, title: "Sixth" },
    { id: 7, title: "Seventh" },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );

  const btnPressed = () =>{
    Alert.alert('Button Pressed')
  }
  return (
    // <ScrollView style={styles.container}>
    //   <View style={styles.first}>
    //     <View style={styles.b1}>

    //     </View>
    //     <View style={styles.b2}>

    //     </View>
    //   </View>
    //   <View style={styles.b3}>
    //     <Image source={{uri:'https://reactnative.dev/img/tiny_logo.png'}} style={styles.img}/>
    //     <Image source={require('../Practice/assets/icon.png')} style={styles.img}/>
    //   </View>
    //   <View style={styles.first}>
    //     <View style={styles.b2}>

    //     </View>
    //     <View style={styles.b1}>

    //     </View>
    //   </View>
    //   <View style={styles.b3}>
    //     <Image source={{uri:'https://reactnative.dev/img/tiny_logo.png'}} style={styles.img}/>
    //     <Image source={require('../Practice/assets/icon.png')} style={styles.img}/>
    //   </View>
    // </ScrollView>

    // <View style={styles.container}>
    //   <ImageBackground
    //   source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}
    //   >
    //   <FlatList
    //     data={DATA}
    //     renderItem={renderItem}
    //     keyExtractor={item => item.id}
    //   />
    //   </ImageBackground>
    // </View>

    // <View style={styles.container}>
    //   <TouchableHighlight onPress={() => setCount(count + 1)} style={styles.btn} underlayColor={'#5044d3ff'}>
    //     <Text style={styles.title}>Addition</Text>
    //   </TouchableHighlight>

    //   <TouchableOpacity onPress={() => setCount(count - 1)} style={styles.btn}>
    //     <Text style={styles.title}>Substraction</Text>
    //   </TouchableOpacity>

    //   <Pressable onPress={() => setCount(count * 2)} style={styles.btn}>
    //     <Text style={styles.title}>Multiplication</Text>
    //   </Pressable>

    //   <TouchableOpacity onPress={() => setCount(count / 2)} style={styles.btn}>
    //     <Text style={styles.title}>Dividation</Text>
    //   </TouchableOpacity>

    //   <View>
    //     <Text style={styles.count}>{count}</Text>
    //   </View>
    // </View>

    <View style={styles.container}>
      {/* <TextInput 
      placeholder="Type here..."
      value={text}
      onChangeText={setText}
      keyboardType="default"
      // secureTextEntry={!}
      maxLength={10}
      style={styles.input}
      />

      <Text style={styles.itemText}>Current Text is {text}</Text>

      <TextInput
        value={comment}
        onChangeText={setComment}
        multiline={true}
        numberOfLine={5}
        placeholder="Write comment here.."
        style={styles.input}
      />

      <Text style={styles.itemText}>Your Comment is {comment}</Text>

      <Button
        title='Press me'
        onPress={btnPressed}
      />

      <Switch 
      value={enabled}
      onValueChange={toggle}
      />

      <ActivityIndicator /> */}

      <Pressable 
      onPress={() => setModal(true)}
      style={styles.mb} 
      >
        <Text style={styles.modalText}>Open Modal</Text>
      </Pressable>

      <Modal 
        visible={modal}
        animationType="slide"
        onRequestClose={() => setModal(false)}
      >
        <View style={styles.mview}>
          <Text style={styles.mText}>This is the Modal</Text>
          <Pressable style={styles.mb} onPress={() => setModal(false)}>
            <Text style={styles.modalText}>Close the Modal</Text>
          </Pressable>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  first: {
    flexDirection: "row",
    height: 300,
    width: "100%",
  },
  b1: {
    width: "50%",
    height: "100%",
    backgroundColor: "red",
  },
  b2: {
    width: "50%",
    height: "100%",
    backgroundColor: "yellow",
  },
  b3: {
    height: 400,
    width: "100%",
    backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    height: "80%",
    width: "45%",
  },
  item: {
    height: 400,
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
  },
  itemText: {
    fontWeight: "bold",
  },
  btn: {
    width: "100%",
    height: "20%",
    borderWidth: 1,
    borderRadius: 20,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "red",
    fontWeight: "bold",
    fontSize: 16,
  },
  count: {
    fontWeight: "bold",
    fontSize: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 10,
    width: '100%'
  },
  mview:{
    width: '70%',
    height: '40%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth:1,
    borderRadius:10,
    alignItems: 'center'
  },
  mText:{
    fontWeight:"bold",
    fontSize:20
  },
  mb:{
    width:'40%',
    height:'20%',
    margin:20,
    borderWidth:1,
    borderRadius:10,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'red'
  },
  modalText:{
    color:'#fff'
  }
});
