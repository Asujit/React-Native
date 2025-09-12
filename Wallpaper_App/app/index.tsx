import { useEffect, useState } from "react";
import { Button, Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function CounterScreen() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setCount((c) => c + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⏱ Counter App</Text>

      <View style={styles.card}>
        <Text style={styles.counter}>{count}</Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#4CAF50" }]}
          onPress={() => setRunning(true)}
        >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#f44336" }]}
          onPress={() => setRunning(false)}
        >
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#2196F3" }]}
          onPress={() => setCount(0)}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 30,
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
    paddingVertical: 40,
    paddingHorizontal: 80,
    borderRadius: 20,
    marginBottom: 30,
    elevation: 5, // shadow for Android
    shadowColor: "#000", // shadow for iOS
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  counter: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#111",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
});
