import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStack } from './RootNavigator';

const topics = [
  {
    id: 1,
    title: 'Flat List',
    screen: 'FlatListScreen',
  },
  {
    id: 2,
    title: 'Section List',
    screen: 'SectionListScreen',
  },
  {
    id: 3,
    title: 'Touchable Screen',
    screen: 'TouchableScreen',
  },
];

type HomeProps = StackNavigationProp<RootStack, 'Home'>;

type props = {
    navigation : HomeProps;
}

export default function Home({navigation} : props) {
    // const navigation = useNavigation<HomeProps>();
  return (
    <View style={styles.container}>
      <FlatList
      data={topics}
      renderItem={({item}) =>(
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate(item.screen as keyof RootStack)}>
            <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        padding:10
    },
    btn: {
        backgroundColor:"#b3b3b3ff",
        padding:10,
        marginBottom: 10,
        borderRadius: 10
    },
    text :{
        fontSize: 20,
        fontWeight:"bold"
    }
});
