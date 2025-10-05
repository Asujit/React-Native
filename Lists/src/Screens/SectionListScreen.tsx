import { SectionList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const data = [
  {
    title: 'Men',
    data: ['Tshirt', 'Shirt'],
  },
  {
    title: 'Women',
    data: ['Saree', 'Kurti'],
  },
  {
    title: 'Childern',
    data: ['Toys', 'Ball'],
  },
];

export default function SectionListScreen() {
  const handleRenderItem = ({ item }: { item: string }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item}</Text>
      </View>
    );
  };

  const renderHeader = ({
    section: { title },
  }: {
    section: { title: string };
  }) => {
    return (
      <View style={styles.titleHeader}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text>SectionList</Text>
      <SectionList
        sections={data}
        renderSectionHeader={renderHeader}
        renderItem={handleRenderItem}
        keyExtractor={(item, index) => item + index}
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
  },
  list: {
    width: '100%',
  },
  titleHeader: {
    paddingVertical: 10,
    backgroundColor: "green",
    borderWidth:1,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20
  },
  item : {
    paddingVertical: 5,
    backgroundColor: "yellow",
    borderWidth:0.5,
    borderColor:"#d4d1d1ff",
    borderRadius: 10,
    alignItems: 'center'
  },
  titleText:{
    fontWeight:"bold",
    fontSize: 24,
    color: "#fff"
  },
  itemText :{
    fontWeight:"bold",
    fontSize: 16,
  }
});
