import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useContext, useState } from "react";
import { CountContext } from "@/Context/Count";

export default function Home() {
  const count = useContext(CountContext);

  const [currentCount, setCurrentCount] = useState(count);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{currentCount}</Text>
      <Pressable onPress={() => setCurrentCount(currentCount + 1)} style={styles.btn}>
        <Text style={styles.text}>Increase</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:"center",
    justifyContent:'center',
  },
  text:{
    fontSize: 25,
    fontWeight: 'bold'
  },
  btn:{
    backgroundColor: "#ed8989",
    paddingHorizontal: '10%',
    paddingVertical: '2%',
    borderRadius: 10
  }
});
