import { Pressable, StyleSheet, Text, View } from 'react-native';
import React,{useState, useCallback} from 'react';
import { useNavigation } from '@react-navigation/core';

function useUndo(initialValue){
    const[past, setPast] = useState({
        past: [],
        present: initialValue
    });

    const canUndo = past.past.length > 0;

    const set = useCallback((newValue) =>{
        setPast(prev =>({
            past: [...prev.past, prev.present],
            present: newValue,
        }));
    }, []);

    const undo = useCallback(() =>{
        setPast(prev =>{
            if(prev.past.length === 0) return prev;
            const previous = prev.past[prev.past.length -1];
            const newPast = prev.past.slice(0, -1);
            return{
                past: newPast,
                present: previous
            };
        });
    }, []);

    return {state: past.present, set, undo, canUndo}
}

export default function Main() {
  const navigation = useNavigation();
  const {state: count, set: setCount, undo, canUndo} = useUndo(0);


  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        <Pressable style={styles.navButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navButtonText}>Go to Do-able 👉</Text>
        </Pressable>

        <View style={styles.counterCard}>
          <Text style={styles.counterLabel}>Current Count</Text>
          <Text style={styles.counterValue}>{count}</Text>
          <View style={styles.historyStatus}>
            <Text style={styles.historyText}>
              Undo available: {canUndo ? '✅' : '❌'}
            </Text>
          </View>
        </View>

        <View style={styles.buttonsGrid}>
          <Pressable style={[styles.actionButton, styles.addButton]} onPress={() => setCount(count + 1)}>
            <Text style={styles.actionButtonText}>+ Add</Text>
          </Pressable>

          <Pressable style={[styles.actionButton, styles.minusButton]} onPress={() => setCount(count -1)}>
            <Text style={styles.actionButtonText}>− Minus</Text>
          </Pressable>

          <Pressable style={[styles.actionButton, styles.multiplyButton]} onPress={() => setCount(count * 2)}>
            <Text style={styles.actionButtonText}>× Multiply</Text>
          </Pressable>

          <Pressable style={[styles.actionButton, styles.divideButton]} onPress={() => setCount(count / 2)}>
            <Text style={styles.actionButtonText}>÷ Divide</Text>
          </Pressable>
        </View>

        <View style={styles.undoContainer}>
          <Pressable
            style={[styles.undoButton, !canUndo && styles.disabledButton]}
            onPress={undo}
            disabled={!canUndo}>
            <Text style={styles.undoText}>↩ Undo</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  navButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#6200ee',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    zIndex: 10,
  },
  navButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  counterCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 30,
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  counterLabel: {
    fontSize: 18,
    color: '#666',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  counterValue: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#333',
  },
  historyStatus: {
    marginTop: 10,
  },
  historyText: {
    fontSize: 14,
    color: '#888',
  },
  buttonsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  actionButton: {
    width: '48%',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  addButton: {
    backgroundColor: '#4CAF50',
  },
  minusButton: {
    backgroundColor: '#f44336',
  },
  multiplyButton: {
    backgroundColor: '#FF9800',
  },
  divideButton: {
    backgroundColor: '#2196F3',
  },
  undoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  undoButton: {
    backgroundColor: '#9C27B0',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  undoText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButton: {
    backgroundColor: '#ccc',
    opacity: 0.5,
  },
});