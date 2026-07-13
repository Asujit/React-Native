import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <View
      style={[styles.container, { backgroundColor: isDark ? "#000" : "#fff" }]}
    >
      <Text style={[styles.text, { color: isDark ? "#fff" : "#000" }]}>
        {isDark ? "Dark Theme" : "Light Theme"}
      </Text>
      <Text style={[styles.text, { color: isDark ? "#fff" : "#000" }]}>
        Welcome to the React Native
      </Text>

      <Switch value={isDark} onValueChange={setIsDark} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});
