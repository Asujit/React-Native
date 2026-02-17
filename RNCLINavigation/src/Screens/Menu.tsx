import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native'
import React,{useState} from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'

export default function Menu() {
    const navigation = useNavigation();
    const [id, setId] = useState('');
    const [newtitle, setNewtitle] = useState('');
    const [response, setResponse ] = useState(null);

    const update = async() =>{
      try{
        const api = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,{
          title:newtitle
        })
        setResponse(api.data);
        setNewtitle('');
        setId('');  
      }catch(error){
        console.log(error)
      }finally{
        console.log("Exit !!")
      }
    }



  return (
    <View>
          <Pressable onPress={() => navigation.navigate("Profile")}>
            <Text>Menu</Text>
          </Pressable>

          <TextInput
          placeholder='enter id here'
          value={id}
          onChangeText={setId}
          keyboardType='numeric'
          />

          <TextInput
          placeholder='enter title here'
          value={newtitle}
          onChangeText={setNewtitle}
          />

          <Pressable onPress={update}>
            <Text>Update</Text>
          </Pressable>

          <View>
            <Text>Id: {response?.id}</Text>
            <Text>Title: {response?.title}</Text>
            {/* <Text>Body: {response?.body}</Text> */}
          </View>
        </View>
  )
}

const styles = StyleSheet.create({})