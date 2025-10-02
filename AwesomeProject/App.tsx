import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Basics from './src/Components/Basics';
import TextInputComp from './src/Components/TextInput';
import Scroll from './src/Components/Scroll';
import Styling from './src/Components/Styling';
import Flexes from './src/Components/Flexes';
import Touchable from './src/Components/touchable';


 {
  return (
    <View style={style.container}>
      <ScrollView
        contentContainerStyle={style.scroll}
        nestedScrollEnabled={true}
      >
        <Basics />
        <TextInputComp />
      <Scroll />
      <Styling/>
      <Flexes/>
      <Touchable/>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll: {
    padding: 20,
    paddingBottom: '100%',
    marginBottom:20,
  },
});
