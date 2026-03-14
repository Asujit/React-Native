import * as SQLite from 'expo-sqlite';

// Open the database (creates it if it doesn’t exist)
let db;

export const initDatabase = async () => {
  try {
    db = await SQLite.openDatabaseAsync('notes.db');
    
    // Create table
    await db.execAsync(`
      PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS notes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT,
        category TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
      CREATE INDEX IF NOT EXISTS idx_category ON notes(category);
    `);
    
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Database initialization failed:', error);
  }
};

// Add a note
export const addNote = async (title, content, category = 'General') => {
  try {
    const result = await db.runAsync(
      'INSERT INTO notes (title, content, category) VALUES (?, ?, ?)',
      title, content, category
    );
    return result.lastInsertRowId;
  } catch (error) {
    console.error('Failed to add note:', error);
    throw error;
  }
};

// Get all notes
export const getAllNotes = async () => {
  try {
    const allRows = await db.getAllAsync('SELECT * FROM notes ORDER BY created_at DESC');
    return allRows;
  } catch (error) {
    console.error('Failed to get notes:', error);
    return [];
  }
};

// Get notes by category
export const getNotesByCategory = async (category) => {
  try {
    const allRows = await db.getAllAsync(
      'SELECT * FROM notes WHERE category = ? ORDER BY created_at DESC',
      category
    );
    return allRows;
  } catch (error) {
    console.error('Failed to get notes by category:', error);
    return [];
  }
};

// Update a note
export const updateNote = async (id, title, content, category) => {
  try {
    await db.runAsync(
      'UPDATE notes SET title = ?, content = ?, category = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
      title, content, category, id
    );
  } catch (error) {
    console.error('Failed to update note:', error);
    throw error;
  }
};

// Delete a note
export const deleteNote = async (id) => {
  try {
    await db.runAsync('DELETE FROM notes WHERE id = ?', id);
  } catch (error) {
    console.error('Failed to delete note:', error);
    throw error;
  }
};

// Search notes by keyword
export const searchNotes = async (keyword) => {
  try {
    const allRows = await db.getAllAsync(
      'SELECT * FROM notes WHERE title LIKE ? OR content LIKE ? ORDER BY created_at DESC',
      `%${keyword}%`, `%${keyword}%`
    );
    return allRows;
  } catch (error) {
    console.error('Failed to search notes:', error);
    return [];
  }
};