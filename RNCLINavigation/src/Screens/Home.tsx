import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React,{useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';


export default function Home() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  useEffect(() =>{
    const fetch = async() =>{
      try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
      }catch(error){
        console.log(error)
      }finally{
        console.log("Exit !!")
      }
    }
    fetch();
  }, []);


  const re = ({item}) =>{
    return(
      <View>
        <Text>{item.id}</Text>
        <Text>{item.title}</Text>
      </View>
    )
  }

  return (
    <View>
      <Pressable onPress={() => navigation.navigate('Menu')}>
      <Text>Home</Text>
      </Pressable>

      <FlatList
      data={data}
      renderItem={re}
      keyExtractor={(item) => item.id.toString()}
      />

    </View>
  )
}

const styles = StyleSheet.create({})