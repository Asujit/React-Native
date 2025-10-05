import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FlatData = Array.from({ length: 50 }, (_, index) => ({
  id: index.toString(),
  title: `Item ${index + 1}`,
}));

const handleRenderItem = ({
  item,
}: {
  item: { id: string; title: string };
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        width: '100%',
        backgroundColor: 'green',
      }}
    >
      <Text>{item.id}</Text>
      <Text>{item.title}</Text>
    </View>
  );
};

export default function FlatListScreen() {
  return (
    <View style={styles.container}>
      <Text>FlatListScreen</Text>
      <FlatList
        ListHeaderComponent={<Text style={styles.header}>Header of List</Text>}
        ListFooterComponent={<Text style={styles.footer}>Footer of List</Text>}
        data={FlatData}
        renderItem={handleRenderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'yellow',
  },
  list: {
    width: '100%',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
