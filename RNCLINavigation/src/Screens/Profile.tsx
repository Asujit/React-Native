import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React,{useState} from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState(null);

  const submit = async() =>{
    try{
      const api = await axios.post('https://jsonplaceholder.typicode.com/posts',{
        title:title,
        body:body,
        userId:5
      })
      setResponse(api.data);
      setTitle('');
      setBody('');
    }catch(error){
      console.log(error)
    }finally{
      console.log("Exit !!")
    }
  };


  return (
    <View>
      <Pressable onPress={() => navigation.goBack()}>
      <Text>Profile</Text>
      </Pressable>

      <TextInput
      placeholder='enter title here'
      value={title}
      onChangeText={setTitle}
      />

      <TextInput
      placeholder='enter body here'
      value={body}
      onChangeText={setBody}
      />

      <Pressable onPress={submit}>
        <Text>Submit</Text>
      </Pressable>

      <View>
        <Text>Id:{response?.id}</Text>
        <Text>Title:{response?.title}</Text>
        <Text>Body:{response?.body}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})