import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@cached_posts';
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export default function PostsScreen() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Load cached data immediately, then fetch fresh data
  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      // 1. Try to get cached posts
      const cached = await AsyncStorage.getItem(STORAGE_KEY);
      if (cached !== null) {
        setPosts(JSON.parse(cached));
      }
      
      // 2. Always fetch fresh data in the background (optional)
      fetchFreshPosts();
    } catch (error) {
      console.error('Failed to load cached posts', error);
      // If cache fails, still try to fetch from API
      fetchFreshPosts();
    } finally {
      setLoading(false);
    }
  };

  const fetchFreshPosts = async () => {
    try {
      setRefreshing(true);
      const response = await fetch(API_URL);
      const data = await response.json();
      
      // Update state
      setPosts(data);
      
      // Save to AsyncStorage
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('Failed to fetch posts', error);
    } finally {
      setRefreshing(false);
    }
  };

  const clearCache = async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      setPosts([]);
      // Optionally refetch
      fetchFreshPosts();
    } catch (error) {
      console.error('Failed to clear cache', error);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" style={styles.centered} />;
  }

  return (
    <View style={styles.container}>
      <Button title="Refresh" onPress={fetchFreshPosts} disabled={refreshing} />
      <Button title="Clear Cache" onPress={clearCache} color="red" />
      {refreshing && <ActivityIndicator />}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  centered: { flex: 1, justifyContent: 'center' },
  post: { marginBottom: 15, padding: 10, backgroundColor: '#f9f9f9', borderRadius: 5 },
  title: { fontWeight: 'bold', marginBottom: 5 },
});