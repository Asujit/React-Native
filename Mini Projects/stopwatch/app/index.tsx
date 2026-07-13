import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [second, setSecond] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSecond((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>StopWatch</Text>
      <Text style={styles.timer}>{second}s</Text>

      <View style={styles.btnContainer}>
        <Pressable onPress={() => setIsRunning(true)} style={styles.buttons}>
          <Text>Start</Text>
        </Pressable>

        <Pressable onPress={() => setIsRunning(false)} style={styles.buttons}>
          <Text>Stop</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            setIsRunning(false);
            setSecond(0);
          }}
          style={styles.buttons}
        >
          <Text>Reset</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    fontSize: 30,
  },

  timer: {
    fontSize: 60,
    fontWeight: "bold",
    marginBottom: 30,
  },

  btnContainer: {
    flexDirection: "row",
    gap: 10,
  },

  buttons: {
    padding: 10,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 10,
  },
});
