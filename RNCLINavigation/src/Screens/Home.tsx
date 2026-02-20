import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { custom } from '../context/UserContext';
import { useAppSelector } from '../store/hooks';

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  const navigation = useNavigation();
  const [data, setData] = useState<Post[]>([]);
  const { name } = custom();
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log('Exit !!');
      }
    };
    fetch();
  }, []);

  const renderItem = ({ item }: { item: Post }) => (
    <View style={[styles.itemContainer, isDarkMode && styles.itemContainerDark]}>
      <Text style={[styles.itemId, isDarkMode && styles.textLight]}>ID: {item.id}</Text>
      <Text style={[styles.itemTitle, isDarkMode && styles.textLight]}>{item.title}</Text>
    </View>
  );

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <Pressable
        style={({ pressed }) => [
          styles.menuButton,
          pressed && styles.menuButtonPressed,
          isDarkMode && styles.menuButtonDark,
        ]}
        onPress={() => navigation.navigate('Menu' as never)}
      >
        <Text style={styles.menuText}>Menu</Text>
      </Pressable>

      <View>
        <Text style={isDarkMode && styles.textLight}>Hello, {name}</Text>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f2f2f2',
  },
  containerDark: {
    backgroundColor: '#222',
  },
  menuButton: {
    alignSelf: 'center',
    marginVertical: 12,
    paddingVertical: 10,
    paddingHorizontal: 24,
    backgroundColor: '#007AFF',
    borderRadius: 25,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  menuButtonPressed: {
    backgroundColor: '#005bb5',
  },
  menuButtonDark: {
    backgroundColor: '#0055aa',
  },
  menuText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  itemContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  itemContainerDark: {
    backgroundColor: '#333',
    borderColor: '#555',
  },
  itemId: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#222',
    lineHeight: 22,
  },
  textLight: {
    color: '#fff',
  },
});