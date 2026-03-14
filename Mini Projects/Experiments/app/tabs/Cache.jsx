import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { initDatabase, getAllNotes, addNote, deleteNote } from '../Components/notesDatabase';

export default function Cache() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('General');

  // Initialize database and load data
  useEffect(() => {
    const setupDatabase = async () => {
      await initDatabase();
      await loadNotes();
    };
    setupDatabase();
  }, []);

  // Load notes list
  const loadNotes = async () => {
    try {
      setLoading(true);
      const data = await getAllNotes();
      setNotes(data);
    } catch (error) {
      Alert.alert('Error', 'Failed to load notes');
    } finally {
      setLoading(false);
    }
  };

  // Handle adding a note
  const handleAddNote = async () => {
    if (!title.trim()) {
      Alert.alert('Validation', 'Title is required');
      return;
    }

    try {
      await addNote(title, content, category);
      setTitle('');
      setContent('');
      await loadNotes(); // reload the list
    } catch (error) {
      Alert.alert('Error', 'Failed to save note');
    }
  };

  // Handle deleting a note
  const handleDeleteNote = (id) => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this note?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteNote(id);
              await loadNotes();
            } catch (error) {
              Alert.alert('Error', 'Failed to delete note');
            }
          }
        }
      ]
    );
  };

  // Render a single note item
  const renderNoteItem = ({ item }) => (
    <View style={styles.noteItem}>
      <View style={styles.noteHeader}>
        <Text style={styles.noteTitle}>{item.title}</Text>
        <Text style={styles.noteCategory}>{item.category}</Text>
      </View>
      <Text style={styles.noteContent}>{item.content}</Text>
      <View style={styles.noteFooter}>
        <Text style={styles.noteDate}>
          {new Date(item.created_at).toLocaleDateString()}
        </Text>
        <TouchableOpacity onPress={() => handleDeleteNote(item.id)}>
          <Text style={styles.deleteButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  if (loading && notes.length === 0) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Add note form */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Title *"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={[styles.input, styles.contentInput]}
          placeholder="Content"
          value={content}
          onChangeText={setContent}
          multiline
          numberOfLines={3}
        />
        <TextInput
          style={styles.input}
          placeholder="Category (e.g., Work, Personal)"
          value={category}
          onChangeText={setCategory}
        />
        <Button title="Add Note" onPress={handleAddNote} />
      </View>

      {/* Notes list */}
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderNoteItem}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No notes yet. Add one above!</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
    backgroundColor: '#fff'
  },
  contentInput: {
    height: 80,
    textAlignVertical: 'top'
  },
  noteItem: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2
  },
  noteHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1
  },
  noteCategory: {
    fontSize: 12,
    color: '#666',
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    overflow: 'hidden'
  },
  noteContent: {
    fontSize: 14,
    color: '#333',
    marginBottom: 12
  },
  noteFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  noteDate: {
    fontSize: 12,
    color: '#999'
  },
  deleteButton: {
    color: '#ff4444',
    fontSize: 14,
    fontWeight: '500'
  },
  emptyText: {
    textAlign: 'center',
    color: '#999',
    marginTop: 32
  }
});